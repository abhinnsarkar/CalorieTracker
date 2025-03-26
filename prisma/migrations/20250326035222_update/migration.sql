/*
  Warnings:

  - The `gender` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `objective` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activity_level` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "carbs" DECIMAL(6,2),
ADD COLUMN     "fat" DECIMAL(6,2),
ADD COLUMN     "fiber" DECIMAL(6,2),
ADD COLUMN     "iron" DECIMAL(6,2),
ADD COLUMN     "potassium" DECIMAL(6,2),
ADD COLUMN     "protein" DECIMAL(6,2),
ADD COLUMN     "sodium" DECIMAL(6,2),
ADD COLUMN     "sugar" DECIMAL(6,2),
DROP COLUMN "gender",
ADD COLUMN     "gender" "gender_enum",
DROP COLUMN "objective",
ADD COLUMN     "objective" "objective_enum",
DROP COLUMN "activity_level",
ADD COLUMN     "activity_level" "activity_level_enum";
