/*
  Warnings:

  - You are about to drop the column `logo` on the `DiligenceBank` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `DiligenceBranch` table. All the data in the column will be lost.
  - You are about to drop the column `adminEmail` on the `DiligenceBranch` table. All the data in the column will be lost.
  - You are about to drop the column `adminName` on the `DiligenceBranch` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `DiligenceBranch` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `DiligenceBranch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `DiligenceBank` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[adminEmail]` on the table `DiligenceBank` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `DiligenceBranch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[managerEmail]` on the table `DiligenceBranch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `DiligenceStaff` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `managerEmail` to the `DiligenceBranch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managerName` to the `DiligenceBranch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `DiligenceBranch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `DiligenceRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `DiligenceRequestDocument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DiligenceBank" DROP COLUMN "logo";

-- AlterTable
ALTER TABLE "DiligenceBranch" DROP COLUMN "address",
DROP COLUMN "adminEmail",
DROP COLUMN "adminName",
DROP COLUMN "logo",
DROP COLUMN "url",
ADD COLUMN     "managerEmail" TEXT NOT NULL,
ADD COLUMN     "managerName" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DiligenceRequest" ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DiligenceRequestDocument" ADD COLUMN     "link" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceBank_name_key" ON "DiligenceBank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceBank_adminEmail_key" ON "DiligenceBank"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceBranch_name_key" ON "DiligenceBranch"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceBranch_managerEmail_key" ON "DiligenceBranch"("managerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "DiligenceStaff_email_key" ON "DiligenceStaff"("email");
