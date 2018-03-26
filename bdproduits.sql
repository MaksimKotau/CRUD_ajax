-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2018 at 10:41 PM
-- Server version: 5.7.17
-- PHP Version: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdproduits`
--
CREATE DATABASE IF NOT EXISTS `bdproduits` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdproduits`;

-- --------------------------------------------------------

--
-- Table structure for table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE `produits` (
  `codeProd` int(11) NOT NULL,
  `nomProd` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `categProd` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `prixProd` decimal(10,2) DEFAULT NULL,
  `qteInvent` int(11) NOT NULL,
  `qteCom` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `produits`
--

INSERT INTO `produits` (`codeProd`, `nomProd`, `categProd`, `prixProd`, `qteInvent`, `qteCom`) VALUES
(1, 'Chai', 'Boissons', '99.00', 39, 0),
(2, 'Chang', 'Boissons', '104.50', 17, 40),
(3, 'Aniseed Syrup', 'Condiments', '50.00', 13, 70),
(4, 'Chef Anton\'s Cajun Seasoning', 'Condiments', '110.00', 53, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`codeProd`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produits`
--
ALTER TABLE `produits`
  MODIFY `codeProd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
