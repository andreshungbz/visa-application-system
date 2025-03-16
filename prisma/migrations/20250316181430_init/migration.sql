-- CreateEnum
CREATE TYPE "t_visa" AS ENUM ('B1', 'B2', 'F1');

-- CreateEnum
CREATE TYPE "t_visa_status" AS ENUM ('Initial', 'Interview', 'Final', 'Accepted', 'Rejected');

-- CreateEnum
CREATE TYPE "t_employee" AS ENUM ('VisaReviewer', 'SystemSupervisor');

-- CreateTable
CREATE TABLE "visa_application" (
    "applicationNumber" SERIAL NOT NULL,
    "type" "t_visa" NOT NULL,
    "status" "t_visa_status" NOT NULL,
    "s1Reviewer" TEXT,
    "s1Notes" TEXT,
    "s2Reviewer" TEXT,
    "s2Notes" TEXT,
    "s3Reviewer" TEXT,
    "s3Notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visa_application_pkey" PRIMARY KEY ("applicationNumber")
);

-- CreateTable
CREATE TABLE "s_personal" (
    "applicationId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "s_personal_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "s_travel" (
    "applicationId" INTEGER NOT NULL,
    "stayCity" TEXT NOT NULL,
    "stayAddress" TEXT NOT NULL,
    "intendedArrivalDate" TIMESTAMP(3) NOT NULL,
    "intendedLengthOfStay" INTEGER NOT NULL,

    CONSTRAINT "s_travel_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "s_work" (
    "applicationId" INTEGER NOT NULL,
    "occupation" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "s_work_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "s_security" (
    "applicationId" INTEGER NOT NULL,
    "communicableDisease" BOOLEAN NOT NULL,
    "moneyLaundering" BOOLEAN NOT NULL,
    "drugConspiracy" BOOLEAN NOT NULL,
    "arrestedConvicted" BOOLEAN NOT NULL,
    "mentalPhysicalDisorder" BOOLEAN NOT NULL,

    CONSTRAINT "s_security_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "s_business" (
    "applicationId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,

    CONSTRAINT "s_business_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "s_tourist" (
    "applicationId" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,

    CONSTRAINT "s_tourist_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "s_student" (
    "applicationId" INTEGER NOT NULL,
    "enrolledSchool" TEXT NOT NULL,
    "schoolAddress" TEXT NOT NULL,
    "enrollmentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "s_student_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "employee_role" (
    "role" "t_employee" NOT NULL,

    CONSTRAINT "employee_role_pkey" PRIMARY KEY ("role")
);

-- CreateTable
CREATE TABLE "employee" (
    "employeeNumber" SERIAL NOT NULL,
    "role" "t_employee" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "employed" BOOLEAN NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("employeeNumber")
);

-- CreateIndex
CREATE UNIQUE INDEX "s_personal_applicationId_key" ON "s_personal"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "s_travel_applicationId_key" ON "s_travel"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "s_work_applicationId_key" ON "s_work"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "s_security_applicationId_key" ON "s_security"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "s_business_applicationId_key" ON "s_business"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "s_tourist_applicationId_key" ON "s_tourist"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "s_student_applicationId_key" ON "s_student"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "employee_role_role_key" ON "employee_role"("role");

-- AddForeignKey
ALTER TABLE "s_personal" ADD CONSTRAINT "s_personal_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_travel" ADD CONSTRAINT "s_travel_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_work" ADD CONSTRAINT "s_work_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_security" ADD CONSTRAINT "s_security_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_business" ADD CONSTRAINT "s_business_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_tourist" ADD CONSTRAINT "s_tourist_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s_student" ADD CONSTRAINT "s_student_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "visa_application"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_role_fkey" FOREIGN KEY ("role") REFERENCES "employee_role"("role") ON DELETE RESTRICT ON UPDATE CASCADE;
