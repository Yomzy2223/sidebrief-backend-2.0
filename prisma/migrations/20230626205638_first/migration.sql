-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "bankCode" TEXT NOT NULL,
    "bankUrl" TEXT NOT NULL,
    "bankImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "picture" TEXT,
    "verified" BOOLEAN NOT NULL,
    "referral" TEXT NOT NULL,
    "resetToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollaboratorDocument" (
    "id" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collaboratorId" TEXT NOT NULL,

    CONSTRAINT "CollaboratorDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "rewardName" TEXT NOT NULL,
    "rewardUrl" TEXT NOT NULL,
    "rewardDescrition" TEXT NOT NULL,
    "rewardImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "countryISO" TEXT NOT NULL,
    "countryCurrency" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryFlagUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readStatus" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_bankName_key" ON "Bank"("bankName");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_name_key" ON "ServiceCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_email_key" ON "Collaborator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_rewardDescrition_key" ON "Reward"("rewardDescrition");

-- AddForeignKey
ALTER TABLE "CollaboratorDocument" ADD CONSTRAINT "CollaboratorDocument_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
