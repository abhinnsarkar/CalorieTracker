import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData): Promise<void> {
    const userId = formData.get("userId") as string;
    const dob = formData.get("dob") as string;
    const height_cm = parseFloat(formData.get("height_cm") as string);
    const weight_kg = parseFloat(formData.get("weight_kg") as string);
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

    const age = new Date().getFullYear() - new Date(dob).getFullYear();

    const bmr =
        gender === "male"
            ? 88.362 + 13.397 * weight_kg + 4.799 * height_cm - 5.677 * age
            : 447.593 + 9.247 * weight_kg + 3.098 * height_cm - 4.33 * age;

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

    try {
        await prisma.users.create({
            data: {
                user_id: userId,
                dob: new Date(dob),
                height_cm,
                weight_kg,
                gender,
                objective,
                activity_level,
                maintenance_calories: Math.round(maintenance_calories),
            },
        });

        revalidatePath("/dashboard");
    } catch (err) {
        console.error("Failed to create user:", err);
        throw new Error("Failed to create user");
    }
}
