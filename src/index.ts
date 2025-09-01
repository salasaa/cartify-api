import { Hono } from "hono";

const app = new Hono();

type grocery = {
  id: number;
  name: string;
  category: string;
  description?: string;
  price?: number;
  unit?: string;
};

let groceries: grocery[] = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    description: "A crisp, sweet fruit high in fiber and vitamin C.",
    price: 30000,
    unit: "1 kg",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit",
    description: "A popular yellow fruit rich in potassium and easy to digest.",
    price: 15000,
    unit: "1 bunch",
  },
  {
    id: 3,
    name: "Orange",
    category: "Fruit",
    description:
      "A citrus fruit known for its high vitamin C content and tangy flavor.",
    price: 25000,
    unit: "1 kg",
  },
  {
    id: 4,
    name: "Grapes",
    category: "Fruit",
    description: "Small, sweet berries that grow in bunches.",
    price: 50000,
    unit: "500 gram",
  },
  {
    id: 5,
    name: "Strawberry",
    category: "Fruit",
    description: "A bright red, juicy berry with a sweet-tart flavor.",
    price: 35000,
    unit: "250 gram",
  },
  {
    id: 6,
    name: "Mango",
    category: "Fruit",
    description:
      "A tropical fruit with a sweet, unique flavor and a smooth texture.",
    price: 40000,
    unit: "1 kg",
  },
  {
    id: 7,
    name: "Pineapple",
    category: "Fruit",
    description: "A tropical fruit with a spiky skin and a sweet, tangy flesh.",
    price: 18000,
    unit: "1 piece",
  },
  {
    id: 8,
    name: "Watermelon",
    category: "Fruit",
    description:
      "A large, hydrating fruit with a high water content and sweet taste.",
    price: 20000,
    unit: "1 piece",
  },
  {
    id: 9,
    name: "Kiwi",
    category: "Fruit",
    description: "A small, fuzzy fruit with a green, tangy-sweet interior.",
    price: 45000,
    unit: "500 gram",
  },
  {
    id: 10,
    name: "Blueberry",
    category: "Fruit",
    description: "Small, sweet berries with powerful antioxidant properties.",
    price: 60000,
    unit: "150 gram",
  },
  {
    id: 11,
    name: "Cherry",
    category: "Fruit",
    description:
      "Small, round stone fruit that is typically deep red or black.",
    price: 75000,
    unit: "250 gram",
  },
  {
    id: 12,
    name: "Lemon",
    category: "Fruit",
    description: "A sour citrus fruit often used for its juice and zest.",
    price: 22000,
    unit: "500 gram",
  },
  {
    id: 13,
    name: "Lime",
    category: "Fruit",
    description:
      "A small green citrus fruit, very similar to a lemon but with a distinct flavor.",
    price: 15000,
    unit: "500 gram",
  },
  {
    id: 14,
    name: "Peach",
    category: "Fruit",
    description:
      "A juicy, fuzzy fruit with a sweet taste and a single large pit.",
    price: 55000,
    unit: "500 gram",
  },
  {
    id: 15,
    name: "Avocado",
    category: "Fruit",
    description: "A creamy, fatty fruit often used in salads and dips.",
    price: 28000,
    unit: "1 kg",
  },
  {
    id: 16,
    name: "Pomegranate",
    category: "Fruit",
    description:
      "A fruit with a tough outer layer, filled with juicy, edible seeds.",
    price: 38000,
    unit: "1 piece",
  },
  {
    id: 17,
    name: "Fig",
    category: "Fruit",
    description:
      "A soft, sweet fruit with a purplish skin and numerous tiny seeds.",
    price: 65000,
    unit: "250 gram",
  },
  {
    id: 18,
    name: "Plum",
    category: "Fruit",
    description:
      "A small, stone fruit with a smooth skin and a sweet, juicy flesh.",
    price: 42000,
    unit: "500 gram",
  },
  {
    id: 19,
    name: "Raspberry",
    category: "Fruit",
    description: "A delicate, sweet berry that is a good source of fiber.",
    price: 70000,
    unit: "125 gram",
  },
  {
    id: 20,
    name: "Cantaloupe",
    category: "Fruit",
    description:
      "A type of melon with a sweet orange flesh and high water content.",
    price: 25000,
    unit: "1 piece",
  },
  {
    id: 21,
    name: "Chicken Breast",
    category: "Protein",
    description: "A lean source of protein, commonly used in many dishes.",
    price: 45000,
    unit: "500 gram",
  },
  {
    id: 22,
    name: "Salmon",
    category: "Protein",
    description: "A fatty fish rich in omega-3 fatty acids and protein.",
    price: 85000,
    unit: "200 gram",
  },
  {
    id: 23,
    name: "Eggs",
    category: "Protein",
    description:
      "A versatile food and an excellent source of complete protein.",
    price: 25000,
    unit: "10 pieces",
  },
  {
    id: 24,
    name: "Lentils",
    category: "Protein",
    description:
      "Small legumes high in protein and fiber, great for vegetarian dishes.",
    price: 18000,
    unit: "250 gram",
  },
  {
    id: 25,
    name: "Tofu",
    category: "Protein",
    description:
      "A plant-based protein made from soybeans, common in Asian cuisine.",
    price: 8000,
    unit: "5 pieces",
  },
  {
    id: 26,
    name: "Beef Steak",
    category: "Protein",
    description:
      "A cut of beef, known for its rich flavor and high protein content.",
    price: 70000,
    unit: "200 gram",
  },
  {
    id: 27,
    name: "Shrimp",
    category: "Protein",
    description: "A small crustacean, low in calories but high in protein.",
    price: 60000,
    unit: "250 gram",
  },
  {
    id: 28,
    name: "Greek Yogurt",
    category: "Protein",
    description:
      "A type of yogurt that is strained to remove whey, resulting in a thicker consistency and higher protein content.",
    price: 20000,
    unit: "250 gram",
  },
  {
    id: 29,
    name: "Black Beans",
    category: "Protein",
    description:
      "A type of bean with a rich, earthy flavor, often used in Latin American dishes.",
    price: 15000,
    unit: "250 gram",
  },
  {
    id: 30,
    name: "Tuna",
    category: "Protein",
    description:
      "A large saltwater fish, often consumed from a can as a quick protein source.",
    price: 28000,
    unit: "1 can",
  },
  {
    id: 31,
    name: "Pork Chops",
    category: "Protein",
    description: "A cut of pork from the loin, a popular and versatile meat.",
    price: 50000,
    unit: "250 gram",
  },
  {
    id: 32,
    name: "Cheese",
    category: "Protein",
    description:
      "A food made from the pressed curds of milk, available in many varieties.",
    price: 22000,
    unit: "200 gram",
  },
  {
    id: 33,
    name: "Turkey Breast",
    category: "Protein",
    description:
      "A lean, white meat from turkey, often used as a healthier alternative to other meats.",
    price: 60000,
    unit: "500 gram",
  },
  {
    id: 34,
    name: "Quinoa",
    category: "Protein",
    description:
      "A grain-like seed that is a complete protein source, popular in healthy diets.",
    price: 35000,
    unit: "250 gram",
  },
  {
    id: 35,
    name: "Edamame",
    category: "Protein",
    description:
      "Immature soybeans in the pod, often steamed and served as a snack.",
    price: 20000,
    unit: "250 gram",
  },
  {
    id: 36,
    name: "Peanuts",
    category: "Protein",
    description:
      "A legume widely consumed as a snack, rich in protein and fat.",
    price: 10000,
    unit: "100 gram",
  },
  {
    id: 37,
    name: "Cottage Cheese",
    category: "Protein",
    description: "A fresh cheese curd product with a mild flavor.",
    price: 25000,
    unit: "200 gram",
  },
  {
    id: 38,
    name: "Soy Milk",
    category: "Protein",
    description:
      "A plant-based milk made from soybeans, often used as a dairy alternative.",
    price: 12000,
    unit: "1 liter",
  },
  {
    id: 39,
    name: "Ground Beef",
    category: "Protein",
    description:
      "Minced beef, a versatile ingredient for burgers, meatballs, and sauces.",
    price: 55000,
    unit: "500 gram",
  },
  {
    id: 40,
    name: "Bacon",
    category: "Protein",
    description: "Salt-cured pork cut from the belly, typically served fried.",
    price: 32000,
    unit: "100 gram",
  },
  {
    id: 41,
    name: "White Rice",
    category: "Carbohydrate",
    description: "A staple food in many cultures, providing quick energy.",
    price: 15000,
    unit: "1 kg",
  },
  {
    id: 42,
    name: "Potatoes",
    category: "Carbohydrate",
    description: "A starchy root vegetable, often cooked in various ways.",
    price: 20000,
    unit: "1 kg",
  },
  {
    id: 43,
    name: "Pasta",
    category: "Carbohydrate",
    description:
      "A staple of Italian cuisine, typically made from durum wheat flour.",
    price: 18000,
    unit: "500 gram",
  },
  {
    id: 44,
    name: "Oats",
    category: "Carbohydrate",
    description: "A whole grain, commonly consumed as oatmeal for breakfast.",
    price: 25000,
    unit: "500 gram",
  },
  {
    id: 45,
    name: "Bread",
    category: "Carbohydrate",
    description:
      "A common food made from flour, water, and yeast, baked into a loaf.",
    price: 12000,
    unit: "1 loaf",
  },
  {
    id: 46,
    name: "Corn",
    category: "Carbohydrate",
    description:
      "A versatile grain often used in many dishes, both sweet and savory.",
    price: 8000,
    unit: "1 kg",
  },
  {
    id: 47,
    name: "Quinoa",
    category: "Carbohydrate",
    description:
      "A grain-like seed that is a great source of complex carbohydrates.",
    price: 35000,
    unit: "250 gram",
  },
  {
    id: 48,
    name: "Brown Rice",
    category: "Carbohydrate",
    description:
      "A wholegrain rice with a nutty flavor and higher fiber content than white rice.",
    price: 20000,
    unit: "1 kg",
  },
  {
    id: 49,
    name: "Sweet Potatoes",
    category: "Carbohydrate",
    description: "A starchy root vegetable with a naturally sweet taste.",
    price: 15000,
    unit: "1 kg",
  },
  {
    id: 50,
    name: "Lentils",
    category: "Carbohydrate",
    description:
      "Small legumes that are a great source of both carbs and protein.",
    price: 18000,
    unit: "250 gram",
  },
  {
    id: 51,
    name: "Chickpeas",
    category: "Carbohydrate",
    description:
      "A type of legume used in many dishes, including hummus and falafel.",
    price: 25000,
    unit: "250 gram",
  },
  {
    id: 52,
    name: "Barley",
    category: "Carbohydrate",
    description: "A versatile cereal grain, often used in soups and stews.",
    price: 17000,
    unit: "500 gram",
  },
  {
    id: 53,
    name: "Couscous",
    category: "Carbohydrate",
    description:
      "Tiny pasta made from semolina, a staple of North African cuisine.",
    price: 28000,
    unit: "500 gram",
  },
  {
    id: 54,
    name: "Rye Bread",
    category: "Carbohydrate",
    description:
      "A type of bread made from rye flour, known for its dense texture and strong flavor.",
    price: 18000,
    unit: "1 loaf",
  },
  {
    id: 55,
    name: "Corn Tortillas",
    category: "Carbohydrate",
    description:
      "A thin, flat bread made from corn, essential for tacos and enchiladas.",
    price: 22000,
    unit: "1 package",
  },
  {
    id: 56,
    name: "Buckwheat",
    category: "Carbohydrate",
    description:
      "A plant cultivated for its grain-like seeds, often used in pancakes and noodles.",
    price: 30000,
    unit: "250 gram",
  },
  {
    id: 57,
    name: "Farro",
    category: "Carbohydrate",
    description: "An ancient grain with a chewy texture and nutty flavor.",
    price: 27000,
    unit: "250 gram",
  },
  {
    id: 58,
    name: "Soba Noodles",
    category: "Carbohydrate",
    description:
      "Japanese noodles made from buckwheat flour, served hot or cold.",
    price: 20000,
    unit: "1 package",
  },
  {
    id: 59,
    name: "Amaranth",
    category: "Carbohydrate",
    description:
      "An ancient grain, high in protein and fiber, often used in porridges and cereals.",
    price: 35000,
    unit: "250 gram",
  },
  {
    id: 60,
    name: "Spaghetti",
    category: "Carbohydrate",
    description: "A long, thin pasta, a classic in Italian cuisine.",
    price: 15000,
    unit: "500 gram",
  },
];

app.get("/", (c) => {
  return c.json({
    message: "Welcom to Cartify-API!",
  });
});

app.get("/groceries", (c) => {
  return c.json(groceries);
});

app.get("/groceries/:id", (c) => {
  const id = Number(c.req.param("id"));

  const grocery = groceries.find((grocery) => {
    return grocery.id === id;
  });

  if (!grocery) {
    return c.json({ message: "Grocery not found" }, 404);
  }

  return c.json(grocery);
});

app.post();

export default app;
