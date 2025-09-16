import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});
await client.connect();

type Grocery = {
  id: number;
  name: string;
  category: string;
  description: string;
};

try {
  const result = await client.query("SELECT * FROM groceries");
  const groceries: Grocery[] = result.rows;
  console.log({ groceries });
} catch (error) {
  console.error("Failed to connect to the database", error);
} finally {
  await client.end();
}
