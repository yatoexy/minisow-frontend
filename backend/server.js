import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import translationRoutes from "./routes/translations.js";
import productRoutes from "./routes/products.js";   // ✅ ADD THIS

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Test route
app.get("/test", (req, res) => res.send("OK"));

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// TRANSLATION ROUTES
app.use("/api/translations", translationRoutes);

// ✅ PRODUCTS ROUTES (REQUIRED for PriceList)
app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));
