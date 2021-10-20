-- CreateTable
CREATE TABLE `role` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(300) NOT NULL,
    `CreatedByUserId` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `role` ADD CONSTRAINT `role_CreatedByUserId_fkey` FOREIGN KEY (`CreatedByUserId`) REFERENCES `user`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
