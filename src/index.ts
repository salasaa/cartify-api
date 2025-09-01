import { Hono } from "hono";

const app = new Hono();

type grocery = {
  id: number;
  name: string;
  description: string;
};

let groceries: grocery[] = [
  { id: 1, name: "Rice", description: "staple food" },
  { id: 2, name: "Egg", description: "easy protein sources" },
  { id: 3, name: "Banana", description: "fruits containing antioxidants" },
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

export default app;
