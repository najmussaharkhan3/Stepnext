-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2026 at 07:45 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stepnext_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'abc', '2026-03-29 15:19:04', '2026-03-29 15:19:04'),
(2, 'Carss', '2026-04-04 08:54:27', '2026-04-06 12:28:09'),
(4, 'cars', '2026-04-05 12:00:18', '2026-04-05 12:00:18'),
(9, 'Trucks', '2026-04-06 12:27:55', '2026-04-06 12:27:55');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_22_170000_create_categories_table', 1),
(5, '2026_01_22_171000_create_products_table', 1),
(6, '2026_01_25_144338_create_personal_access_tokens_table', 1),
(7, '2026_01_25_163430_create_admins_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'admin-token', 'ed86392912d395e06d45320f699578155c6ec23b064b3a520ce5b83f883421b5', '[\"*\"]', '2026-04-04 14:57:59', NULL, '2026-04-04 14:11:56', '2026-04-04 14:57:59'),
(2, 'App\\Models\\User', 1, 'admin-token', '3297a20b913c9db73cf3868e1ef295db4230896b43fb4e88af4272ed4432beb7', '[\"*\"]', '2026-04-05 08:18:58', NULL, '2026-04-05 08:09:26', '2026-04-05 08:18:58'),
(3, 'App\\Models\\User', 1, 'admin-token', '0eac65cc2ee6522863692adf8742624ea47c29567548c2a0a78d99bd6b9433b0', '[\"*\"]', '2026-04-05 09:09:31', NULL, '2026-04-05 09:09:30', '2026-04-05 09:09:31'),
(4, 'App\\Models\\User', 1, 'admin-token', 'd71d634068fff58f084a1e841d067207c4f3e3e300d73f86e06591e30710343f', '[\"*\"]', '2026-04-05 09:13:01', NULL, '2026-04-05 09:13:00', '2026-04-05 09:13:01'),
(5, 'App\\Models\\User', 1, 'admin-token', 'c8850982def0a72e58946b106128813dd1edbe3aeb602598822af806d4be478d', '[\"*\"]', '2026-04-05 09:14:43', NULL, '2026-04-05 09:14:42', '2026-04-05 09:14:43'),
(6, 'App\\Models\\User', 1, 'admin-token', 'e3af20fdbad537ad4f659c53b63d7fe48418baf3e830a167071ef2eae99bb3fa', '[\"*\"]', '2026-04-05 09:14:52', NULL, '2026-04-05 09:14:51', '2026-04-05 09:14:52'),
(7, 'App\\Models\\User', 1, 'admin-token', '5d70807e093db1ae4b4579c64617d1cdc2f7f921373e1dc471fba020a41e1fb3', '[\"*\"]', '2026-04-05 09:17:11', NULL, '2026-04-05 09:17:10', '2026-04-05 09:17:11'),
(8, 'App\\Models\\User', 1, 'admin-token', '971fff94b77c1c95b3e8e8d7ca740bfc3e5b8da4aa26bdc8f47aa071a484c606', '[\"*\"]', '2026-04-05 09:29:10', NULL, '2026-04-05 09:17:39', '2026-04-05 09:29:10'),
(9, 'App\\Models\\User', 1, 'admin-token', '8d5fc474b58fe6eb6da5c9550fc5fbc895850ac27a9f520869654a721fe3d264', '[\"*\"]', '2026-04-05 11:31:04', NULL, '2026-04-05 11:18:10', '2026-04-05 11:31:04'),
(10, 'App\\Models\\User', 1, 'admin-token', '0c892df3893df15bb6235c9d293147df62a8a40fcd5f5cefbbb095850c43c407', '[\"*\"]', '2026-04-05 11:54:33', NULL, '2026-04-05 11:35:58', '2026-04-05 11:54:33'),
(11, 'App\\Models\\User', 1, 'admin-token', '011ae73c1489e6040b22128e44dffb0eebb45d0f08793e78f322e6ec0c465bd4', '[\"*\"]', '2026-04-05 12:00:18', NULL, '2026-04-05 11:59:37', '2026-04-05 12:00:18'),
(12, 'App\\Models\\User', 1, 'admin-token', 'd7ced62a1157f7d85b1bef942788a203eb76376b20533e52db1addf62ce77386', '[\"*\"]', '2026-04-05 12:11:03', NULL, '2026-04-05 12:02:15', '2026-04-05 12:11:03'),
(13, 'App\\Models\\User', 1, 'admin-token', 'd6ee385334e07c41fb53c325f76db4bd55eed04f0137e4bab5d54868d714c078', '[\"*\"]', '2026-04-06 11:20:14', NULL, '2026-04-06 11:08:29', '2026-04-06 11:20:14'),
(14, 'App\\Models\\User', 1, 'admin-token', '25bd0188ea7c888bf3ea299d1cbe47e0c0629572103f7c7347449a485c66f1c3', '[\"*\"]', '2026-04-06 11:57:44', NULL, '2026-04-06 11:25:49', '2026-04-06 11:57:44'),
(15, 'App\\Models\\User', 1, 'admin-token', '6503c1a9e803a53bc7444ddaacd9a2e6afd41e376307b8bb625d08f2c88339ed', '[\"*\"]', '2026-04-06 12:01:15', NULL, '2026-04-06 11:58:07', '2026-04-06 12:01:15'),
(16, 'App\\Models\\User', 1, 'admin-token', 'e50a6e5f41c81a8511a851b576a683a364a1aaff55a701f20906b3177be21419', '[\"*\"]', '2026-04-06 12:30:10', NULL, '2026-04-06 12:27:42', '2026-04-06 12:30:10');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `make` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `model_year` year(4) NOT NULL,
  `engine` varchar(255) DEFAULT NULL,
  `transmission` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `mileage` varchar(255) DEFAULT NULL,
  `fuel_type` varchar(255) DEFAULT NULL,
  `load_capacity` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `make`, `model`, `model_year`, `engine`, `transmission`, `color`, `mileage`, `fuel_type`, `load_capacity`, `price`, `images`, `created_at`, `updated_at`) VALUES
(3, 1, 'abcdef', 'abc', '2023', '13232', 'kxl', 'black', '20008km', 'petrol', '1000kg', 22211212.00, '[\"http:\\/\\/127.0.0.1:8000\\/storage\\/products\\/DUUwMZREOrrcSWnqUbyeKVZSemS91KmpoYxbOtpk.jpg\"]', '2026-04-05 08:18:28', '2026-04-06 11:13:59'),
(5, 4, 'TOYOTA', 'CORROLLA', '2022', '1300cc', 'manual', 'white', '50000km', 'petrol', '10000', 2500000.00, '[\"http:\\/\\/127.0.0.1:8000\\/storage\\/products\\/D7GLM98a0ifPpLwqmiGzLWYi1XAxlpaxgPzWum3x.jpg\"]', '2026-04-06 11:57:44', '2026-04-06 12:29:59'),
(6, 4, 'Toyota', 'Civiccc', '2022', '1300cc', 'Automatic', 'White', '50,000km', 'Petrol', '1000kg', 250000.00, '[\"http:\\/\\/127.0.0.1:8000\\/storage\\/products\\/gAB6Qow3DWiNwBQ1WQUlw86QnT1DUONaCxH47w1h.jpg\"]', '2026-04-06 12:00:35', '2026-04-06 12:01:02'),
(7, 9, 'Toyota', 'Civic', '2022', '13300c', 'Automatic', 'Black', '50,00km', 'Petrol', '10000kg', 250000.00, '[\"http:\\/\\/127.0.0.1:8000\\/storage\\/products\\/NQgnOynmZLb3scmVeV6i3UQdw55t8YpUfgZI5XdA.jpg\"]', '2026-04-06 12:29:30', '2026-04-06 12:29:30');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin User', 'admin@example.com', '2026-04-04 16:13:09', '$2y$12$Cz4t0V4tyQwpyoxUK3zlrewW3sAziSXkqyKKZoD/clzn6r5A6owmq', NULL, '2026-04-04 16:13:09', '2026-04-04 14:04:34'),
(2, 'Test User', 'user@example.com', '2026-04-04 16:13:09', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36S3eYQ1j1tWQo5uewOVi7K', NULL, '2026-04-04 16:13:09', '2026-04-04 16:13:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
