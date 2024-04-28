/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Picture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_Email_key";

-- DropIndex
DROP INDEX "User_UserName_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "Email",
DROP COLUMN "Id",
DROP COLUMN "LastName",
DROP COLUMN "Name",
DROP COLUMN "Password",
DROP COLUMN "Picture",
DROP COLUMN "Role",
DROP COLUMN "Status",
DROP COLUMN "UpdatedAt",
DROP COLUMN "UserName",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'ASSISTANT',
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
