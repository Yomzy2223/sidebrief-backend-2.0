/*
  Warnings:

  - You are about to drop the column `adminName` on the `DiligenceBank` table. All the data in the column will be lost.
  - You are about to drop the column `managerName` on the `DiligenceBranch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiligenceBank" DROP COLUMN "adminName";

-- AlterTable
ALTER TABLE "DiligenceBranch" DROP COLUMN "managerName";

-- AlterTable
ALTER TABLE "NigerianBank" ADD COLUMN     "color" TEXT;
