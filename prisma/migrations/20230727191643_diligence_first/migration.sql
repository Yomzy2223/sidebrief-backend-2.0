-- CreateTable
CREATE TABLE "DiligenceUser" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "resetToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiligenceUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiligenceRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceRequestDocument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceRequestId" TEXT NOT NULL,

    CONSTRAINT "DiligenceRequestDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceBank" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiligenceBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceBranch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceBankId" TEXT NOT NULL,

    CONSTRAINT "DiligenceBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiligenceStaff" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceBranchId" TEXT NOT NULL,

    CONSTRAINT "DiligenceStaff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NigerianBank" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "NigerianBank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceUser_email_key" ON "DiligenceUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceRequestDocument_name_key" ON "DiligenceRequestDocument"("name");

-- AddForeignKey
ALTER TABLE "DiligenceRequestDocument" ADD CONSTRAINT "DiligenceRequestDocument_diligenceRequestId_fkey" FOREIGN KEY ("diligenceRequestId") REFERENCES "DiligenceRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceBranch" ADD CONSTRAINT "DiligenceBranch_diligenceBankId_fkey" FOREIGN KEY ("diligenceBankId") REFERENCES "DiligenceBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceStaff" ADD CONSTRAINT "DiligenceStaff_diligenceBranchId_fkey" FOREIGN KEY ("diligenceBranchId") REFERENCES "DiligenceBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
