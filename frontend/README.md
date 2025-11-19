
# minisow-frontend

Frontend UI for the mini SOW project, inspired by the 123fakturera interface.

## git Completed (Day 1)
- Project setup (Vite + React)
- File structure created
- Desktop Login UI
- Mobile Login UI
- Transparent Navbar
- Language selector UI (flag dropdown)
- Responsive layout setup

## 🚀 Upcoming (Day 2)
- Language selector functionality
- Translations table (PostgreSQL)
- Backend API for translations
- Connect Frontend ↔ Backend
- Replace static text with dynamic translations

## 🧰 Tech Stack
- React (Vite)
- Vanilla CSS
- Node.js (Backend)
- PostgreSQL (Database)

---
:

🗓 Day 3 — Completed Features
✅ 1. User Registration

All registration fields fully implemented and saved in PostgreSQL:

Business name

Contact person

Address

Postal number

City

Email

Phone number

Password (hashed using bcrypt)

Language

✅ 2. Login System

Email + Password authentication

Validated against hashed password in DB

JWT token returned

Logged-in user’s name & business stored in localStorage

Successful login redirects to /pricelist

🔐 3. Forgot Password System (3-Step Flow)

Step 1: Enter email → /api/auth/forgot-step1
✔ Checks if email exists

Step 2: Enter postal code → /api/auth/forgot-step2
✔ Verifies postal number
✔ Generates temporary password
✔ Sends temp password to user via Nodemailer (Gmail App Password)

Step 3: User logs in using temporary password

🧱 4. Pricelist Module

Products fetched from /api/products

Table fields are editable and saved directly to DB:

Product/Service

In Price

Price

VAT

Unit

Stock

Description

20 demo rows inserted using SQL seed script

Scrollable list

Header includes Search, New Product, Print List, Advanced Mode

📦 5. Sidebar Navigation

20 menu items

Only Pricelist is active

The rest are placeholder disabled links

🖥 6. Responsive Login Page

Separate desktop and mobile designs

Language switching supported

Navbar hidden on login screen

🗄 7. Backend Structure Completed

/routes/auth.js

/routes/products.js

/routes/translations.js

/controllers/authController.js

/controllers/productController.js

PostgreSQL database connected via pg pool

Nodemailer email sender configured

JWT authentication fully implemented
📅 **Last Update:** Day 3 
👤 **Developer:** Yatoexy
