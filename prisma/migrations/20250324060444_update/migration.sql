-- CreateTable
CREATE TABLE "user_foods" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "food_id" TEXT NOT NULL,
    "date_logged" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "user_foods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_foods" ADD CONSTRAINT "user_foods_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_foods" ADD CONSTRAINT "user_foods_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "foods"("food_id") ON DELETE CASCADE ON UPDATE CASCADE;
