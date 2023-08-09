/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `DiligenceUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DiligenceUser_email_key" ON "DiligenceUser"("email");
