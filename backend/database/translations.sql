import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const router = express.Router();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yourdbname",
  password: "yourpassword",
  port: 5432
});

// GET /api/translations?lang=en  OR  ?lang=sv
router.get("/", async (req, res) => {
  const lang = req.query.lang === "sv" ? "sv" : "en"; // default to en

  try {
    const result = await pool.query("SELECT key, en, sv FROM translations");

    let translatedObj = {};

    result.rows.forEach(row => {
      translatedObj[row.key] = row[lang];  // pick en or sv column
    });

    res.json(translatedObj);

  } catch (err) {
    console.error("Translation DB error:", err);
    res.status(500).json({ error: "Failed to load translations" });
  }
});

export default router;
