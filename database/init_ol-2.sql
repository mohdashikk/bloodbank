-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jan 06, 2026 at 12:42 PM
-- Server version: 8.0.44
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blood_bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` text,
  `blood_group` varchar(5) DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `last_donate_date` date DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `is_approved` tinyint(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `address`, `blood_group`, `gender`, `last_donate_date`, `role`, `is_approved`, `password`, `created_at`) VALUES
(1, 'Muhammed Ashik A', 'mashik.a9@gmail.com', NULL, NULL, NULL, NULL, NULL, 'admin', 0, '$2b$10$qRc0.v7yiMav29Jvjxw8p.xUD6Z9kyXG8ZdgiIegQbA7jMhIb6BQG', '2025-12-27 15:40:15'),
(2, 'Sneha', 'Sneha jo', NULL, NULL, NULL, NULL, NULL, 'user', 1, '$2b$10$JDDlEDV2UtAEkw.g7Pt0D.qF7pjezYAubypjTCyW5a8/uwc4eCVl.', '2025-12-28 06:09:42'),
(3, 'Muhammed Ashik A', 'mail4ash@gmail.com', NULL, NULL, NULL, NULL, NULL, 'user', 1, '$2b$10$IAKSkarJoj0W/BWVrJbUfulwODIll1wMbZk6qlSIoGYBzvl.UwB6a', '2025-12-29 09:21:56'),
(4, 'Sarah', 'sarah@gmail.com', NULL, NULL, NULL, NULL, NULL, 'user', 0, '$2b$10$19qDtDhm3NNRXRyXO64gy.jqAA0y15fwB5J57D/r09b/9rbx8AEJC', '2025-12-29 11:25:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
