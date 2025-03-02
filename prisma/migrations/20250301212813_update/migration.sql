/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `height_cm` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.
  - You are about to alter the column `weight_kg` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.
  - The `gender` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `objective` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activity_level` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "profile_completed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "dob" DROP NOT NULL,
ALTER COLUMN "dob" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "height_cm" DROP NOT NULL,
ALTER COLUMN "height_cm" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weight_kg" DROP NOT NULL,
ALTER COLUMN "weight_kg" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT,
DROP COLUMN "objective",
ADD COLUMN     "objective" TEXT,
DROP COLUMN "activity_level",
ADD COLUMN     "activity_level" TEXT,
ALTER COLUMN "maintenance_calories" DROP DEFAULT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("user_id");
