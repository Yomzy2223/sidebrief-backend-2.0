/*
  Warnings:

  - You are about to drop the column `address` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `businessNames` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `objective` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `serviceId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `isGeneral` to the `ProductQA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `referral` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_serviceId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "address",
DROP COLUMN "businessNames",
DROP COLUMN "createdBy",
DROP COLUMN "description",
DROP COLUMN "email",
DROP COLUMN "objective",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "serviceId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductQA" ADD COLUMN     "isGeneral" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "fullName" TEXT NOT NULL,
ALTER COLUMN "referral" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
