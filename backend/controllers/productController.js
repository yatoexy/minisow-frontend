import pool from "../config/db.js";

export const getProducts = async (req, res) => {
  const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
  res.json(result.rows);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const fields = req.body;

  const updates = Object.keys(fields)
    .map((key, i) => `${key}=$${i + 1}`)
    .join(", ");

  const values = Object.values(fields);

  await pool.query(
    `UPDATE products SET ${updates} WHERE id=${id}`,
    values
  );

  res.json({ success: true });
};
