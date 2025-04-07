"use server";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {
    FoodItemInterface,
    TodaysFoodEntryInterface,
    TodaysFoodToalsInterface,
    CaloricConsumptionInterface,
} from "@/app/interfaces";

export async function capitalizeFirstLetter(value: string): Promise<string> {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export async function createUser(formData: FormData): Promise<boolean> {
    const user = await currentUser();
    const userId = user?.id as string;

    const dob = formData.get("birthday") as string;
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

    console.log("activity_level", activity_level);

    const parsedDob = dob ? new Date(dob) : null;
    const age = parsedDob
        ? new Date().getFullYear() - parsedDob.getFullYear()
        : null;

    if (isNaN(height_cm) || isNaN(weight_kg)) {
        console.error("Invalid height or weight data");
        throw new Error("Invalid height or weight data");
    }

    const bmr =
        gender === "male"
            ? 88.362 + 13.397 * weight_kg + 4.799 * height_cm - 5.677 * age!
            : 447.593 + 9.247 * weight_kg + 3.098 * height_cm - 4.33 * age!; //female

    const normalizedActivityLevelMultiplier = (() => {
        switch (activity_level?.toLowerCase()) {
            case "sedentary":
                return 1.2;
            case "light":
                return 1.375;
            case "moderate":
                return 1.55;
            case "active":
                return 1.725;
            case "superactive":
                return 1.9;
            default:
                return 1.2;
        }
    })();
    console.log(
        "normalizedActivityLevelMultiplier",
        normalizedActivityLevelMultiplier
    );
    console.log("bmr", bmr);

    let maintenance_calories = bmr * normalizedActivityLevelMultiplier;
    console.log("maintenance_calories", maintenance_calories);

    if (objective === "bulking") maintenance_calories += 500;
    if (objective === "cutting") maintenance_calories -= 500;

    // Calculate daily protein needs based on gender and objective
    // Values are in grams per kilogram of body weight
    const protein =
        gender === "male"
            ? // Male targets
              objective === "cutting"
                ? weight_kg * 2.4 // Higher protein to preserve muscle
                : objective === "bulking"
                ? weight_kg * 1.8 // Moderate-high for muscle growth
                : weight_kg * 1.5 // Maintain
            : // Female targets
            objective === "cutting"
            ? weight_kg * 2.2 // Slightly less than male, but still high
            : objective === "bulking"
            ? weight_kg * 1.6
            : weight_kg * 1.4;

    const fats =
        gender === "male"
            ? objective === "cutting"
                ? weight_kg * 0.9
                : objective === "bulking"
                ? weight_kg * 1.2
                : weight_kg * 1.0
            : objective === "cutting"
            ? weight_kg * 0.8
            : objective === "bulking"
            ? weight_kg * 1.0
            : weight_kg * 0.9;

    const proteinCalories = protein * 4;
    const fatCalories = fats * 9;
    const remainingCalories =
        maintenance_calories - (proteinCalories + fatCalories);
    const carbs = remainingCalories > 0 ? remainingCalories / 4 : 0;
    // Micronutrient estimation based on gender and rough weight ranges
    const fiber =
        gender === "male"
            ? weight_kg > 70
                ? 38
                : 30
            : weight_kg > 55
            ? 25
            : 21;

    const sugar = gender === "male" ? 36 : 25;
    const sodium = 2300;
    const potassium = gender === "male" ? 3400 : 2600;
    const iron = gender === "male" ? 8 : 18;

    try {
        // Create user in the database
        const user = await prisma.users.create({
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
                protein,
                fats,
                carbs,
                fiber,
                sugar,
                sodium,
                potassium,
                iron,
            },
        });

        console.log("User created:", user);
        revalidatePath("/");
        return true;
    } catch (err) {
        console.error("Failed to create user:", err);
        throw new Error("Failed to create user");
        return false;
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

export async function getUserCurrentNutritionRequirements() {
    try {
        const user = await currentUser();
        const userId = user?.id as string;
        const userProfile = await prisma.users.findUnique({
            where: {
                user_id: userId,
            },
            select: {
                maintenance_calories: true,
                protein: true,
                fats: true,
                carbs: true,
                fiber: true,
                sugar: true,
                sodium: true,
                potassium: true,
                iron: true,
            },
        });

        if (userProfile) {
            return {
                ...userProfile,
                maintenance_calories: userProfile.maintenance_calories
                    ? Math.round(userProfile.maintenance_calories)
                    : null,
                protein: userProfile.protein ? Number(userProfile.protein) : 0,
                fats: userProfile.fats ? Number(userProfile.fats) : 0,
                carbs: userProfile.carbs ? Number(userProfile.carbs) : 0,
                fiber: userProfile.fiber ? Number(userProfile.fiber) : 0,
                sugar: userProfile.sugar ? Number(userProfile.sugar) : 0,
                sodium: userProfile.sodium ? Number(userProfile.sodium) : 0,
                potassium: userProfile.potassium
                    ? Number(userProfile.potassium)
                    : 0,
                iron: userProfile.iron ? Number(userProfile.iron) : 0,
            };
        }

        return null;
    } catch (error) {
        console.error("Error fetching user nutrition stats:", error);
        return null;
    }
}

export async function updateUserProfile(formData: FormData): Promise<boolean> {
    const user = await currentUser();
    const userId = user?.id as string;

    if (!userId) {
        throw new Error("User not found");
    }

    // Parsing height and weight
    const height_cm = parseFloat(formData.get("height") as string);
    const weight_kg = parseFloat(formData.get("weight") as string);

    console.log("formData", formData);

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

    // Recalculate nutritional values based on new height, weight, gender, activity level, and objective
    const userRecord = await prisma.users.findUnique({
        where: { user_id: userId },
        select: { dob: true, gender: true },
    });

    if (!userRecord || !userRecord.dob || !userRecord.gender) {
        throw new Error("User profile is missing DOB or gender");
    }

    const dob = new Date(userRecord.dob);
    const today = new Date();
    const age =
        today.getFullYear() -
        dob.getFullYear() -
        (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
            ? 1
            : 0);

    const gender = userRecord.gender;

    const bmr =
        gender === "male"
            ? 88.362 + 13.397 * weight_kg + 4.799 * height_cm - 5.677 * age
            : 447.593 + 9.247 * weight_kg + 3.098 * height_cm - 4.33 * age;

    const normalizedActivityLevelMultiplier = (() => {
        switch (activity_level?.toLowerCase()) {
            case "sedentary":
                return 1.2;
            case "light":
                return 1.375;
            case "moderate":
                return 1.55;
            case "active":
                return 1.725;
            case "superactive":
                return 1.9;
            default:
                return 1.2;
        }
    })();
    let maintenance_calories = bmr * normalizedActivityLevelMultiplier;

    if (objective === "bulking") maintenance_calories += 500;
    if (objective === "cutting") maintenance_calories -= 500;

    const protein =
        gender === "male"
            ? objective === "cutting"
                ? weight_kg * 2.4
                : objective === "bulking"
                ? weight_kg * 1.8
                : weight_kg * 1.5
            : objective === "cutting"
            ? weight_kg * 2.2
            : objective === "bulking"
            ? weight_kg * 1.6
            : weight_kg * 1.4;

    const fats =
        gender === "male"
            ? objective === "cutting"
                ? weight_kg * 0.9
                : objective === "bulking"
                ? weight_kg * 1.2
                : weight_kg * 1.0
            : objective === "cutting"
            ? weight_kg * 0.8
            : objective === "bulking"
            ? weight_kg * 1.0
            : weight_kg * 0.9;

    const proteinCalories = protein * 4;
    const fatCalories = fats * 9;
    const remainingCalories =
        maintenance_calories - (proteinCalories + fatCalories);
    const carbs = remainingCalories > 0 ? remainingCalories / 4 : 0;

    const fiber =
        gender === "male"
            ? weight_kg > 70
                ? 38
                : 30
            : weight_kg > 55
            ? 25
            : 21;

    const sugar = gender === "male" ? 36 : 25;
    const sodium = 2300;
    const potassium = gender === "male" ? 3400 : 2600;
    const iron = gender === "male" ? 8 : 18;

    console.log("Updated values:");
    console.log("height_cm", height_cm);
    console.log("weight_kg", weight_kg);
    console.log("objective", originalObjective);
    console.log("activity_level", normalizedActivityLevel);
    console.log("activity_level_multiplier", normalizedActivityLevelMultiplier);
    console.log("maintenance_calories", maintenance_calories);
    console.log("protein", protein);
    console.log("fats", fats);
    console.log("carbs", carbs);
    console.log("fiber", fiber);
    console.log("sugar", sugar);
    console.log("sodium", sodium);
    console.log("potassium", potassium);
    console.log("iron", iron);

    // Update the user profile in the database with recalculated values
    try {
        await prisma.users.update({
            where: {
                user_id: userId,
            },
            data: {
                height_cm,
                weight_kg,
                objective: originalObjective.toLowerCase(),
                activity_level: normalizedActivityLevel,
                maintenance_calories: Math.round(maintenance_calories),
                protein,
                fats,
                carbs,
                fiber,
                sugar,
                sodium,
                potassium,
                iron,
            },
        });
        return true;
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

    if (!userId) {
        throw new Error("User not found");
    }

    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(now.getTime() - offsetMs);

    try {
        await prisma.userFoods.create({
            data: {
                user_id: userId,
                food_id: food_id,
                quantity: quantity,
                date_logged: localDate,
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

export async function getTodaysFoodEntries(): Promise<
    TodaysFoodEntryInterface[]
> {
    try {
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

        const todaysEntries: TodaysFoodEntryInterface[] = userFoodEntries.map(
            (entry) => {
                const multiplier = Number(entry.quantity); // servings consumed

                return {
                    entry_id: entry.id,
                    food_id: entry.food_id,
                    quantity: multiplier,
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
            }
        );

        return todaysEntries;
    } catch (error) {
        console.error("Error fetching todays food entries:", error);
        throw new Error("Failed to fetch todays food entries");
    }
}

export async function getTodaysFoodTotals(): Promise<TodaysFoodToalsInterface> {
    try {
        const todaysFoodEntries = await getTodaysFoodEntries();

        const totals = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            fiber: 0,
            sugar: 0,
            sodium: 0,
            potassium: 0,
            iron: 0,
        };

        for (const entry of todaysFoodEntries) {
            totals.calories += entry.calories;
            totals.protein += entry.protein;
            totals.carbs += entry.carbs;
            totals.fats += entry.fats;
            totals.fiber += entry.fiber;
            totals.sugar += entry.sugar;
            totals.sodium += entry.sodium;
            totals.potassium += entry.potassium;
            totals.iron += entry.iron;
        }

        return totals;
    } catch (error) {
        console.error("Error fetching food by ID:", error);
        throw new Error("Failed to fetch food by ID");
    }
}

export async function searchFoods(
    searchEntry: string
): Promise<FoodItemInterface[]> {
    if (!searchEntry.trim()) return [];

    const foodsList = await prisma.foods.findMany({
        where: {
            food_name: {
                contains: searchEntry,
                mode: "insensitive",
            },
        },
    });

    return foodsList.map((food) => ({
        ...food,
        protein:
            food.protein instanceof Prisma.Decimal
                ? food.protein.toNumber()
                : 0,
        carbs: food.carbs instanceof Prisma.Decimal ? food.carbs.toNumber() : 0,
        fats: food.fats instanceof Prisma.Decimal ? food.fats.toNumber() : 0,
        fiber: food.fiber instanceof Prisma.Decimal ? food.fiber.toNumber() : 0,
        sugar: food.sugar instanceof Prisma.Decimal ? food.sugar.toNumber() : 0,
        sodium:
            food.sodium instanceof Prisma.Decimal ? food.sodium.toNumber() : 0,
        potassium:
            food.potassium instanceof Prisma.Decimal
                ? food.potassium.toNumber()
                : 0,
        iron: food.iron instanceof Prisma.Decimal ? food.iron.toNumber() : 0,
        default_quantity:
            food.default_quantity instanceof Prisma.Decimal
                ? food.default_quantity.toNumber()
                : 0,
    }));
}

export async function deleteLoggedFood(log_id: string): Promise<boolean> {
    const user = await currentUser();
    const userId = user?.id as string;

    if (!userId) {
        throw new Error("User not found");
    }

    try {
        await prisma.userFoods.delete({
            where: {
                id: log_id,
                user_id: userId,
            },
        });

        return true;
    } catch (error) {
        console.error("Error deleting logged food:", error);
        return false;
    }
}

export async function getPreviousWeeksCaloricConsumption(): Promise<
    CaloricConsumptionInterface[]
> {
    try {
        const user = await currentUser();
        const userId = user?.id as string;

        if (!userId) {
            throw new Error("User not found");
        }

        const todaysDate = new Date();
        const startDate = new Date(
            todaysDate.getFullYear(),
            todaysDate.getMonth(),
            todaysDate.getDate() - 7
        );

        const entries = await prisma.userFoods.findMany({
            where: {
                user_id: userId,
                date_logged: {
                    gte: startDate,
                    lte: todaysDate,
                },
            },
            select: {
                quantity: true,
                date_logged: true,
                food: {
                    select: {
                        calories: true,
                    },
                },
            },
        });

        const dailyTotals: { [date: string]: number } = {};

        for (const entry of entries) {
            const quantity =
                entry.quantity instanceof Prisma.Decimal
                    ? entry.quantity.toNumber()
                    : Number(entry.quantity);
            const calories = Number(entry.food.calories) * quantity;
            const dateKey = entry.date_logged.toISOString().split("T")[0];
            dailyTotals[dateKey] = (dailyTotals[dateKey] || 0) + calories;
        }

        const result: CaloricConsumptionInterface[] = Object.entries(
            dailyTotals
        ).map(([date, calories]) => ({
            date,
            calories,
        }));

        return result;
    } catch (error) {
        console.error("Error fetching todays food entries:", error);
        throw new Error("Failed to fetch todays food entries");
    }
}

export async function getMaintenanceCalories() {
    const user = await currentUser();
    const userId = user?.id as string;

    if (!userId) {
        throw new Error("User not found");
    }

    try {
        const maintenanceCalories = await prisma.users.findUnique({
            where: {
                user_id: userId,
            },
            select: {
                maintenance_calories: true,
            },
        });

        return maintenanceCalories;
    } catch (error) {
        console.error("Error fetching maintenance calories:", error);
        throw new Error("Failed to fetch maintenance calories");
    }
}
