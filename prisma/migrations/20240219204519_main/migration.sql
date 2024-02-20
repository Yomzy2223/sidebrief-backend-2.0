/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Claim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Collaborator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CollaboratorDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invitation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductRequestQA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductRequestQASubForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSubForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reward` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceSubForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Staff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "CollaboratorDocument" DROP CONSTRAINT "CollaboratorDocument_collaboratorId_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_productRequestId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ProductForm" DROP CONSTRAINT "ProductForm_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRequest" DROP CONSTRAINT "ProductRequest_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRequest" DROP CONSTRAINT "ProductRequest_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRequestQA" DROP CONSTRAINT "ProductRequestQA_productRequestId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRequestQASubForm" DROP CONSTRAINT "ProductRequestQASubForm_productRequestQAId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSubForm" DROP CONSTRAINT "ProductSubForm_productFormId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceForm" DROP CONSTRAINT "ServiceForm_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSubForm" DROP CONSTRAINT "ServiceSubForm_formId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_productRequestId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Bank";

-- DropTable
DROP TABLE "Claim";

-- DropTable
DROP TABLE "Collaborator";

-- DropTable
DROP TABLE "CollaboratorDocument";

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "Invitation";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Parter";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductForm";

-- DropTable
DROP TABLE "ProductRequest";

-- DropTable
DROP TABLE "ProductRequestQA";

-- DropTable
DROP TABLE "ProductRequestQASubForm";

-- DropTable
DROP TABLE "ProductSubForm";

-- DropTable
DROP TABLE "Reward";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "ServiceForm";

-- DropTable
DROP TABLE "ServiceSubForm";

-- DropTable
DROP TABLE "Staff";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "TeamMember";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserDocument";

-- DropEnum
DROP TYPE "ProductActivityStage";

-- CreateTable
CREATE TABLE "DiligenceUser" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "resetToken" TEXT,
    "managerId" TEXT,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceEnterpriseId" TEXT NOT NULL,

    CONSTRAINT "DiligenceUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceEnterpriseId" TEXT NOT NULL,

    CONSTRAINT "DiligenceRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceRequestDocument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceRequestId" TEXT NOT NULL,

    CONSTRAINT "DiligenceRequestDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceEnterprise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "color" TEXT,
    "logo" TEXT,
    "backdrop" TEXT,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiligenceEnterprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceManager" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "location" TEXT,
    "managerEmail" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceEnterpriseId" TEXT NOT NULL,

    CONSTRAINT "DiligenceManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceStaff" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceManagerId" TEXT NOT NULL,

    CONSTRAINT "DiligenceStaff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NigerianBank" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT,
    "slug" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NigerianBank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceUser_email_key" ON "DiligenceUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceRequestDocument_name_key" ON "DiligenceRequestDocument"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceEnterprise_name_key" ON "DiligenceEnterprise"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceEnterprise_adminEmail_key" ON "DiligenceEnterprise"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceManager_managerEmail_key" ON "DiligenceManager"("managerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceStaff_email_key" ON "DiligenceStaff"("email");

-- AddForeignKey
ALTER TABLE "DiligenceUser" ADD CONSTRAINT "DiligenceUser_diligenceEnterpriseId_fkey" FOREIGN KEY ("diligenceEnterpriseId") REFERENCES "DiligenceEnterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceRequest" ADD CONSTRAINT "DiligenceRequest_diligenceEnterpriseId_fkey" FOREIGN KEY ("diligenceEnterpriseId") REFERENCES "DiligenceEnterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceRequestDocument" ADD CONSTRAINT "DiligenceRequestDocument_diligenceRequestId_fkey" FOREIGN KEY ("diligenceRequestId") REFERENCES "DiligenceRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceManager" ADD CONSTRAINT "DiligenceManager_diligenceEnterpriseId_fkey" FOREIGN KEY ("diligenceEnterpriseId") REFERENCES "DiligenceEnterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceStaff" ADD CONSTRAINT "DiligenceStaff_diligenceManagerId_fkey" FOREIGN KEY ("diligenceManagerId") REFERENCES "DiligenceManager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
