export interface FoodItemInterface {
    food_id: string;
    food_name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
    sugar: number;
    sodium: number;
    potassium: number;
    iron: number;
    portion_size: string | null;
    default_quantity: number;
    description: string | null;
    instructions: string | null;
    ingredients: string | null;
}

export interface TodaysFoodEntryInterface {
    entry_id: string;
    food_id: string;
    quantity: number;
    food_name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
    sugar: number;
    sodium: number;
    potassium: number;
    iron: number;
}

export interface TodaysFoodToalsInterface {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
    sugar: number;
    sodium: number;
    potassium: number;
    iron: number;
}

export interface NutritionRequirementsInterface {
    maintenance_calories: number | null;
    protein: number | null;
    fats: number | null;
    carbs: number | null;
    fiber: number | null;
    sugar: number | null;
    sodium: number | null;
    potassium: number | null;
    iron: number | null;
}

export interface CaloricConsumptionInterface {
    date: string; // in YYYY-MM-DD format
    calories: number;
}
