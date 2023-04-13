-- AlterTable
ALTER TABLE `Costumer` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Order` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `OrderItem` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Payment` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Shipping` MODIFY `updatedAt` DATETIME(3) NULL;
