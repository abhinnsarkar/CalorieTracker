// "use server";
// // src/actions/createUser.ts
// import { prisma } from "@/lib/db";
// import { currentUser } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";

// export async function createUser(formData: FormData): Promise<void> {
//     console.log("createUser endpoint hit");
//     console.log(formData);

//     // Get the current user
//     const user = await currentUser();
//     const userId = user?.id as string;

//     // Ensure you're getting the correct keys and handle undefined values
//     const dob = formData.get("birthday") as string; // Change 'dob' to 'birthday' to match form data
//     const height_cm = parseFloat(formData.get("height") as string);
//     const weight_kg = parseFloat(formData.get("weight") as string);
//     const gender = formData.get("gender") as "male" | "female";
//     const objective = formData.get("objective") as
//         | "bulking"
//         | "cutting"
//         | "maintain";
//     const activity_level = formData.get("activityLevel") as
//         | "sedentary"
//         | "light"
//         | "moderate"
//         | "active"
//         | "superactive";

//     // Handling date parsing (if dob is a valid date string, it will be parsed correctly)
//     const parsedDob = dob ? new Date(dob) : null;
//     const age = parsedDob
//         ? new Date().getFullYear() - parsedDob.getFullYear()
//         : null;

//     // Handle invalid height and weight
//     if (isNaN(height_cm) || isNaN(weight_kg)) {
//         console.error("Invalid height or weight data");
//         throw new Error("Invalid height or weight data");
//     }

//     const bmr =
//         gender === "male"
//             ? 88.362 + 13.397 * weight_kg + 4.799 * height_cm - 5.677 * age!
//             : 447.593 + 9.247 * weight_kg + 3.098 * height_cm - 4.33 * age!;

//     const activityMultipliers = {
//         sedentary: 1.2,
//         light: 1.375,
//         moderate: 1.55,
//         active: 1.725,
//         superactive: 1.9,
//     };

//     let maintenance_calories =
//         bmr * (activityMultipliers[activity_level] || 1.2);

//     if (objective === "bulking") maintenance_calories += 500;
//     if (objective === "cutting") maintenance_calories -= 500;

//     console.log(
//         "---------------------------------------------------------------------------------------------"
//     );
//     console.log("User ID:", userId);
//     console.log("DOB:", parsedDob);
//     console.log("Height (cm):", height_cm);
//     console.log("Weight (kg):", weight_kg);
//     console.log("Gender:", gender);
//     console.log("Objective:", objective);
//     console.log("Activity Level:", activity_level);
//     console.log("Maintenance Calories:", maintenance_calories);
//     console.log(
//         "---------------------------------------------------------------------------------------------"
//     );

//     try {
//         // Create user in the database
//         await prisma.users.create({
//             data: {
//                 user_id: userId,
//                 dob: parsedDob,
//                 height_cm,
//                 weight_kg,
//                 gender,
//                 objective,
//                 activity_level,
//                 maintenance_calories: Math.round(maintenance_calories),
//                 profile_completed: true,
//             },
//         });

//         revalidatePath("/");
//     } catch (err) {
//         console.error("Failed to create user:", err);
//         throw new Error("Failed to create user");
//     }
// }

// export async function checkIfUserProfileAlreadyExists(): Promise<boolean> {
//     const user = await currentUser();

//     if (!user || !user.id) {
//         throw new Error("User not authenticated");
//     }

//     const userId = user.id;

//     const userExists = await prisma.users.findUnique({
//         where: {
//             user_id: userId,
//         },
//     });

//     return !!userExists;
// }

// export async function getUserCurrentBodyStats() {
//     try {
//         const user = await currentUser();
//         const userId = user?.id as string;
//         const userProfile = await prisma.users.findUnique({
//             where: {
//                 user_id: userId,
//             },
//             select: {
//                 height_cm: true,
//                 weight_kg: true,
//                 activity_level: true,
//                 objective: true,
//             },
//         });
//         return userProfile;
//     } catch (error) {
//         console.error("Error fetching user body stats:", error);
//         return null;
//     }
// }

// export async function updateUserProfile(formData: FormData) {
//     console.log("Updating user profile with data:", formData);

//     const user = await currentUser();
//     const userId = user?.id as string;

//     if (!userId) {
//         throw new Error("User not found");
//     }

//     // Parsing height and weight
//     const height_cm = parseFloat(formData.get("height") as string);
//     const weight_kg = parseFloat(formData.get("weight") as string);

//     // Handle the objective as a lowercase value for validation
//     const objective = (formData.get("objective") as string)?.toLowerCase();
//     const activity_level = formData.get("activityLevel") as
//         | "sedentary"
//         | "light"
//         | "moderate"
//         | "active"
//         | "superactive"
//         | undefined;

//     // Validate height and weight
//     if (
//         isNaN(height_cm) ||
//         isNaN(weight_kg) ||
//         height_cm <= 0 ||
//         weight_kg <= 0
//     ) {
//         console.error("Invalid height or weight data");
//         throw new Error("Invalid height or weight data");
//     }

//     // Validate objective and activity level
//     if (!["bulking", "cutting", "maintain"].includes(objective!)) {
//         console.error("Invalid objective data");
//         throw new Error("Invalid objective data");
//     }

//     if (
//         !["sedentary", "light", "moderate", "active", "superactive"].includes(
//             activity_level!
//         )
//     ) {
//         console.error("Invalid activity level data");
//         throw new Error("Invalid activity level data");
//     }

//     // Retrieve the original (capitalized) objective value for database update
//     const originalObjective = formData.get("objective") as string;

//     // Proceed to update the user profile in the database
//     try {
//         await prisma.users.update({
//             where: {
//                 user_id: userId,
//             },
//             data: {
//                 height_cm,
//                 weight_kg,
//                 objective: originalObjective, // Use the original value
//                 activity_level,
//             },
//         });
//     } catch (error) {
//         console.error("Failed to update user profile:", error);
//         throw new Error("Failed to update user profile");
//     }
// }

"use server";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// Function to capitalize the first letter of a string
// Modify the function to be async (even if it's not actually doing async work, Next.js expects async functions for server actions)
export async function capitalizeFirstLetter(value: string): Promise<string> {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export async function createUser(formData: FormData): Promise<void> {
    console.log("createUser endpoint hit");
    console.log(formData);

    // Get the current user
    const user = await currentUser();
    const userId = user?.id as string;

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

export async function updateUserProfile(formData: FormData) {
    console.log("Updating user profile with data:", formData);

    const user = await currentUser();
    const userId = user?.id as string;

    if (!userId) {
        throw new Error("User not found");
    }

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

    if (
        !["sedentary", "light", "moderate", "active", "superactive"].includes(
            activity_level!
        )
    ) {
        console.error("Invalid activity level data");
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
                activity_level: activity_level?.toLowerCase(), // Store activity level as lowercase
            },
        });
    } catch (error) {
        console.error("Failed to update user profile:", error);
        throw new Error("Failed to update user profile");
    }
}
