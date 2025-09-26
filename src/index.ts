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

//POST new category
app.post("/categories", async (c) => {
  const body = await c.req.json();

  const newCategory = await db.category.create({
    data: {
      name: body.name,
      slug: body.slug,
    },
  });
  return c.json(newCategory, 201);
});

//GET all categories
app.get("/categories", async (c) => {
  const categories = await db.category.findMany();

  return c.json(categories);
});

//GET filter Category
app.get("/groceries/category/:categorySlug", async (c) => {
  const categorySlug = c.req.param("categorySlug");
  const groceries = await db.grocery.findMany({
    where: { category: { slug: categorySlug } },
    include: { category: true },
  });

  if (!groceries) return c.notFound();

  return c.json(groceries);
});

//GET categroy by ID
app.get("/categories/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const category = await db.category.findUnique({
    where: { id },
  });

  if (!category) return c.notFound();

  return c.json(category);
});

//GET grocery by ID
app.get("/groceries/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const grocery = await db.grocery.findUnique({
    where: { id },
    include: { category: true },
  });

  if (!grocery) return c.notFound();

  return c.json(grocery);
});

//POST new grocery
app.post("/groceries", async (c) => {
  const body = await c.req.json();

  const newGrocery = await db.grocery.create({
    data: {
      name: body.name,

      description: body.description ?? "No description",
      price: body.price,
      unit: body.unit,

      category: { connect: { slug: body.categorySlug } },
    },
    include: { category: true },
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

// PATCH update category by ID
app.patch("/categories/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const updatedCategory = await db.category.update({
    where: { id },
    data: {
      name: body.name,
      slug: body.slug,
    },
  });

  return c.json(updatedCategory);
});

// PATCH update grocery by ID
app.patch("/groceries/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const updatedGrocery = await db.grocery.update({
    where: { id },
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      unit: body.unit,
      category: body.categorySlug,
    },
  });

  return c.json(updatedGrocery);
});

export default app;
