/*
  Warnings:

  - You are about to drop the `DiligenceEnterprise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiligenceManager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiligenceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiligenceRequestDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiligenceStaff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiligenceUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NigerianBank` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductActivityStage" AS ENUM ('START', 'PAYMENT', 'PRORIETOR', 'REVIEW');

-- DropForeignKey
ALTER TABLE "DiligenceManager" DROP CONSTRAINT "DiligenceManager_diligenceEnterpriseId_fkey";

-- DropForeignKey
ALTER TABLE "DiligenceRequest" DROP CONSTRAINT "DiligenceRequest_diligenceEnterpriseId_fkey";

-- DropForeignKey
ALTER TABLE "DiligenceRequestDocument" DROP CONSTRAINT "DiligenceRequestDocument_diligenceRequestId_fkey";

-- DropForeignKey
ALTER TABLE "DiligenceStaff" DROP CONSTRAINT "DiligenceStaff_diligenceManagerId_fkey";

-- DropForeignKey
ALTER TABLE "DiligenceUser" DROP CONSTRAINT "DiligenceUser_diligenceEnterpriseId_fkey";

-- DropTable
DROP TABLE "DiligenceEnterprise";

-- DropTable
DROP TABLE "DiligenceManager";

-- DropTable
DROP TABLE "DiligenceRequest";

-- DropTable
DROP TABLE "DiligenceRequestDocument";

-- DropTable
DROP TABLE "DiligenceStaff";

-- DropTable
DROP TABLE "DiligenceUser";

-- DropTable
DROP TABLE "NigerianBank";

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "picture" TEXT,
    "resetToken" TEXT,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "picture" TEXT,
    "verified" BOOLEAN NOT NULL,
    "isPartner" BOOLEAN NOT NULL,
    "resetToken" TEXT,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollaboratorDocument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collaboratorId" TEXT NOT NULL,

    CONSTRAINT "CollaboratorDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descrition" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iso" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "flagUrl" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readStatus" BOOLEAN NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "scope" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "picture" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "referral" TEXT NOT NULL,
    "country" TEXT,
    "resetToken" TEXT,
    "isPartner" BOOLEAN NOT NULL DEFAULT false,
    "isStaff" BOOLEAN NOT NULL DEFAULT false,
    "isPhoneRegistered" BOOLEAN NOT NULL DEFAULT false,
    "isPhoneVerified" BOOLEAN NOT NULL DEFAULT false,
    "isIdentificationRegistered" BOOLEAN NOT NULL DEFAULT false,
    "isIdentificationVerified" BOOLEAN NOT NULL DEFAULT false,
    "partnerPermission" TEXT[],
    "staffPermission" TEXT[],
    "userPermission" TEXT[],
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDocument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isDeprecated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategoryForm" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" TEXT[],
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceCategoryId" TEXT NOT NULL,

    CONSTRAINT "ServiceCategoryForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "feature" TEXT[],
    "categoryForm" TEXT[],
    "hasShares" BOOLEAN NOT NULL DEFAULT false,
    "numberOfShares" TEXT NOT NULL,
    "hasAgent" BOOLEAN NOT NULL DEFAULT false,
    "hasOwner" BOOLEAN NOT NULL DEFAULT false,
    "hasController" BOOLEAN NOT NULL DEFAULT false,
    "controllerIsCalled" TEXT,
    "OwnerIsCalled" TEXT,
    "agentIsCalled" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceCategoryId" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
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
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "fileName" TEXT NOT NULL,
    "fileDescription" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ServiceForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceSubForm" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "type" TEXT NOT NULL,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "fileName" TEXT NOT NULL,
    "fileDescription" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileLink" TEXT NOT NULL,
    "serviceFormId" TEXT NOT NULL,

    CONSTRAINT "ServiceSubForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "currentState" "ProductActivityStage" NOT NULL DEFAULT 'START',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductQA" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT[],
    "type" TEXT NOT NULL,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "isGeneral" BOOLEAN NOT NULL DEFAULT false,
    "fileName" TEXT NOT NULL,
    "fileDescription" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductQA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductQASubForm" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT[],
    "type" TEXT NOT NULL,
    "compulsory" BOOLEAN NOT NULL DEFAULT false,
    "productQAId" TEXT NOT NULL,

    CONSTRAINT "ProductQASubForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claim" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Claim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "isLaunchMember" BOOLEAN NOT NULL,
    "isLaunchController" BOOLEAN NOT NULL,
    "isLaunchOwner" BOOLEAN NOT NULL,
    "launchOwnership" INTEGER NOT NULL,
    "teamId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invitation" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expireIn" TIMESTAMP(3) NOT NULL,
    "invitedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parter" (
    "id" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,
    "verificationDocument" TEXT[],
    "serviceScore" INTEGER NOT NULL,
    "paymentsMade" INTEGER NOT NULL,
    "paymentsDue" INTEGER NOT NULL,
    "paymentDetails" TEXT[],
    "countrySupported" TEXT[],
    "serviceSupported" TEXT[],
    "servicesAssigned" TEXT[],
    "servicesCompleted" TEXT[],
    "servicesDeclined" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_email_key" ON "Collaborator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CollaboratorDocument_name_key" ON "CollaboratorDocument"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_name_key" ON "Reward"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_name_key" ON "Bank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_name_key" ON "ServiceCategory"("name");

-- AddForeignKey
ALTER TABLE "CollaboratorDocument" ADD CONSTRAINT "CollaboratorDocument_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceCategoryForm" ADD CONSTRAINT "ServiceCategoryForm_serviceCategoryId_fkey" FOREIGN KEY ("serviceCategoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceCategoryId_fkey" FOREIGN KEY ("serviceCategoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTemplate" ADD CONSTRAINT "ServiceTemplate_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceForm" ADD CONSTRAINT "ServiceForm_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSubForm" ADD CONSTRAINT "ServiceSubForm_serviceFormId_fkey" FOREIGN KEY ("serviceFormId") REFERENCES "ServiceForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQA" ADD CONSTRAINT "ProductQA_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQASubForm" ADD CONSTRAINT "ProductQASubForm_productQAId_fkey" FOREIGN KEY ("productQAId") REFERENCES "ProductQA"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
