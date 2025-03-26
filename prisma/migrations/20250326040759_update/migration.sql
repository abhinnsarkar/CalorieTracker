/*
  Warnings:

  - You are about to drop the column `fat` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "fat",
ADD COLUMN     "fats" DECIMAL(6,2);
