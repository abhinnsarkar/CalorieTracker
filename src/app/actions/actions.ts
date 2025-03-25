"use server";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { TodaysFoodEntry } from "../todaysfood/TodaysFoodTotals";

export async function capitalizeFirstLetter(value: string): Promise<string> {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export async function createUser(formData: FormData): Promise<void> {
    console.log("createUser endpoint hit");
    console.log(formData);

    // Get the current user
    const user = await currentUser();

    const userId = user?.id as string;
    console.log("User ID:", userId);

    // Ensure you're getting the correct keys and handle undefined values
    const dob = formData.get("birthday") as string; // Change 'dob' to 'birthday' to match form data
    const height_cm = parseFloat(formData.get("height") as string);
    const weight_kg = parseFloat(formData.get("weight") as string);
    const gender = formData.get("gender") as "male" | "female";
    const objective = formData.get("objective") as
        | "bulking"
        | "cutting"
        | "maintain";
    const activity_level = formData.get("activityLevel") as
        | "sedentary"
        | "light"
        | "moderate"
        | "active"
        | "superactive";

    // Handling date parsing (if dob is a valid date string, it will be parsed correctly)
    const parsedDob = dob ? new Date(dob) : null;
    const age = parsedDob
        ? new Date().getFullYear() - parsedDob.getFullYear()
        : null;

    // Handle invalid height and weight
    if (isNaN(height_cm) || isNaN(weight_kg)) {
        console.error("Invalid height or weight data");
        throw new Error("Invalid height or weight data");
    }

    const bmr =
        gender === "male"
            ? 88.362 + 13.397 * weight_kg + 4.799 * height_cm - 5.677 * age!
            : 447.593 + 9.247 * weight_kg + 3.098 * height_cm - 4.33 * age!;

    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        superactive: 1.9,
    };

    let maintenance_calories =
        bmr * (activityMultipliers[activity_level] || 1.2);

    if (objective === "bulking") maintenance_calories += 500;
    if (objective === "cutting") maintenance_calories -= 500;

    console.log(
        "---------------------------------------------------------------------------------------------"
    );
    console.log("User ID:", userId);
    console.log("DOB:", parsedDob);
    console.log("Height (cm):", height_cm);
    console.log("Weight (kg):", weight_kg);
    console.log("Gender:", gender);
    console.log("Objective:", objective);
    console.log("Activity Level:", activity_level);
    console.log("Maintenance Calories:", maintenance_calories);
    console.log(
        "---------------------------------------------------------------------------------------------"
    );

    try {
        // Create user in the database
        await prisma.users.create({
            data: {
                user_id: userId,
                dob: parsedDob,
                height_cm,
                weight_kg,
                gender,
                objective: objective.toLowerCase(), // Store objective as lowercase
                activity_level: activity_level.toLowerCase(), // Store activity level as lowercase
                maintenance_calories: Math.round(maintenance_calories),
                profile_completed: true,
            },
        });

        revalidatePath("/");
    } catch (err) {
        console.error("Failed to create user:", err);
        throw new Error("Failed to create user");
    }
}

export async function checkIfUserProfileAlreadyExists(): Promise<boolean> {
    const user = await currentUser();

    if (!user || !user.id) {
        throw new Error("User not authenticated");
    }

    const userId = user.id;

    const userExists = await prisma.users.findUnique({
        where: {
            user_id: userId,
        },
    });

    return !!userExists;
}

export async function getUserCurrentBodyStats() {
    try {
        const user = await currentUser();
        const userId = user?.id as string;
        const userProfile = await prisma.users.findUnique({
            where: {
                user_id: userId,
            },
            select: {
                height_cm: true,
                weight_kg: true,
                activity_level: true,
                objective: true,
            },
        });

        if (userProfile) {
            return {
                ...userProfile,
                activity_level: capitalizeFirstLetter(
                    userProfile.activity_level ?? ""
                ), // Capitalize first letter
                objective: capitalizeFirstLetter(userProfile.objective ?? ""), // Capitalize first letter
            };
        }

        return null;
    } catch (error) {
        console.error("Error fetching user body stats:", error);
        return null;
    }
}

export async function getUserCurrentNutritionStats() {
    try {
        const user = await currentUser();
        const userId = user?.id as string;
        const userProfile = await prisma.users.findUnique({
            where: {
                user_id: userId,
            },
            select: {
                maintenance_calories: true,
            },
        });

        if (userProfile) {
            return {
                ...userProfile,
                maintenance_calories: userProfile.maintenance_calories
                    ? Math.round(userProfile.maintenance_calories)
                    : null, // or provide a default value
            };
        }

        return null;
    } catch (error) {
        console.error("Error fetching user nutrition stats:", error);
        return null;
    }
}

export async function updateUserProfile(formData: FormData) {
    console.log("Updating user profile with data:", formData);

    const user = await currentUser();
    const userId = user?.id as string;

    if (!userId) {
        throw new Error("User not found");
    }

    console.log("update user profile with User ID:", userId);

    // Parsing height and weight
    const height_cm = parseFloat(formData.get("height") as string);
    const weight_kg = parseFloat(formData.get("weight") as string);

    // Handle the objective as a lowercase value for validation
    const objective = (formData.get("objective") as string)?.toLowerCase();
    const activity_level = formData.get("activityLevel") as
        | "sedentary"
        | "light"
        | "moderate"
        | "active"
        | "superactive"
        | undefined;

    // Validate height and weight
    if (
        isNaN(height_cm) ||
        isNaN(weight_kg) ||
        height_cm <= 0 ||
        weight_kg <= 0
    ) {
        console.error("Invalid height or weight data");
        throw new Error("Invalid height or weight data");
    }

    // Validate objective and activity level
    if (!["bulking", "cutting", "maintain"].includes(objective!)) {
        console.error("Invalid objective data");
        throw new Error("Invalid objective data");
    }

    const normalizedActivityLevel = activity_level?.toLowerCase();

    if (
        !["sedentary", "light", "moderate", "active", "superactive"].includes(
            normalizedActivityLevel!
        )
    ) {
        console.error("Invalid activity level data:", activity_level);
        throw new Error("Invalid activity level data");
    }

    // Retrieve the original (capitalized) objective value for database update
    const originalObjective = formData.get("objective") as string;

    // Proceed to update the user profile in the database
    try {
        await prisma.users.update({
            where: {
                user_id: userId,
            },
            data: {
                height_cm,
                weight_kg,
                objective: originalObjective.toLowerCase(), // Store objective as lowercase
                activity_level: normalizedActivityLevel, // Store activity level as lowercase
            },
        });
    } catch (error) {
        console.error("Failed to update user profile:", error);
        throw new Error("Failed to update user profile");
    }
}

export async function getAllFoods() {
    try {
        const foodsList = await prisma.foods.findMany();
        return foodsList.map((food) => ({
            ...food,
            protein:
                food.protein instanceof Prisma.Decimal
                    ? food.protein.toNumber()
                    : 0,
            carbs:
                food.carbs instanceof Prisma.Decimal
                    ? food.carbs.toNumber()
                    : 0,
            fats:
                food.fats instanceof Prisma.Decimal ? food.fats.toNumber() : 0,
            fiber:
                food.fiber instanceof Prisma.Decimal
                    ? food.fiber.toNumber()
                    : 0,
            sugar:
                food.sugar instanceof Prisma.Decimal
                    ? food.sugar.toNumber()
                    : 0,
            sodium:
                food.sodium instanceof Prisma.Decimal
                    ? food.sodium.toNumber()
                    : 0,
            potassium:
                food.potassium instanceof Prisma.Decimal
                    ? food.potassium.toNumber()
                    : 0,
            iron:
                food.iron instanceof Prisma.Decimal ? food.iron.toNumber() : 0,
            default_quantity:
                food.default_quantity instanceof Prisma.Decimal
                    ? food.default_quantity.toNumber()
                    : 0,
        }));
    } catch (error) {
        console.error("Error fetching all foods:", error);
        throw new Error("Failed to fetch all foods");
    }
}

export async function getFoodById(foodId: string) {
    try {
        const food = await prisma.foods.findUnique({
            where: {
                food_id: foodId,
            },
        });

        if (!food) return null;

        return {
            ...food,
            protein:
                food.protein instanceof Prisma.Decimal
                    ? food.protein.toNumber()
                    : 0,
            carbs:
                food.carbs instanceof Prisma.Decimal
                    ? food.carbs.toNumber()
                    : 0,
            fats:
                food.fats instanceof Prisma.Decimal ? food.fats.toNumber() : 0,
            fiber:
                food.fiber instanceof Prisma.Decimal
                    ? food.fiber.toNumber()
                    : 0,
            sugar:
                food.sugar instanceof Prisma.Decimal
                    ? food.sugar.toNumber()
                    : 0,
            sodium:
                food.sodium instanceof Prisma.Decimal
                    ? food.sodium.toNumber()
                    : 0,
            potassium:
                food.potassium instanceof Prisma.Decimal
                    ? food.potassium.toNumber()
                    : 0,
            iron:
                food.iron instanceof Prisma.Decimal ? food.iron.toNumber() : 0,
            default_quantity:
                food.default_quantity instanceof Prisma.Decimal
                    ? food.default_quantity.toNumber()
                    : 0,
        };
    } catch (error) {
        console.error("Error fetching food by ID:", error);
        throw new Error("Failed to fetch food by ID");
    }
}

export async function logFoodEntry({
    food_id,
    quantity,
}: {
    food_id: string;
    quantity: number;
}) {
    const user = await currentUser();
    const userId = user?.id as string;

    console.log("in actions.ts");
    console.log("userId", userId);
    console.log("food_id", food_id);
    console.log("quantity", quantity);

    if (!userId) {
        throw new Error("User not found");
    }

    try {
        await prisma.userFoods.create({
            data: {
                user_id: userId,
                food_id: food_id,
                quantity: quantity,
                date_logged: new Date(),
            },
        });

        return true;
    } catch (error) {
        console.error("Error logging food entry:", error ?? "No error object");
        throw error instanceof Error
            ? error
            : new Error("Failed to log food entry");
    }
}

export async function getTodaysFoodEntries(): Promise<TodaysFoodEntry[]> {
    const user = await currentUser();
    const userId = user?.id as string;

    if (!userId) {
        throw new Error("User not found");
    }

    const now = new Date();
    const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
    const startOfTomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );

    const userFoodEntries = await prisma.userFoods.findMany({
        where: {
            user_id: userId,
            date_logged: {
                gte: startOfToday,
                lt: startOfTomorrow,
            },
        },
        include: {
            food: true,
        },
    });

    const todaysEntries: TodaysFoodEntry[] = userFoodEntries.map((entry) => {
        const multiplier = Number(entry.quantity); // servings consumed

        return {
            entry_id: entry.id,
            food_name: entry.food.food_name,
            calories: Number(entry.food.calories) * multiplier,
            protein: Number(entry.food.protein) * multiplier,
            carbs: Number(entry.food.carbs) * multiplier,
            fats: Number(entry.food.fats) * multiplier,
            fiber: Number(entry.food.fiber) * multiplier,
            sugar: Number(entry.food.sugar) * multiplier,
            sodium: Number(entry.food.sodium) * multiplier,
            potassium: Number(entry.food.potassium) * multiplier,
            iron: Number(entry.food.iron) * multiplier,
        };
    });

    return todaysEntries;
}
