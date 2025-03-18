/*
  Warnings:

  - The primary key for the `s_business` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_business` table. All the data in the column will be lost.
  - The primary key for the `s_personal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_personal` table. All the data in the column will be lost.
  - The primary key for the `s_security` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_security` table. All the data in the column will be lost.
  - The primary key for the `s_student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_student` table. All the data in the column will be lost.
  - The primary key for the `s_tourist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_tourist` table. All the data in the column will be lost.
  - The primary key for the `s_travel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_travel` table. All the data in the column will be lost.
  - The primary key for the `s_work` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applicationId` on the `s_work` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[visaId]` on the table `s_business` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[visaId]` on the table `s_personal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[visaId]` on the table `s_security` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[visaId]` on the table `s_student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[visaId]` on the table `s_tourist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[visaId]` on the table `s_travel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[visaId]` on the table `s_work` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `visaId` to the `s_business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visaId` to the `s_personal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visaId` to the `s_security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visaId` to the `s_student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visaId` to the `s_tourist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visaId` to the `s_travel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visaId` to the `s_work` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "s_business" DROP CONSTRAINT "s_business_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "s_personal" DROP CONSTRAINT "s_personal_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "s_security" DROP CONSTRAINT "s_security_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "s_student" DROP CONSTRAINT "s_student_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "s_tourist" DROP CONSTRAINT "s_tourist_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "s_travel" DROP CONSTRAINT "s_travel_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "s_work" DROP CONSTRAINT "s_work_applicationId_fkey";

-- DropIndex
DROP INDEX "s_business_applicationId_key";

-- DropIndex
DROP INDEX "s_personal_applicationId_key";

-- DropIndex
DROP INDEX "s_security_applicationId_key";

-- DropIndex
DROP INDEX "s_student_applicationId_key";

-- DropIndex
DROP INDEX "s_tourist_applicationId_key";

-- DropIndex
DROP INDEX "s_travel_applicationId_key";

-- DropIndex
DROP INDEX "s_work_applicationId_key";

-- AlterTable
ALTER TABLE "s_business" DROP CONSTRAINT "s_business_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_business_pkey" PRIMARY KEY ("visaId");

-- AlterTable
ALTER TABLE "s_personal" DROP CONSTRAINT "s_personal_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_personal_pkey" PRIMARY KEY ("visaId");

-- AlterTable
ALTER TABLE "s_security" DROP CONSTRAINT "s_security_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_security_pkey" PRIMARY KEY ("visaId");

-- AlterTable
ALTER TABLE "s_student" DROP CONSTRAINT "s_student_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_student_pkey" PRIMARY KEY ("visaId");

-- AlterTable
ALTER TABLE "s_tourist" DROP CONSTRAINT "s_tourist_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_tourist_pkey" PRIMARY KEY ("visaId");

-- AlterTable
ALTER TABLE "s_travel" DROP CONSTRAINT "s_travel_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_travel_pkey" PRIMARY KEY ("visaId");

-- AlterTable
ALTER TABLE "s_work" DROP CONSTRAINT "s_work_pkey",
DROP COLUMN "applicationId",
ADD COLUMN     "visaId" INTEGER NOT NULL,
ADD CONSTRAINT "s_work_pkey" PRIMARY KEY ("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_business_visaId_key" ON "s_business"("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_personal_visaId_key" ON "s_personal"("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_security_visaId_key" ON "s_security"("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_student_visaId_key" ON "s_student"("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_tourist_visaId_key" ON "s_tourist"("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_travel_visaId_key" ON "s_travel"("visaId");

-- CreateIndex
CREATE UNIQUE INDEX "s_work_visaId_key" ON "s_work"("visaId");

-- AddForeignKey
ALTER TABLE "s_personal" ADD CONSTRAINT "s_personal_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_travel" ADD CONSTRAINT "s_travel_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_work" ADD CONSTRAINT "s_work_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_security" ADD CONSTRAINT "s_security_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_business" ADD CONSTRAINT "s_business_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_tourist" ADD CONSTRAINT "s_tourist_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_student" ADD CONSTRAINT "s_student_visaId_fkey" FOREIGN KEY ("visaId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
