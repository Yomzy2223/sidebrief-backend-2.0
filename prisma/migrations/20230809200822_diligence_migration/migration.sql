/*
  Warnings:

  - You are about to drop the column `diligenceBranchId` on the `DiligenceStaff` table. All the data in the column will be lost.
  - You are about to drop the `DiligenceBank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiligenceBranch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RequestCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `diligenceManagerId` to the `DiligenceStaff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DiligenceBranch" DROP CONSTRAINT "DiligenceBranch_diligenceBankId_fkey";

-- DropForeignKey
ALTER TABLE "DiligenceStaff" DROP CONSTRAINT "DiligenceStaff_diligenceBranchId_fkey";

-- DropForeignKey
ALTER TABLE "RequestCategory" DROP CONSTRAINT "RequestCategory_countryId_fkey";

-- AlterTable
ALTER TABLE "DiligenceStaff" DROP COLUMN "diligenceBranchId",
ADD COLUMN     "diligenceManagerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "DiligenceBank";

-- DropTable
DROP TABLE "DiligenceBranch";

-- DropTable
DROP TABLE "RequestCategory";

-- CreateTable
CREATE TABLE "DiligenceEnterprise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "color" TEXT,
    "logo" TEXT,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diligenceEnterpriseId" TEXT NOT NULL,

    CONSTRAINT "DiligenceManager_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceEnterprise_name_key" ON "DiligenceEnterprise"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceEnterprise_adminEmail_key" ON "DiligenceEnterprise"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceManager_managerEmail_key" ON "DiligenceManager"("managerEmail");

-- AddForeignKey
ALTER TABLE "DiligenceManager" ADD CONSTRAINT "DiligenceManager_diligenceEnterpriseId_fkey" FOREIGN KEY ("diligenceEnterpriseId") REFERENCES "DiligenceEnterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiligenceStaff" ADD CONSTRAINT "DiligenceStaff_diligenceManagerId_fkey" FOREIGN KEY ("diligenceManagerId") REFERENCES "DiligenceManager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
