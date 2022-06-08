/*
  Warnings:

  - You are about to drop the column `eventDate` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `eventTime` on the `events` table. All the data in the column will be lost.
  - Added the required column `date` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "eventDate",
DROP COLUMN "eventTime",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;
