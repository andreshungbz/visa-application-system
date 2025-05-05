# Visa Application System

A full-stack web application that allows users to apply for **B1**, **B2**, or **F1** visas, track their application status, and enables reviewers and supervisors to manage and monitor the visa approval process.

---

## 🌐 Features

### 🧑‍💻 Applicant Portal
- Apply for one of the following U.S. visa types:
  - **B1** (Business)
  - **B2** (Tourist)
  - **F1** (Student)
- Receive a **Visa Application Number** upon submission.
- Use the application number to **check visa status** at any time.

---

### 🧾 Visa Review Workflow
- Each submitted visa application is reviewed by **three independent reviewers**.
- Reviewers can:
  - **Accept** an application.
  - **Reject** an application.
- If **any reviewer rejects**, the application is **denied** immediately.
- Only if **all three reviewers approve**, the application is **approved**.

---

### 🛠️ Supervisor Dashboard
- View **approved** and **denied** visa applications.
- **Manage reviewers**:
  - Add or remove reviewer accounts.
  - Monitor reviewer activity.
- View **system statistics**:
  - Visa Application Statistics
  - Employee Statistic

---

## 🏗️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (or your framework of choice)
- **Backend**: Node.js / Express (or preferred backend language)
- **Database**: PostgreSQL / MongoDB / SQLite (based on implementation)
- **Authentication**: Session or JWT (optional for reviewers/supervisor)
- **Version Control**: Git + GitHub

---

## 📦 Installation


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
