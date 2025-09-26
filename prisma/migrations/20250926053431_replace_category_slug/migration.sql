-- DropForeignKey
ALTER TABLE "public"."Grocery" DROP CONSTRAINT "Grocery_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."Grocery" ADD COLUMN     "categorySlug" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Grocery" ADD CONSTRAINT "Grocery_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "public"."Category"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
