CREATE TABLE IF NOT EXISTS translations (
  id SERIAL PRIMARY KEY,
  key TEXT NOT NULL,
  en TEXT NOT NULL,
  sv TEXT NOT NULL
);

INSERT INTO translations (key, en, sv) VALUES
('home', 'Home', 'Hem'),
('order', 'Order', 'Beställ'),
('customers', 'Our Customers', 'Våra kunder'),
('about', 'About us', 'Om oss'),
('contact', 'Contact Us', 'Kontakta oss'),
('login', 'Log in', 'Logga in'),
('email', 'Enter your email address', 'Ange din e-postadress'),
('password', 'Enter your password', 'Ange ditt lösenord'),
('register', 'Register', 'Registrera'),
('forgot', 'Forgotten password?', 'Glömt lösenord?');
