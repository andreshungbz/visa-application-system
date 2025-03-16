/* Database and Role Setup */
-- script that creates a PostgreSQL user and database for the project
-- the specified user must have the CREATEROLE and CREATEDB attributes (https://www.postgresql.org/docs/17/sql-createrole.html)
-- from the project root folder, run "psql -U <user> -f scripts/database.sql"

\echo '\n[DB] Dropping Databases\n'
DROP DATABASE IF EXISTS cmps2232_2024_2_vas;
DROP USER IF EXISTS vas_user;

\echo '\n[DB] Creating Database and User\n'
CREATE USER vas_user WITH CREATEDB PASSWORD 'swordfish';
GRANT vas_user TO CURRENT_USER;
CREATE DATABASE cmps2232_2024_2_vas OWNER vas_user;
