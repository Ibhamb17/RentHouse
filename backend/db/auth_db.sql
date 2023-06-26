-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2022 at 06:05 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_dosen`
--

CREATE TABLE `jadwal_dosen` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `mata_kuliah` varchar(255) NOT NULL,
  `kelas` int(11) NOT NULL,
  `sks` int(11) NOT NULL,
  `ruang` int(11) NOT NULL,
  `hari` int(11) NOT NULL,
  `waktu` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `materi`
--

CREATE TABLE `materi` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nama_materi` varchar(255) NOT NULL,
  `link_materi` varchar(255) NOT NULL,
  `mata_kuliah` varchar(255) NOT NULL,
  `tenggat_waktu` date NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `materi`
--

INSERT INTO `materi` (`id`, `uuid`, `nama_materi`, `link_materi`, `mata_kuliah`, `tenggat_waktu`, `userId`, `createdAt`, `updatedAt`) VALUES
(4, '70b7e10e-e6f1-471b-817e-3937417ef7d1', 'Materi Updated', 'https://www.google.com/', 'ppaw', '2022-12-25', 4, '2022-12-20 20:57:37', '2022-12-21 04:51:28'),
(5, '6888772c-aabb-4bac-bfd0-6a85861160fc', 'Materi Updated 3', 'http://djawdjwaodjaweqweqwewdo.com', 'eqweqweqwewqewqeqwe', '2022-12-26', 4, '2022-12-20 20:58:10', '2022-12-21 00:37:13'),
(6, 'eb60faae-b56c-4800-9370-7c2bb1054b62', 'tugas besar', 'http://djawdjwaodjawdo.com', '3123131231231232', '2022-12-27', 4, '2022-12-20 21:05:21', '2022-12-21 00:45:07');

-- --------------------------------------------------------

--
-- Table structure for table `matkul`
--

CREATE TABLE `matkul` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nama_matkul` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `name`, `price`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '45da2804-d657-4e4a-914e-4aed7c06b40f', 'tugas 1', 0, 2, '2022-12-20 18:54:58', '2022-12-20 18:54:58'),
(18, 'b81f3049-b686-4361-9c99-df3eb5f6f7c6', 'tugas 1', 123, 2, '2022-12-20 19:00:34', '2022-12-20 19:00:34'),
(19, '9f767031-3731-43b5-a764-bfd4d7f29f61', 'product 1', 123456, 2, '2022-12-20 19:00:48', '2022-12-20 19:00:48'),
(20, '3d095570-79b8-4772-be87-f5dadb53baf7', 'product 1', 123345, 2, '2022-12-20 19:02:18', '2022-12-20 19:02:18'),
(21, '33b6d60a-06db-4fc4-85e4-0b7bc4439c96', 'https://drive.google.com/drive/folders/1PR1uLHN2FBIBccaIZJsDNsTuzhrZ6Rva?usp=share_link ', 0, 2, '2022-12-20 19:30:43', '2022-12-20 19:30:43');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-FZ12wxgEWXm7KYGRpsOtBMe70R0Ypbk', '2022-12-21 22:17:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:17:04', '2022-12-20 22:17:04'),
('-iY8_TybFh60ZR664ucJ7OZc5GokOFIR', '2022-12-21 23:25:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:25:24', '2022-12-20 23:25:24'),
('0V_Xzf0YPNeYwQyfUXo-GmOPoE6lBXg7', '2022-12-21 23:59:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:59:26', '2022-12-20 23:59:26'),
('1aOutMI_kZadPP5vV94kbSWvrpcw-yWG', '2022-12-22 04:38:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:38:37', '2022-12-21 04:38:37'),
('1G0_BbEFQQNjmV6rLW_tlTVfI022r40Y', '2022-12-21 21:50:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:50:00', '2022-12-20 21:50:00'),
('1moRRR0RqtNzrhyuDZpaskCH6EQTF3Pn', '2022-12-21 19:00:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:00:55', '2022-12-20 19:00:55'),
('1nAWzeIzPlKFIaapotZ8XSEfsnO6oHUr', '2022-12-21 21:49:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:49:43', '2022-12-20 21:49:43'),
('2PI_w-UynUcoUOms1B_XxSqHq7c9nrXr', '2022-12-21 23:01:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:01:24', '2022-12-20 23:01:24'),
('2ZTMvOjhlsVh6QC8UsMtOAKmYD09Ys5-', '2022-12-21 22:18:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:18:26', '2022-12-20 22:18:26'),
('3nkwIA_HYpUSIkixQas82Y_KqbjlZ7PO', '2022-12-21 18:59:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:35', '2022-12-20 18:59:35'),
('47UmF-P8xaNJIHo4oYPcyqpVHGu2kV6G', '2022-12-22 00:44:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:44:42', '2022-12-21 00:44:42'),
('4H-TSi2sGKAvIX50iAoU9wDu75fDL3QO', '2022-12-21 20:21:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:21:39', '2022-12-20 20:21:39'),
('4hilEpnk6dBKrm1JojxMjnOHHJ1cFPeP', '2022-12-22 04:46:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:46:53', '2022-12-21 04:46:53'),
('4qBCSwGKd7E-Ve24jLj6zACIkxTpswKF', '2022-12-21 18:59:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:32', '2022-12-20 18:59:32'),
('4SiEkq1bNAYC0tKOVlmpJAPocGsIfR4L', '2022-12-21 21:49:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:49:10', '2022-12-20 21:49:10'),
('4_UQ8FbgJ1_7UR3yMC9h7qCgWuSqmugO', '2022-12-21 23:31:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:39', '2022-12-20 23:31:39'),
('5ajNkmJaZsgOw0BVgmI3mM_DKXYJ6KVJ', '2022-12-21 21:51:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:51:34', '2022-12-20 21:51:34'),
('5eZym6hytGgS9xyMoEBeI18nBFmdgxAg', '2022-12-21 21:05:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:05:21', '2022-12-20 21:05:21'),
('5gIX4-5NW-SQHppyi56kVoGWiPy2KY68', '2022-12-21 22:19:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:19:38', '2022-12-20 22:19:38'),
('5I3hmCaCackDjoJlWoCMqMqEHC6DA8Ab', '2022-12-21 18:45:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:45:47', '2022-12-20 18:45:47'),
('5uS-P5I-HhEFUuMv2_KCt0FFl-IqvBb5', '2022-12-21 21:47:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:47:21', '2022-12-20 21:47:21'),
('6JTKFyE1jBjpmjuVr642zFg9z-zbMr5Y', '2022-12-22 00:37:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:37:13', '2022-12-21 00:37:13'),
('6NA1DFi-5J7SIQ66zbDhD1ACAuBbrwlh', '2022-12-21 22:11:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:11:14', '2022-12-20 22:11:14'),
('6RHQ-uTaVWfcIXnl86iUepv7cXEVzS4b', '2022-12-21 18:59:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:35', '2022-12-20 18:59:35'),
('6WJoNuMRVGT__4a4tBLLJMjkr0gmNZl4', '2022-12-21 21:51:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:51:31', '2022-12-20 21:51:31'),
('7jgbED_DxS4Y1izxSYzTh4Ccgu4EOvvA', '2022-12-21 22:11:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:11:19', '2022-12-20 22:11:19'),
('7vR6X_PVi-hJVbCtijyTpYcxSa_I9Trl', '2022-12-21 23:25:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:25:49', '2022-12-20 23:25:49'),
('85VPFLwwYCtildJaRynAgMsWI0Mi13zF', '2022-12-21 23:28:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:28:18', '2022-12-20 23:28:18'),
('8Dy1I_lFnjQ52LFByVt_Ylhw_9CST3Wk', '2022-12-21 21:52:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:52:05', '2022-12-20 21:52:05'),
('8GhVDMXUatHm7P61oFjKxnMTah-4PFqb', '2022-12-21 22:17:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:17:30', '2022-12-20 22:17:30'),
('8Ul_SBymh0_9FeomK1KXv6ANCpPetFi5', '2022-12-22 04:53:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"5b4094b4-ed25-40cb-ab46-cc2945e01ede\"}', '2022-12-21 04:46:53', '2022-12-21 04:53:54'),
('8v8jdw7bDs7vD4SubuIe4mPKKtKvx1EG', '2022-12-22 02:28:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 02:28:56', '2022-12-21 02:28:56'),
('9PijoRQVxvTFHBGZ6ELVjos18H4xJYf4', '2022-12-21 21:54:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:54:02', '2022-12-20 21:54:02'),
('9wJNUHeNyJrkKPYUrrgP5V2c1qfyQnh9', '2022-12-21 22:12:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:12:40', '2022-12-20 22:12:40'),
('9xgY0iBPX7eC4T70EKTNzXGr1-rui1h8', '2022-12-22 00:00:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:00:41', '2022-12-21 00:00:41'),
('A2y7vMSAcGlvHHxELUeHp1KtMCCKlKb2', '2022-12-21 18:59:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:34', '2022-12-20 18:59:34'),
('A5CAQLttgeAtnqG3fUU6zIO366Xeftp4', '2022-12-22 04:51:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:51:28', '2022-12-21 04:51:28'),
('aiCZ2NGqktBTXn7N74SpQTny1ruo1J63', '2022-12-21 23:27:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:27:39', '2022-12-20 23:27:39'),
('arSptDb5Oi5fnh2pu4P5cuxumVN6tRWH', '2022-12-21 22:03:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:03:39', '2022-12-20 22:03:39'),
('AXRfyGkopIJQOdVnfZEBM9z6g5W1jpdn', '2022-12-21 23:31:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:31', '2022-12-20 23:31:31'),
('AZySXq_hUPTz2oftuIggexlUxSjQIKES', '2022-12-22 02:16:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 02:16:58', '2022-12-21 02:16:58'),
('br2pMZHRfFCumd6p0RcQ8pMVI6VFdnlP', '2022-12-21 19:00:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:00:48', '2022-12-20 19:00:48'),
('BtlsxeiZwB2HhdOlN3a8Y4hbYQc1Ji99', '2022-12-21 20:19:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:19:24', '2022-12-20 20:19:24'),
('bw--2FKzpoLD_XmT0kvumIdcKCTMAThP', '2022-12-21 22:07:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:07:20', '2022-12-20 22:07:20'),
('BYZ7x4vv2R-RCztoHOks-0gJHcIMsV8x', '2022-12-21 23:03:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:03:32', '2022-12-20 23:03:32'),
('CeE0ks0dkQ7sTPPgjStYdGuKHq0-P6-r', '2022-12-21 23:04:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:04:17', '2022-12-20 23:04:17'),
('CFzMHzjNXG6AyYkhrbjMFnebAVdK4Njb', '2022-12-21 23:03:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:03:54', '2022-12-20 23:03:54'),
('cOeABsxJq58W9bBTIxJPguqHjf2oI3nk', '2022-12-22 00:58:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:58:39', '2022-12-21 00:58:39'),
('CZJ5xnCW_XVIyrdy562T6T6fK3V1AlTh', '2022-12-21 23:01:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:01:37', '2022-12-20 23:01:37'),
('CzvbBeDYkSh7IfLaIo-XQ1D6KLfuStIz', '2022-12-21 21:53:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:53:57', '2022-12-20 21:53:57'),
('d2e7J7HofKUr1UZqkGJQl70aLNfGltXO', '2022-12-22 04:41:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:41:32', '2022-12-21 04:41:32'),
('DIwQGsaOuZ7Uh2s4OaoiYXieqtn7VtsL', '2022-12-21 21:48:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:48:29', '2022-12-20 21:48:29'),
('dnUA-wQrIDdBhZ0pLRaKOqJ1kpIYz6nj', '2022-12-21 21:59:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:59:43', '2022-12-20 21:59:43'),
('DrcYz9adz_YgJTIWL3AIMmlkkct34lVJ', '2022-12-21 23:49:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:49:06', '2022-12-20 23:49:06'),
('dvb5iL9yGFcyRJYZ4IitNCXMup0Jn-vc', '2022-12-21 23:59:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:59:30', '2022-12-20 23:59:30'),
('DWQGf38zNvtz4AF-kbxvkgbim3oQOi0P', '2022-12-21 19:00:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:00:53', '2022-12-20 19:00:53'),
('dz_e8lNLGYSPS9zVqsKZ5LQr-14wSqRG', '2022-12-21 23:04:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:04:10', '2022-12-20 23:04:10'),
('e54Nu57BZYao77_lEtHd8WDIlrOdHH-t', '2022-12-21 20:33:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:33:49', '2022-12-20 20:33:49'),
('efrAONvUuwSYKBndDi67-GdpcqpMrmIt', '2022-12-21 20:59:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:59:40', '2022-12-20 20:59:40'),
('ejqCjJxs0aOmalAZdMxTeQgQc21Qn-kI', '2022-12-21 18:59:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:38', '2022-12-20 18:59:38'),
('ElXTpTpDyR5lC0M_9bgxFRyVwPKZgeB2', '2022-12-21 18:59:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:33', '2022-12-20 18:59:33'),
('ESCpe60QAUtH0eK26S59C5cR5HjFRGW7', '2022-12-21 18:43:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:43:51', '2022-12-20 18:43:51'),
('ET2SMSwm2HOIfzHLeyrGN41QQVd_LU4T', '2022-12-21 23:31:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:10', '2022-12-20 23:31:10'),
('f4sVI-qL_tieXSILsiKzS2_iauygGI36', '2022-12-21 21:58:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:58:59', '2022-12-20 21:58:59'),
('f9owt8h0VM-Ecp0XWIBXxqAaWx4hvNiH', '2022-12-21 23:49:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:49:32', '2022-12-20 23:49:32'),
('FACS3hYxxfPnS5fkfZ5Kn0ggBgbqEOo3', '2022-12-21 21:58:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:58:54', '2022-12-20 21:58:54'),
('fm8i6Nf_1RzBw9HsylOJz5On7ojYnu1t', '2022-12-21 18:43:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:43:20', '2022-12-20 18:43:20'),
('FNHiL-lGZym0f7fKumgci6psla74e7Pb', '2022-12-21 22:18:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:18:24', '2022-12-20 22:18:24'),
('fRDxp1lOBl5sP2n5ZuKQjm58lEIEgD35', '2022-12-21 23:31:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:17', '2022-12-20 23:31:17'),
('FvRVT7t1QghOR993YygN3CRYirOteLjr', '2022-12-21 19:01:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"e588a7bf-3b8a-4d96-9c55-6023e6c5e22b\"}', '2022-12-20 18:45:47', '2022-12-20 19:01:01'),
('FWVrx-Q1PGR01URlKqVIzvcV6JpwHGwG', '2022-12-21 22:17:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:17:41', '2022-12-20 22:17:41'),
('Fyuoh6UrDPNy3mdh1VTQvKrM0vUHf6by', '2022-12-21 23:25:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:25:16', '2022-12-20 23:25:16'),
('G-_exz_fGrSPJwFgwkvVXWm64bVsusCV', '2022-12-22 04:47:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:47:55', '2022-12-21 04:47:55'),
('GE-1gn337_3ElofJld-fSCZ_MjpqzFid', '2022-12-22 01:57:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 01:57:23', '2022-12-21 01:57:23'),
('GJSOTdQDgxz3FaXzL3mESg40ccHSN-yQ', '2022-12-21 23:31:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:18', '2022-12-20 23:31:18'),
('Gnc7L8hMk7EbfVh2HWFnyed6USegFKL2', '2022-12-21 19:30:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:30:43', '2022-12-20 19:30:43'),
('GOSjhGkkJwj2rxqxkEZ4hi5S-ZxX8oye', '2022-12-21 18:59:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:39', '2022-12-20 18:59:39'),
('gVxQqzLp3Sv9fFkmjeP--OX4ScnK88NS', '2022-12-21 23:03:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:03:52', '2022-12-20 23:03:52'),
('gxKhXb-gr18gNyEJowaOPmLFCY1MomD1', '2022-12-21 23:29:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:29:03', '2022-12-20 23:29:03'),
('H59O9swYncU_dIuRsITbGCTY6ra2Vekc', '2022-12-21 09:31:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 09:31:27', '2022-12-20 09:31:27'),
('HGIOv9EOW3uso6ifeLVDbBy_TS06DZnw', '2022-12-21 20:21:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:21:34', '2022-12-20 20:21:34'),
('HG_aOy8B4piX3J24nUA-zMSp_YaAytxM', '2022-12-21 20:19:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:19:02', '2022-12-20 20:19:02'),
('hIN0Eh6GT7kKahfURBcWdUGA-SzVV1QH', '2022-12-21 22:07:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:07:56', '2022-12-20 22:07:56'),
('hVbOSU2LfPvVAK6M3B4sKNgGUzaz5c0w', '2022-12-22 04:38:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"5b4094b4-ed25-40cb-ab46-cc2945e01ede\"}', '2022-12-21 04:38:37', '2022-12-21 04:38:37'),
('i2pvzywHPWk3JrmJDTi-WfL__rteSzjs', '2022-12-22 00:45:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:45:55', '2022-12-21 00:45:55'),
('ifdx7YuML3oWim_fVx9bko5Ihy7EYa9a', '2022-12-22 04:45:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:45:37', '2022-12-21 04:45:37'),
('IRWkAO_EX_HahcwlVJT6hhkiwuwQZAlj', '2022-12-21 21:56:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:56:11', '2022-12-20 21:56:11'),
('Isj5Ue_JPNgsvsrBDgSCP0ZjuVWvfU5k', '2022-12-21 18:59:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:38', '2022-12-20 18:59:38'),
('j2Zw1bDIa7IepXlqWUr7TPj3rVwXevND', '2022-12-21 23:58:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:58:39', '2022-12-20 23:58:39'),
('jalVG5pDDYNFar1RTyk5idarE6Up95eG', '2022-12-21 23:26:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:26:40', '2022-12-20 23:26:40'),
('jCz9mdUut4EJdUE0nugU1hkj12xmp-c2', '2022-12-21 23:27:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:27:34', '2022-12-20 23:27:34'),
('JE8Fd2DnFYO5iAZS6S3CUR9lhG2LrsE2', '2022-12-22 00:00:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:00:51', '2022-12-21 00:00:51'),
('JiINggZ79cSyQFCRFAjuqhwVn8Y4Mq_C', '2022-12-21 22:37:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:37:04', '2022-12-20 22:37:04'),
('jNIEPeJcThdnvAW5Wmq8q4w2uMx_VPme', '2022-12-21 18:59:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:39', '2022-12-20 18:59:39'),
('Jto692_SmWCQh7bO_4kTYd2ly2oDf-F4', '2022-12-22 00:45:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:45:51', '2022-12-21 00:45:51'),
('k5dLgIiF0YsounKBL6WDA9TSeINGEFYn', '2022-12-21 23:58:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:58:00', '2022-12-20 23:58:00'),
('K8gjvC86QG6Rrj9X6UgE324bcHZTYXgD', '2022-12-21 21:55:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:55:31', '2022-12-20 21:55:31'),
('kfwWvu4MB1V-Kni9kkTEdBIu78_D-MiX', '2022-12-21 09:58:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 09:36:30', '2022-12-20 09:58:23'),
('kKQ3SqDYUWLpNYoUiNLRhs5y7P_-sJJI', '2022-12-21 20:33:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:33:59', '2022-12-20 20:33:59'),
('KmGd4pIoDlo2-bJxgziIOUUPuBExQLM-', '2022-12-21 23:31:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:10', '2022-12-20 23:31:10'),
('KSEgFUG3tDrfsfEha45s7xtQwJEqSJDn', '2022-12-22 00:00:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:00:33', '2022-12-21 00:00:33'),
('KwyVqaKx3LPDj2hHyzgloA5PRPl7aFOo', '2022-12-21 23:31:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:39', '2022-12-20 23:31:39'),
('KzKXwFtVF-KCJfn3Q8BHiUtS8prqeOWw', '2022-12-22 04:43:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:43:51', '2022-12-21 04:43:51'),
('LA27HZj9soOwXuY_cfmQJ7H2Yyp-B2EP', '2022-12-21 22:08:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:08:02', '2022-12-20 22:08:02'),
('laSdLdXR6eSyl75QiQI7gaerGUOflRVC', '2022-12-22 00:00:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:00:17', '2022-12-21 00:00:17'),
('Lbz2Msv1fGF6oKV1OKQdHGO_Akuq5pqP', '2022-12-21 23:31:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:10', '2022-12-20 23:31:10'),
('lFFTK3Zgats4C8zhJCsC7kploZp53-dc', '2022-12-21 23:39:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:39:32', '2022-12-20 23:39:32'),
('llkshTLoaSw_R5mSQ5DTDdRDsR0kuTxP', '2022-12-21 23:01:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:01:33', '2022-12-20 23:01:33'),
('LqeefEuv11oUyVrULUVEHsXONlVPlaL7', '2022-12-22 02:29:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"5b4094b4-ed25-40cb-ab46-cc2945e01ede\"}', '2022-12-20 11:44:56', '2022-12-21 02:29:23'),
('lsBKKazZjC2LtnNtR21Cv-MEF-HpNVtM', '2022-12-21 21:15:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:15:42', '2022-12-20 21:15:42'),
('lw775SE6eTlffT7ePF843ei0sjNj0yw2', '2022-12-21 20:59:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:59:42', '2022-12-20 20:59:42'),
('L_0sZHy8Y_0pvpQMM0E10VxMlbJbAAg7', '2022-12-22 00:36:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:36:53', '2022-12-21 00:36:53'),
('MBSOsIa1XXWKWH9zw4NV4dJcx22rpNwI', '2022-12-21 22:18:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:18:13', '2022-12-20 22:18:13'),
('mOUeeLRS_6FPUBjxLMrlW41JI5cwyrvn', '2022-12-21 21:51:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:51:21', '2022-12-20 21:51:21'),
('MzdK-6Tr5R7G06R2SImUTxsjYkbvWesF', '2022-12-21 23:31:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:40', '2022-12-20 23:31:40'),
('nFey8P-gyWwvVwVqXN-5kuvqi54iYByl', '2022-12-21 23:28:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:28:08', '2022-12-20 23:28:08'),
('NFItLXFZiyRNttqBf8X8epti1T4bhm-L', '2022-12-21 22:04:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:04:37', '2022-12-20 22:04:37'),
('NJUo3WYstEY5rZMSgOJRH-qEmuAO3yXS', '2022-12-21 18:59:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:36', '2022-12-20 18:59:36'),
('Nk2VqN6nnYKK2naFfumM-ghrH-MuKe5a', '2022-12-21 23:01:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:01:55', '2022-12-20 23:01:55'),
('nkptjjkG4oskOxHUCzpQVetv3HV9y36G', '2022-12-21 20:59:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:59:57', '2022-12-20 20:59:57'),
('NV09VNJ7B-A0ueZ8pzZqMfXjIOzKTJ4a', '2022-12-22 04:38:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:38:37', '2022-12-21 04:38:37'),
('NzQOBFxQO05YR0wiuZLZyjdaaovphYhW', '2022-12-21 21:49:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:49:07', '2022-12-20 21:49:07'),
('OE1j7FNLU9zq38OL0buuhdaTVFj4CKIL', '2022-12-21 23:46:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:46:21', '2022-12-20 23:46:21'),
('ooxSVHgvuOVHzUrLd6ccMruVM4tqINZc', '2022-12-21 22:08:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:08:54', '2022-12-20 22:08:54'),
('OpPdpDhxvsQwuAWtXI4ouwd6mzFf7sYg', '2022-12-21 23:27:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:27:51', '2022-12-20 23:27:51'),
('opyWaLKJ2SuNR8a7GfubgieDZIk1oVgo', '2022-12-21 21:47:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:47:02', '2022-12-20 21:47:02'),
('oTX3TXNffa-tBH9h4U2TicuI5KatfxCV', '2022-12-21 23:01:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:01:44', '2022-12-20 23:01:44'),
('OUNos1F4Jwph5yVcJmUWKl7LL7F5QNF8', '2022-12-21 21:49:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:49:44', '2022-12-20 21:49:44'),
('PDHq3W04wiypvlxvCVz1NWyB9SSXjh20', '2022-12-21 21:46:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:46:06', '2022-12-20 21:46:06'),
('pGVNNaTgBrn41lSRRzwcO3rfVFmLXyOp', '2022-12-21 09:30:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 04:15:20', '2022-12-20 09:30:18'),
('PJ2640RZ4ngVM3ujNE-8n6NDtuG1ABm3', '2022-12-21 21:51:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:51:10', '2022-12-20 21:51:10'),
('PKO3NrpdxeQuisYLp9EGplnBgUPMg84w', '2022-12-22 00:00:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:00:26', '2022-12-21 00:00:26'),
('PriD5Jk5ctudmGf4GE-2xeZpnlmHH_pF', '2022-12-21 21:51:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:51:20', '2022-12-20 21:51:20'),
('PtPLDGw4odsexsWPFq5nvirZ8CcRGa9P', '2022-12-21 22:07:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:07:14', '2022-12-20 22:07:14'),
('PuINiNfmCvwG91oq9E5w0OhEonbQs8KY', '2022-12-21 21:47:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:47:14', '2022-12-20 21:47:14'),
('PxYOXVnAB0fepuIOL92phvcE3JDWq_3K', '2022-12-21 21:59:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:59:28', '2022-12-20 21:59:28'),
('qbTPunoWGexcdCHLe6AXuOkaxpvkMxRS', '2022-12-21 23:28:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:28:26', '2022-12-20 23:28:26'),
('qfQC_9KJBy5PHWTSpda-HhTiL7aAwQQg', '2022-12-22 02:07:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"5b4094b4-ed25-40cb-ab46-cc2945e01ede\"}', '2022-12-20 20:56:17', '2022-12-21 02:07:07'),
('QgsObaLDRenRO5rD_XFu3dXCOT3iX064', '2022-12-21 21:54:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:54:33', '2022-12-20 21:54:33'),
('QI7joOAh6H2lHhyUdbh0qKK1zKTPvBcv', '2022-12-21 22:01:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:01:18', '2022-12-20 22:01:18'),
('QXF5gVXDtlhfe96nQY6OZDT_N5y8cH94', '2022-12-21 18:59:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:34', '2022-12-20 18:59:34'),
('QY5WZpjjv_3Zv2MkMYbg0N6aOVIVrbvO', '2022-12-21 23:01:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:01:14', '2022-12-20 23:01:14'),
('RFy0hPaQS510kY4nBkylA4N8W8RdTVaE', '2022-12-21 21:59:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:59:33', '2022-12-20 21:59:33'),
('RjnX5NVKP7Ed6lZetVeHJalO2tyaY4DJ', '2022-12-21 21:14:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:14:36', '2022-12-20 21:14:36'),
('rPRvOddZ9E1PwZoCL78gNQIc-CUcU5c7', '2022-12-21 23:27:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:27:27', '2022-12-20 23:27:27'),
('RR7PxZ0N2olNLD_bqMPISRg67BaJUp35', '2022-12-21 22:03:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:03:45', '2022-12-20 22:03:45'),
('rSPLasd1FNWMOq8wxNPOtujeUjzNAswr', '2022-12-21 21:59:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:59:51', '2022-12-20 21:59:51'),
('RXQfmT_VV6xvHuR-4Ps3Av9iC5W0JGiZ', '2022-12-21 19:00:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:00:34', '2022-12-20 19:00:34'),
('s1VkBDIhJ6mhRx-pBnt9o_WKzBl5d8sH', '2022-12-22 02:30:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 02:30:21', '2022-12-21 02:30:21'),
('SE78SsWmyAtgPeZWXQ9sDiWziRH6U7zB', '2022-12-21 18:59:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:37', '2022-12-20 18:59:37'),
('Sg4Dy06wTPLVkJ1AjEQRMiwG69ZlSpek', '2022-12-21 23:26:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:26:04', '2022-12-20 23:26:04'),
('SGeQ2OuA0H_0grYXFFwmwpdMyPAcKuse', '2022-12-21 23:35:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:35:42', '2022-12-20 23:35:42'),
('SiAdviXimfKW6WaWtnjxYMpN6pWdrdGj', '2022-12-22 00:45:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:45:55', '2022-12-21 00:45:55'),
('sKSIYlvHhHBI2YZw5NTylysD3Cl6jW8G', '2022-12-21 18:46:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:46:11', '2022-12-20 18:46:11'),
('t6Vteq3E8JP6XXv3_6WFBKJd6SZIyK2a', '2022-12-21 20:19:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:19:15', '2022-12-20 20:19:15'),
('TD5rshfQxHviopNf00ekZvnbgEUwShgv', '2022-12-21 22:04:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:04:32', '2022-12-20 22:04:32'),
('TNO7sbrjh4wSe-1OD66owFABUDHxebKg', '2022-12-21 23:27:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:27:57', '2022-12-20 23:27:57'),
('TNOE7tBBGZVuftoZ4RfJGH7jKRj-1tW2', '2022-12-22 04:45:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:45:18', '2022-12-21 04:45:18'),
('tovT1ZyO9bMmnJItVb8ErJYVI3y2b5QI', '2022-12-21 22:05:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:05:59', '2022-12-20 22:05:59'),
('TyRyAOkLiOe0diVgT3ACAJkJcD-Sg4UF', '2022-12-21 21:54:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:54:06', '2022-12-20 21:54:06'),
('U-vXSIh1gDhiboDUtcUuum3Mm0SsR_iV', '2022-12-21 21:47:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:47:09', '2022-12-20 21:47:09'),
('UCeypMxiiGN-csEhsC4wHIxP97leQEC5', '2022-12-21 21:06:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:06:19', '2022-12-20 21:06:19'),
('UFG3f21_8Yp2nhutL3xi3pE0KOcY697E', '2022-12-21 23:25:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:25:12', '2022-12-20 23:25:12'),
('UKi7L5RLhpBir-HHi7o13ADz-YCCnRPH', '2022-12-21 18:44:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:44:18', '2022-12-20 18:44:18'),
('UoBMihlMtWE_wSVblTxRCxFGPadH1RBL', '2022-12-21 20:59:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:59:35', '2022-12-20 20:59:35'),
('V4LeyyFYby_KJtHI4NCpdkHaUiPdiHLO', '2022-12-21 23:04:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:04:02', '2022-12-20 23:04:02'),
('VauUdotdN8-tgxNyn3y8MHtqwjzvZMlo', '2022-12-21 22:01:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:01:12', '2022-12-20 22:01:12'),
('vbJ6LR55LD6hwHoSvbyp0YyIyL4sxsmO', '2022-12-21 22:07:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:07:26', '2022-12-20 22:07:26'),
('vcWRFY6K8yRQHFlwWdVQ3doi3-RO8y9V', '2022-12-21 21:49:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:49:34', '2022-12-20 21:49:34'),
('VHKE1FxJ-UnDFLQqKqI4k_-36MJ0jL80', '2022-12-21 21:54:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:54:36', '2022-12-20 21:54:36'),
('VLQTxJ2gJbWZS9IUchjpiQzumu5utp5W', '2022-12-21 23:46:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:46:08', '2022-12-20 23:46:08'),
('vVJD6jZeWqWu0cQf0AT_BCa6qbQDHV57', '2022-12-21 23:26:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:26:35', '2022-12-20 23:26:35'),
('VxSCzb-uk0L8m4bKmROnB6BhIxVKfGir', '2022-12-21 22:12:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:12:35', '2022-12-20 22:12:35'),
('w01INdYHqIbhxWNu7MPa03sJ8L8fBA-a', '2022-12-21 22:06:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:06:05', '2022-12-20 22:06:05'),
('W22YAK7OSiUycn-FKxmEdVboonmHVSBc', '2022-12-21 22:37:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:37:09', '2022-12-20 22:37:09'),
('W5RcWAUk3TWd0NSbB-9wOQaAMMt6hx9o', '2022-12-21 23:31:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:31:08', '2022-12-20 23:31:08'),
('W6NBPIH26LbH2i1Mhf4WnDx7gahcD_7k', '2022-12-21 23:49:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:49:12', '2022-12-20 23:49:12'),
('wO_xTm2XHwcFyA-4sFOTjdOZ-xu4jYGV', '2022-12-21 22:17:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:17:43', '2022-12-20 22:17:43'),
('x1giGvH1ImokL23L7fq4TPubocVjow3j', '2022-12-22 04:46:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 04:46:28', '2022-12-21 04:46:28'),
('Xdr4FLPTi7D8DASxzApTnsfm32SAclMA', '2022-12-21 21:45:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:45:59', '2022-12-20 21:45:59'),
('xjVE4R6pi4F5t3DG2yqqbZGI9Regl8hx', '2022-12-21 10:39:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 10:39:23', '2022-12-20 10:39:23'),
('xQjXG32ArivLNrFHswBLxClL8_QewGjR', '2022-12-21 23:28:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:28:20', '2022-12-20 23:28:20'),
('XRTLNENYT6Cv2ZNSpl32Q__SMGMTR9IN', '2022-12-21 22:08:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:08:59', '2022-12-20 22:08:59'),
('y-_DDDYpfge3EuRiaJyvR5nt8uxhu-rL', '2022-12-21 21:48:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:48:36', '2022-12-20 21:48:36'),
('Y4Akj0A07Z66yMHBaeZjPsJC_HzLa7b6', '2022-12-21 21:56:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:56:05', '2022-12-20 21:56:05'),
('Y5PivQW7lSRY1jVhSe1VPyvd8rRoLAEz', '2022-12-21 20:59:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 20:59:51', '2022-12-20 20:59:51'),
('yjZEmPU78E422lA6B7eCJPsVYN5JS5IE', '2022-12-21 21:14:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 21:14:46', '2022-12-20 21:14:46'),
('yp6oPBfG2LORzt8bJ5OrtJa836g5n63q', '2022-12-21 22:17:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:17:34', '2022-12-20 22:17:34'),
('YuWrEQD-coz7N5m1JvCCXnk-FdxVzq4_', '2022-12-21 22:17:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 22:17:53', '2022-12-20 22:17:53'),
('zHl73HeGFPdvca7ugcB6-b4pQ8P0WcYh', '2022-12-21 23:04:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:04:43', '2022-12-20 23:04:43'),
('ZL4NLOkGMXq4rLK6kdOdSWNhGI1X9P8h', '2022-12-22 00:45:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:45:07', '2022-12-21 00:45:07'),
('Zn70W_R0VZPRKYag4JhId0elKdWh2CH7', '2022-12-21 19:00:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:00:54', '2022-12-20 19:00:54'),
('zoS3JXU7gVvdFT0veEWtQslphQlJUBC8', '2022-12-21 19:28:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 19:28:54', '2022-12-20 19:28:54'),
('zRhOuTYSk8Xjemv6ARlo2V50AAfsC1cc', '2022-12-21 18:59:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 18:59:34', '2022-12-20 18:59:34'),
('_7DGbG20Y17crF7gd292GEWet-gdNfiJ', '2022-12-22 00:45:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-21 00:45:55', '2022-12-21 00:45:55'),
('_hYnzbE-tczIs-NMBUO6csUUYRbWnUZr', '2022-12-21 23:59:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:59:41', '2022-12-20 23:59:41'),
('_hzzX1M7TCQEDeHMqeInTBjoe-t3M21l', '2022-12-21 23:58:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-12-20 23:58:12', '2022-12-20 23:58:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '41cd9bbb-f27d-4418-80b0-ec8864e69fda', 'Ibham Bathsyi', 'ibham@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$NsB81e/zpYGC7s6aDbv0MA$Tsre5NiGfhSpnph/if8JBnNMcHJYws/oBl/txFvxx2A', 'user', '2022-12-20 03:46:40', '2022-12-20 23:25:12'),
(2, 'e588a7bf-3b8a-4d96-9c55-6023e6c5e22b', 'Ibem Bathsyi', 'ibem@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$lafGV8UD9vioXkksiq5iqQ$1refXask5nRl7reA8d6Xbjt+xgg5tLnVSMlFB9sbTk4', 'admin', '2022-12-20 10:13:42', '2022-12-20 10:13:42'),
(3, '381e58d9-56bb-4d55-abd5-d32850af18df', 'Dwi Bagia', 'dwi@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$mXC1xYQvq2OFH7WZPj2iVA$6vdQoQvQT2/y0rh3kqRx43NxOXJUTYM8BXUWmRBw+qI', 'mahasiswa', '2022-12-20 10:29:17', '2022-12-20 10:29:17'),
(4, '5b4094b4-ed25-40cb-ab46-cc2945e01ede', 'Haikal Azhar', 'haikal@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$VvkIXSFCuuBEvR/Z2gg5LQ$i0X9NN89CYlnb+cfbc/QoF5b9kect83EDsPAiPdsmKo', 'dosen', '2022-12-20 10:29:39', '2022-12-20 10:29:39'),
(5, 'b8e886e6-038f-4ba3-ba84-e1c6a51afd70', 'ibam123', 'ibamb@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$+Xj1rjfAB2QxQ9p5Gu2GvA$mLNeNb7ZKaop/AU8AzIdt9XOfPnznTkggo6+g7nvcR8', 'admin', '2022-12-20 18:43:51', '2022-12-20 18:46:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `materi`
--
ALTER TABLE `materi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `matkul`
--
ALTER TABLE `matkul`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materi`
--
ALTER TABLE `materi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `matkul`
--
ALTER TABLE `matkul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  ADD CONSTRAINT `jadwal_dosen_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `materi`
--
ALTER TABLE `materi`
  ADD CONSTRAINT `materi_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `matkul`
--
ALTER TABLE `matkul`
  ADD CONSTRAINT `matkul_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
