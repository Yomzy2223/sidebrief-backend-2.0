-- AlterTable
ALTER TABLE "Bank" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Collaborator" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CollaboratorDocument" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DiligenceEnterprise" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DiligenceManager" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DiligenceRequest" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DiligenceRequestDocument" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DiligenceStaff" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "DiligenceUser" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "NigerianBank" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Reward" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ServiceCategory" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isDeprecated" BOOLEAN NOT NULL DEFAULT false;
