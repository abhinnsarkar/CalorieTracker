/*
  Warnings:

  - The `gender` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `objective` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activity_level` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT,
DROP COLUMN "objective",
ADD COLUMN     "objective" TEXT,
DROP COLUMN "activity_level",
ADD COLUMN     "activity_level" TEXT;
