-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS auth_ab;

-- Use the database 
USE auth_ab;

-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    ID INT AUTO_INCREMENT PRIMARY KEY.
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(300) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

