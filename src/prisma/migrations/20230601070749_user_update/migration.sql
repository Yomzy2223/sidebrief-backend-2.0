-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "resetToken" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetToken" TEXT;
