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
