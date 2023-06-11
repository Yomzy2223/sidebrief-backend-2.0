-- AlterTable
ALTER TABLE "Collaborator" ALTER COLUMN "resetToken" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Staff" ALTER COLUMN "resetToken" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "resetToken" DROP NOT NULL;
