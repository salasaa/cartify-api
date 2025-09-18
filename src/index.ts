import { Hono } from "hono";
import { db } from "./lib/db";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    title: "Cartify-API!",
  });
});

app.get("/groceries", async (c) => {
  const groceries = await db.grocery.findMany();

  return c.json(groceries);
});

app.get("/groceries/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const grocery = await db.grocery.findUnique({ where: { id } });

  if (!grocery) return c.notFound();

  return c.json(grocery);
});

// DELETE all groceries
app.delete("/groceries", (c) => {
  groceries.splice(0, groceries.length);

  return c.json({ message: "All groceries deleted successfully" });
});

// DELETE a grocery by ID
app.delete("/groceries/:id", (c) => {
  const id = Number(c.req.param("id"));

  const isGrocery = groceries.find((grocery) => grocery.id === id);

  if (!isGrocery) {
    return c.json({ message: "Grocery not found" }, 404);
  }

  const newGroceries = groceries.filter((grocery) => grocery.id !== id);

  groceries.splice(0, groceries.length, ...newGroceries);

  return c.json({ deleteGrocery: isGrocery, message: "deleted successfully" });
});

// PATCH update grocery by ID

export default app;
