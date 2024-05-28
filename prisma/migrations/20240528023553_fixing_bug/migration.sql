-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'CONSULTATION';

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INCOMPLETE';

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';
