-- CreateEnum
CREATE TYPE "Progress" AS ENUM ('INCOMPLETE', 'COMPLETE');

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "diagnostic" TEXT,
    "patientId" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    "status" "Progress" NOT NULL DEFAULT 'INCOMPLETE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Result_patientId_key" ON "Result"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_appointmentId_key" ON "Result"("appointmentId");

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
