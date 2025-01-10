/*
  Warnings:

  - Added the required column `backgroundColor` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backgroundImage` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "backgroundColor" TEXT NOT NULL,
ADD COLUMN     "backgroundImage" TEXT NOT NULL;
