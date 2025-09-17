import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const newGrocery = await prisma.grocery.create({
    data: {
      name: "Banana",
      description: "A yellow fruit",
      price: 1,
      unit: "piece",
      category: "Fruits",
    },
  });

  console.log("Created new Grocery:", newGrocery);

  const groceries = await prisma.grocery.findMany();
  console.log(groceries);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
