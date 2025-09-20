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

//GET by Category
app.get("/groceries/category/:categorySlug", async (c) => {
  const categorySlug = c.req.param("categorySlug");

  const groceries = await db.grocery.findMany({
    where: {
      category: {
        slug: categorySlug,
      },
    },
  });

  if (!groceries) return c.notFound();

  return c.json(groceries);
});

app.get("/groceries/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const grocery = await db.grocery.findUnique({ where: { id } });

  if (!grocery) return c.notFound();

  return c.json(grocery);
});

//POST New Grocery
app.post("/groceries", async (c) => {
  const body = await c.req.json();

  const newGrocery = await db.grocery.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      unit: body.unit,
      category: {
        connect: {
          slug: body.categorySlug,
        },
      },
    },
  });
  return c.json(newGrocery, 201);
});

// DELETE a grocery by ID
app.delete("/groceries/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const isGrocery = await db.grocery.delete({ where: { id } });

  if (!isGrocery) {
    return c.notFound();
  }

  return c.json({ isGrocery: { id }, message: "deleted successfully" });
});

// PATCH update grocery by ID
app.patch("/groceries/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const body = await c.req.json();

  const updatedGrocery = await db.grocery.update({
    where: { id },
    data: {
      name: body.name,
      category: body.category,
      description: body.description,
      price: body.price,
      unit: body.unit,
    },
  });

  return c.json(updatedGrocery);
});

export default app;
