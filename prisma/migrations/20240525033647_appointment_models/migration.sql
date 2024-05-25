/*
  Warnings:

  - The values [INCOMPLETE] on the enum `Progress` will be removed. If these variants are still used in the database, this will fail.
  - The `status` column on the `Result` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `date` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Progress_new" AS ENUM ('RESULTS', 'COMPLETE', 'CONSULTATION');
ALTER TABLE "Result" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Appointment" ALTER COLUMN "status" TYPE "Progress_new" USING ("status"::text::"Progress_new");
ALTER TYPE "Progress" RENAME TO "Progress_old";
ALTER TYPE "Progress_new" RENAME TO "Progress";
DROP TYPE "Progress_old";
COMMIT;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Status" ADD VALUE 'COMPLETE';
ALTER TYPE "Status" ADD VALUE 'INCOMPLETE';

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "doctorId" TEXT NOT NULL,
ADD COLUMN     "hour" TEXT NOT NULL,
ADD COLUMN     "patientId" TEXT NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL,
ADD COLUMN     "status" "Progress" NOT NULL DEFAULT 'CONSULTATION';

-- AlterTable
ALTER TABLE "Result" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INCOMPLETE';

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
