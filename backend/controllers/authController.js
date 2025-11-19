import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";   // ⭐ REQUIRED for sending email

// =========================
// ✅ REGISTER USER
// =========================
export const registerUser = async (req, res) => {
  const {
    business_name,
    contact_person,
    address,
    postal_number,
    city,
    email,
    phone_number,
    password,
    language
  } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users (
        business_name,
        contact_person,
        address,
        postal_number,
        city,
        email,
        phone_number,
        password_hash,
        language
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [
        business_name,
        contact_person,
        address,
        postal_number,
        city,
        email,
        phone_number,
        hashed,
        language || "en"
      ]
    );

    res.json({ success: true });

  } catch (e) {
    console.error("REGISTER ERROR:", e);
    res.status(400).json({ error: "User exists" });
  }
};


// =========================
// ✅ FORGOT PASSWORD — STEP 1 (CHECK EMAIL)
// =========================
export const forgotStep1 = async (req, res) => {
  const { email } = req.body;

  const result = await pool.query(
    "SELECT email FROM users WHERE email=$1",
    [email]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ error: "Email not found" });
  }

  res.json({ success: true });
};



// =========================
// ✅ FORGOT PASSWORD — STEP 2 (CHECK POSTAL + SEND EMAIL)
// =========================
export const forgotStep2 = async (req, res) => {
  const { email, postal } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  if (result.rowCount === 0)
    return res.status(404).json({ error: "Email not found" });

  const user = result.rows[0];

  if (user.postal_number !== postal) {
    return res.status(400).json({ error: "Postal wrong" });
  }

  // ⭐ Create temporary password
  const tempPassword = Math.random().toString(36).slice(2, 10);
  const hashed = await bcrypt.hash(tempPassword, 10);

  // ⭐ Save new password
  await pool.query(
    "UPDATE users SET password_hash=$1 WHERE email=$2",
    [hashed, email]
  );

  // ⭐ EMAIL SENDER (GMAIL)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "theoyat7@gmail.com",   // ⭐ YOUR EMAIL
      pass: "ijuzzxfkpevunmez"              // ⭐ YOUR APP PASSWORD (NO SPACES)
    }
  });

  await transporter.sendMail({
    to: email,
    subject: "Your new password",
    html: `<h3>Your temporary login password:</h3>
           <h2>${tempPassword}</h2>
           <p>Please login and change your password.</p>`
  });

  res.json({ success: true });
};



// =========================
// ✅ LOGIN USER
// =========================
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  if (result.rowCount === 0)
    return res.status(401).json({ error: "Invalid" });

  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);

  if (!valid)
    return res.status(401).json({ error: "Invalid" });

  const token = jwt.sign({ id: user.id }, "SECRET123", { expiresIn: "7d" });

  // ⭐ SEND USER DATA FOR HEADER
  res.json({
    token,
    language: user.language,
    contact_person: user.contact_person,
    business_name: user.business_name
  });
};
