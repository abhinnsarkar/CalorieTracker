/*
  Warnings:

  - The `objective` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activity_level` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "objective",
ADD COLUMN     "objective" "objective_enum",
DROP COLUMN "activity_level",
ADD COLUMN     "activity_level" "activity_level_enum";
