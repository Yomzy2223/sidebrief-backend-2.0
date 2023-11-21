/*
  Warnings:

  - You are about to drop the column `launchId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `isDeprecated` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `launchId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `Entity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Launch` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OwnerIsCalled` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agentIsCalled` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `controllerIsCalled` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasAgent` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasController` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasOwner` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasShares` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfShares` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceCategoryId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeline` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Entity" DROP CONSTRAINT "Entity_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Launch" DROP CONSTRAINT "Launch_entityId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_launchId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_launchId_fkey";

-- DropIndex
DROP INDEX "Service_name_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "launchId",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "isDeprecated",
ADD COLUMN     "OwnerIsCalled" TEXT NOT NULL,
ADD COLUMN     "agentIsCalled" TEXT NOT NULL,
ADD COLUMN     "categoryForm" TEXT[],
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "controllerIsCalled" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "feature" TEXT[],
ADD COLUMN     "hasAgent" BOOLEAN NOT NULL,
ADD COLUMN     "hasController" BOOLEAN NOT NULL,
ADD COLUMN     "hasOwner" BOOLEAN NOT NULL,
ADD COLUMN     "hasShares" BOOLEAN NOT NULL,
ADD COLUMN     "numberOfShares" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "requiredDocuments" TEXT[],
ADD COLUMN     "serviceCategoryId" TEXT NOT NULL,
ADD COLUMN     "timeline" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "launchId",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "referral" DROP NOT NULL;

-- DropTable
DROP TABLE "Entity";

-- DropTable
DROP TABLE "Launch";

-- CreateTable
CREATE TABLE "ServiceCategoryForm" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceCategoryId" TEXT NOT NULL,

    CONSTRAINT "ServiceCategoryForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ServiceTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceForm" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ServiceForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "address" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "description" TEXT,
    "objective" TEXT[],
    "businessNames" TEXT[],
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductQA" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductQA_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceCategoryForm" ADD CONSTRAINT "ServiceCategoryForm_serviceCategoryId_fkey" FOREIGN KEY ("serviceCategoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceCategoryId_fkey" FOREIGN KEY ("serviceCategoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTemplate" ADD CONSTRAINT "ServiceTemplate_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceForm" ADD CONSTRAINT "ServiceForm_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQA" ADD CONSTRAINT "ProductQA_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
