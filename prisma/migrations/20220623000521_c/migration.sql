/*
  Warnings:

  - Changed the type of `date` on the `events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `startDate` on the `goals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endDate` on the `goals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "date",
ADD COLUMN     "date" DATE NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" TIME NOT NULL;

-- AlterTable
ALTER TABLE "goals" DROP COLUMN "startDate",
ADD COLUMN     "startDate" DATE NOT NULL,
DROP COLUMN "endDate",
ADD COLUMN     "endDate" DATE NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "date" SET DATA TYPE DATE;
