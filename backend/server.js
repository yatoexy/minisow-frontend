import express from "express";
import cors from "cors";
import translationRoutes from "./routes/translations.js";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/test", (req, res) => res.send("OK")); // TEMP TEST

app.use("/api/translations", translationRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));

