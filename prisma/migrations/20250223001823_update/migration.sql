-- CreateEnum
CREATE TYPE "gender_enum" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "objective_enum" AS ENUM ('bulking', 'cutting', 'maintain');

-- CreateEnum
CREATE TYPE "activity_level_enum" AS ENUM ('sedentary', 'light', 'moderate', 'active', 'superactive');

-- CreateTable
CREATE TABLE "foods" (
    "food_id" VARCHAR(255) NOT NULL,
    "food_name" VARCHAR(100) NOT NULL,
    "calories" INTEGER NOT NULL,
    "protein" DECIMAL(6,2),
    "carbs" DECIMAL(6,2),
    "fats" DECIMAL(6,2),
    "fiber" DECIMAL(6,2),
    "sugar" DECIMAL(6,2),
    "sodium" DECIMAL(6,2),
    "potassium" DECIMAL(6,2),
    "iron" DECIMAL(6,2),
    "portion_size" VARCHAR(50),
    "default_quantity" DECIMAL(5,2),
    "description" TEXT,
    "instructions" TEXT,
    "ingredients" TEXT,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("food_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" VARCHAR(255) NOT NULL,
    "dob" DATE NOT NULL,
    "height_cm" DECIMAL(5,2) NOT NULL,
    "weight_kg" DECIMAL(5,2) NOT NULL,
    "gender" "gender_enum" NOT NULL,
    "objective" "objective_enum" NOT NULL,
    "activity_level" "activity_level_enum" NOT NULL,
    "maintenance_calories" INTEGER DEFAULT 0,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);
