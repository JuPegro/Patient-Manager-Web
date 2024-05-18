/*
  Warnings:

  - A unique constraint covering the columns `[testId]` on the table `Result` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testId` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "testId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Result_testId_key" ON "Result"("testId");

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
