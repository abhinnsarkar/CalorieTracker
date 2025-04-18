-- AlterTable
ALTER TABLE "user_foods" ALTER COLUMN "date_logged" DROP DEFAULT,
ALTER COLUMN "date_logged" SET DATA TYPE DATE;
