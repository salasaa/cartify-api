-- CreateTable
CREATE TABLE "public"."Grocery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Grocery_pkey" PRIMARY KEY ("id")
);
