/*
  Warnings:

  - You are about to alter the column `price` on the `Grocery` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "public"."Grocery" ALTER COLUMN "price" SET DATA TYPE INTEGER;
