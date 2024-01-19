/*
  Warnings:

  - The `answer` column on the `ProductQA` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `email` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductActivityStage" AS ENUM ('START', 'PAYMENT', 'PRORIETOR', 'REVIEW');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_serviceId_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "address" TEXT,
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "currentState" "ProductActivityStage" NOT NULL DEFAULT 'START',
ADD COLUMN     "email" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ALTER COLUMN "serviceId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductQA" DROP COLUMN "answer",
ADD COLUMN     "answer" TEXT[];

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
