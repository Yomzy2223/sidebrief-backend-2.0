/*
  Warnings:

  - You are about to drop the column `productId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `completed` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `currentState` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `OwnerIsCalled` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `agentIsCalled` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `controllerIsCalled` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `feature` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `hasAgent` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `hasController` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `hasOwner` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `hasShares` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceCategoryId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `timeline` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceFormId` on the `ServiceSubForm` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `ProductQA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductQASubForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceCategoryForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceCategorySubForm` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productRequestId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeline` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `serviceId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `formId` to the `ServiceSubForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productRequestId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductQA" DROP CONSTRAINT "ProductQA_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductQASubForm" DROP CONSTRAINT "ProductQASubForm_productQAId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_serviceCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceCategoryForm" DROP CONSTRAINT "ServiceCategoryForm_serviceCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceCategorySubForm" DROP CONSTRAINT "ServiceCategorySubForm_formId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSubForm" DROP CONSTRAINT "ServiceSubForm_serviceFormId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_productId_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "productId",
ADD COLUMN     "productRequestId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "address",
DROP COLUMN "completed",
DROP COLUMN "currentState",
DROP COLUMN "email",
DROP COLUMN "paid",
DROP COLUMN "status",
DROP COLUMN "userId",
ADD COLUMN     "OwnerIsCalled" TEXT,
ADD COLUMN     "agentIsCalled" TEXT,
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "controllerIsCalled" TEXT,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "feature" TEXT[],
ADD COLUMN     "hasAgent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasController" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasOwner" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasShares" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "timeline" TEXT NOT NULL,
ALTER COLUMN "serviceId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "OwnerIsCalled",
DROP COLUMN "agentIsCalled",
DROP COLUMN "amount",
DROP COLUMN "controllerIsCalled",
DROP COLUMN "country",
DROP COLUMN "currency",
DROP COLUMN "feature",
DROP COLUMN "hasAgent",
DROP COLUMN "hasController",
DROP COLUMN "hasOwner",
DROP COLUMN "hasShares",
DROP COLUMN "serviceCategoryId",
DROP COLUMN "timeline";

-- AlterTable
ALTER TABLE "ServiceSubForm" DROP COLUMN "serviceFormId",
ADD COLUMN     "formId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "productId",
ADD COLUMN     "productRequestId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProductQA";

-- DropTable
DROP TABLE "ProductQASubForm";

-- DropTable
DROP TABLE "ServiceCategory";

-- DropTable
DROP TABLE "ServiceCategoryForm";

-- DropTable
DROP TABLE "ServiceCategorySubForm";

-- CreateTable
CREATE TABLE "ProductForm" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT,
    "description" TEXT,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSubForm" (
    "id" TEXT NOT NULL,
    "question" TEXT,
    "options" TEXT[],
    "type" TEXT,
    "allowOther" BOOLEAN NOT NULL DEFAULT false,
    "fileName" TEXT,
    "fileType" TEXT,
    "fileLink" TEXT,
    "dependsOn" TEXT,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productFormId" TEXT NOT NULL,

    CONSTRAINT "ProductSubForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRequest" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "currentState" "ProductActivityStage" NOT NULL DEFAULT 'START',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRequestQA" (
    "id" TEXT NOT NULL,
    "question" TEXT,
    "answer" TEXT[],
    "type" TEXT,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "isGeneral" BOOLEAN NOT NULL DEFAULT false,
    "fileName" TEXT,
    "fileType" TEXT,
    "fileLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "productRequestId" TEXT NOT NULL,

    CONSTRAINT "ProductRequestQA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRequestQASubForm" (
    "id" TEXT NOT NULL,
    "question" TEXT,
    "answer" TEXT[],
    "type" TEXT,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "productRequestQAId" TEXT NOT NULL,

    CONSTRAINT "ProductRequestQASubForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductForm_title_key" ON "ProductForm"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_key" ON "Service"("name");

-- AddForeignKey
ALTER TABLE "ServiceSubForm" ADD CONSTRAINT "ServiceSubForm_formId_fkey" FOREIGN KEY ("formId") REFERENCES "ServiceForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductForm" ADD CONSTRAINT "ProductForm_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSubForm" ADD CONSTRAINT "ProductSubForm_productFormId_fkey" FOREIGN KEY ("productFormId") REFERENCES "ProductForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRequest" ADD CONSTRAINT "ProductRequest_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRequest" ADD CONSTRAINT "ProductRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRequestQA" ADD CONSTRAINT "ProductRequestQA_productRequestId_fkey" FOREIGN KEY ("productRequestId") REFERENCES "ProductRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRequestQASubForm" ADD CONSTRAINT "ProductRequestQASubForm_productRequestQAId_fkey" FOREIGN KEY ("productRequestQAId") REFERENCES "ProductRequestQA"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_productRequestId_fkey" FOREIGN KEY ("productRequestId") REFERENCES "ProductRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_productRequestId_fkey" FOREIGN KEY ("productRequestId") REFERENCES "ProductRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
