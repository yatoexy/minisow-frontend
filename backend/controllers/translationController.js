import db from "../config/db.js";

export const getTranslations = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const column = lang === "sv" ? "sv" : "en";

    const result = await db.query(
      `SELECT "key", ${column} AS value FROM translations`
    );

    const response = {};
    result.rows.forEach(row => {
      response[row.key] = row.value;
    });

    return res.json(response);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
