import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

type DataSeedGrocery = {
  name: string;
  categorySlug: string;
  description?: string;
  price: number;
  unit: string;
};

let dataSeedGroceries: DataSeedGrocery[] = [
  {
    name: "Apple",
    categorySlug: "Fruit",
    description: "A crisp, sweet fruit high in fiber and vitamin C.",
    price: 30000,
    unit: "1 kg",
  },
  {
    name: "Banana",
    categorySlug: "Fruit",
    description: "A popular yellow fruit rich in potassium and easy to digest.",
    price: 15000,
    unit: "1 bunch",
  },
  {
    name: "Orange",
    categorySlug: "Fruit",
    description:
      "A citrus fruit known for its high vitamin C content and tangy flavor.",
    price: 25000,
    unit: "1 kg",
  },
  {
    name: "Grapes",
    categorySlug: "Fruit",
    description: "Small, sweet berries that grow in bunches.",
    price: 50000,
    unit: "500 gram",
  },
  {
    name: "Strawberry",
    categorySlug: "Fruit",
    description: "A bright red, juicy berry with a sweet-tart flavor.",
    price: 35000,
    unit: "250 gram",
  },
  {
    name: "Mango",
    categorySlug: "Fruit",
    description:
      "A tropical fruit with a sweet, unique flavor and a smooth texture.",
    price: 40000,
    unit: "1 kg",
  },
  {
    name: "Pineapple",
    categorySlug: "Fruit",
    description: "A tropical fruit with a spiky skin and a sweet, tangy flesh.",
    price: 18000,
    unit: "1 piece",
  },
  {
    name: "Watermelon",
    categorySlug: "Fruit",
    description:
      "A large, hydrating fruit with a high water content and sweet taste.",
    price: 20000,
    unit: "1 piece",
  },
  {
    name: "Avocado",
    categorySlug: "Fruit",
    description: "A creamy, fatty fruit often used in salads and dips.",
    price: 28000,
    unit: "1 kg",
  },
  {
    name: "Kiwi",
    categorySlug: "Fruit",
    description: "A small, fuzzy fruit with a green, tangy-sweet interior.",
    price: 45000,
    unit: "500 gram",
  },
  {
    name: "Chicken Breast",
    categorySlug: "Protein",
    description: "A lean source of protein, commonly used in many dishes.",
    price: 45000,
    unit: "500 gram",
  },
  {
    name: "Eggs",
    categorySlug: "Protein",
    description:
      "A versatile food and an excellent source of complete protein.",
    price: 25000,
    unit: "10 pieces",
  },
  {
    name: "Beef Steak",
    categorySlug: "Protein",
    description:
      "A cut of beef, known for its rich flavor and high protein content.",
    price: 70000,
    unit: "200 gram",
  },
  {
    name: "Salmon",
    categorySlug: "Protein",
    description: "A fatty fish rich in omega-3 fatty acids and protein.",
    price: 85000,
    unit: "200 gram",
  },
  {
    name: "Tofu",
    categorySlug: "Protein",
    description:
      "A plant-based protein made from soybeans, common in Asian cuisine.",
    price: 8000,
    unit: "5 pieces",
  },
  {
    name: "Shrimp",
    categorySlug: "Protein",
    description: "A small crustacean, low in calories but high in protein.",
    price: 60000,
    unit: "250 gram",
  },
  {
    name: "Cow's Milk",
    categorySlug: "Protein",
    description:
      " Milk can be used as an ingredient to make your dishes even more delicious.",
    price: 25000,
    unit: "1 liter",
  },
  {
    name: "Tuna",
    categorySlug: "Protein",
    description:
      "A large saltwater fish, often consumed from a can as a quick protein source.",
    price: 28000,
    unit: "1 can",
  },
  {
    name: "Tempe",
    categorySlug: "Protein",
    description:
      "In addition to being inexpensive, tempeh can also be processed into a variety of delicious dishes.",
    price: 15000,
    unit: "1 piece",
  },
  {
    name: "Cheese",
    categorySlug: "Protein",
    description:
      "A food made from the pressed curds of milk, available in many varieties.",
    price: 22000,
    unit: "200 gram",
  },
  {
    name: "White Rice",
    categorySlug: "Carbohydrate",
    description: "A staple food in many cultures, providing quick energy.",
    price: 15000,
    unit: "1 kg",
  },
  {
    name: "Potatoes",
    categorySlug: "Carbohydrate",
    description: "A starchy root vegetable, often cooked in various ways.",
    price: 20000,
    unit: "1 kg",
  },
  {
    name: "Pasta",
    categorySlug: "Carbohydrate",
    description:
      "A staple of Italian cuisine, typically made from durum wheat flour.",
    price: 18000,
    unit: "500 gram",
  },
  {
    name: "Bread",
    categorySlug: "Carbohydrate",
    description:
      "A common food made from flour, water, and yeast, baked into a loaf.",
    price: 12000,
    unit: "1 loaf",
  },
  {
    name: "Oats",
    categorySlug: "Carbohydrate",
    description: "A whole grain, commonly consumed as oatmeal for breakfast.",
    price: 25000,
    unit: "500 gram",
  },
  {
    name: "Sweet Potatoes",
    categorySlug: "Carbohydrate",
    description: "A starchy root vegetable with a naturally sweet taste.",
    price: 15000,
    unit: "1 kg",
  },
  {
    name: "Corn",
    categorySlug: "Carbohydrate",
    description:
      "A versatile grain often used in many dishes, both sweet and savory.",
    price: 8000,
    unit: "1 kg",
  },
  {
    name: "Brown Rice",
    categorySlug: "Carbohydrate",
    description:
      "A wholegrain rice with a nutty flavor and higher fiber content than white rice.",
    price: 20000,
    unit: "1 kg",
  },
  {
    name: "Cassava",
    categorySlug: "Carbohydrate",
    description:
      "It is a type of tuber, but it tastes more savory and is not as sweet as sweet potatoes.",
    price: 10000,
    unit: "1 kg",
  },
  {
    name: "Spaghetti",
    categorySlug: "Carbohydrate",
    description: "A long, thin pasta, a classic in Italian cuisine.",
    price: 15000,
    unit: "500 gram",
  },
];

async function seedCategories() {
  await prisma.category.createMany({
    data: dataSeedGroceries
      .map((x) => x.categorySlug)
      .filter((x, i, r) => r.indexOf(x) == i)
      .map((x) => ({ name: x, slug: x })),
    skipDuplicates: true,
  });
}

async function seedGroceries() {
  for (const dataSeedGrocery of dataSeedGroceries) {
    const { categorySlug, ...grocery } = dataSeedGrocery;

    await prisma.grocery.create({
      data: {
        ...grocery,
        description: grocery.description ?? "No description",
        category: { connect: { slug: categorySlug } },
      },
    });
  }
}

async function main() {
  await seedCategories();
  await seedGroceries();
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
