# Visa Application System

A Web Application that Simulates a Simplified Visa Application Process

## Quickstart

Copy and paste the following commands into your terminal to get started quickly. Make sure you have Node.js installed and have a PostgreSQL database server running with a `postgres` superuser. You may be asked for the postgres password during the setup process.

```
git clone https://github.com/andreshungbz/visa-application-system.git
cd visa-application-system
cp .env.example .env
npm install
npm run dbinitiate
npm run dev
```

## Selenium Tests

If you have Selenium IDE installed, you can open the project file located in `tests/selenium/cmps2232-vas.side` to quickly test adding a B1, B2, and F1 visa application as well as a new reviewer. You may need to adjust the base URL.
