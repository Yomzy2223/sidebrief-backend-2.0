-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "OwnerIsCalled" DROP NOT NULL,
ALTER COLUMN "agentIsCalled" DROP NOT NULL,
ALTER COLUMN "controllerIsCalled" DROP NOT NULL,
ALTER COLUMN "hasAgent" SET DEFAULT false,
ALTER COLUMN "hasController" SET DEFAULT false,
ALTER COLUMN "hasOwner" SET DEFAULT false,
ALTER COLUMN "hasShares" SET DEFAULT false;
