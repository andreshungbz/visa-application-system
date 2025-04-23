# Visa Application System

A Web Application that Simulates a Simplified Visa Application Process

## Quickstart

This assumes you have the `postgres` superuser and `postgres` default database that most installations of PostgreSQL create by default. If you have a different setup, you may need to adjust the database connection settings in the `.env` file.

1. Log into `psql` as the `postgres` superuser and paste the following in the `psql` prompt:

```
DROP DATABASE IF EXISTS cmps2232_2024_2_vas;
DROP USER IF EXISTS vas_user;
CREATE USER vas_user WITH CREATEDB PASSWORD 'swordfish';
CREATE DATABASE cmps2232_2024_2_vas OWNER vas_user;
```

2. Exit `psql`:

```
\q
```

3. Copy and paste the following commands into your terminal to get started quickly. Ensure you have Node.js installed and a PostgreSQL database server running. You may be asked for the `vas_user` user password during setup.

```
git clone https://github.com/andreshungbz/visa-application-system.git
cd visa-application-system
cp .env.example .env
npm install
npm run dbinitiate
npm run dev
```

## Selenium Tests

If you have Selenium IDE installed, you can open the project file in `tests/selenium/cmps2232-vas.side` to quickly test adding a B1, B2, and F1 visa application and a new reviewer. You may need to adjust the base URL.
