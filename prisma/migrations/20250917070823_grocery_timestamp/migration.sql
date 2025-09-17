/*
  Warnings:

  - Added the required column `category` to the `Grocery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Grocery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Grocery` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Grocery` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Grocery" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
