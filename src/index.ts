import { Hono } from "hono";
import { dataGroceries } from "./data/groceries";

const app = new Hono();

let groceries = dataGroceries;

app.get("/", (c) => {
  return c.json({
    message: "Welcome to Cartify-API!",
  });
});

app.get("/groceries", (c) => {
  return c.json(groceries);
});

// GET grocery item by ID
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

// GET grocery by category
app.get("/groceries/category/:category", (c) => {
  const category = c.req.param("category");

  // return c.json(category);

  const filteredGroceries = groceries.filter((grocery) =>
    grocery.category.toLowerCase().includes(category.toLowerCase())
  );

  if (!filteredGroceries) {
    return c.json(
      {
        message: "No category found",
        data: null,
      },
      404
    );
  }

  return c.json(filteredGroceries);
});

// POST a new grocery
app.post("/groceries", async (c) => {
  const body = await c.req.json();

  const newGrocery = {
    id: groceries[groceries.length - 1].id + 1,
    ...body,
  };
  groceries = [newGrocery.id, ...groceries, newGrocery];

  return c.json({
    message: "Grocery added successfully",
    data: newGrocery,
  });
});

app.delete("/groceries/:id", (c) => {
  const id = Number(c.req.param("id"));

  const groceryIndex = groceries.findIndex((grocery) => grocery.id === id);

  if (groceryIndex === -1) {
    return c.json({ message: "Grocery not found" }, 404);
  }

  groceries.splice(groceryIndex, 1);

  return c.json({ message: "Grocery deleted successfully" });
});

export default app;
