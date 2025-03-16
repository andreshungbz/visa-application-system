/*
  Warnings:

  - The values [Accepted] on the enum `t_visa_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "t_visa_status_new" AS ENUM ('Initial', 'Interview', 'Final', 'Approved', 'Rejected');
ALTER TABLE "visa_application" ALTER COLUMN "status" TYPE "t_visa_status_new" USING ("status"::text::"t_visa_status_new");
ALTER TYPE "t_visa_status" RENAME TO "t_visa_status_old";
ALTER TYPE "t_visa_status_new" RENAME TO "t_visa_status";
DROP TYPE "t_visa_status_old";
COMMIT;
