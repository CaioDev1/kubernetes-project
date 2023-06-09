/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Costumer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Costumer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Costumer` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Costumer_email_key` ON `Costumer`(`email`);
