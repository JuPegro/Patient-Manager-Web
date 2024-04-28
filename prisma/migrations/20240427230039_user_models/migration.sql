-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ASSISTANT', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('INACTIVE', 'ACTIVE');

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Picture" TEXT,
    "Role" "Role" NOT NULL DEFAULT 'ASSISTANT',
    "Status" "Status" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_UserName_key" ON "User"("UserName");
