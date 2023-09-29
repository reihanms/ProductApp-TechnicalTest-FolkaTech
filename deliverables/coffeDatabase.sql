-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for coffe
CREATE DATABASE IF NOT EXISTS `coffe` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `coffe`;

-- Dumping structure for table coffe.products
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL DEFAULT '0',
  `product_owner` varchar(255) NOT NULL DEFAULT '0',
  `price` varchar(50) NOT NULL DEFAULT '0',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `information` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `rate_count` int NOT NULL DEFAULT '0',
  `product_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffe.products: ~0 rows (approximately)
DELETE FROM `products`;
INSERT INTO `products` (`product_id`, `product_name`, `product_owner`, `price`, `description`, `information`, `rate_count`, `product_image`) VALUES
	(1, 'ABID CLEVER DRIPPER 102', 'UBRUKOPI', '480000', 'French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk yang ramping dan menarik. sangat\r\ncocok untuk membuat 1-2 gelas kopi.\r\nFrench Press merupakan salah satu teknik seduh manual yang simple, cukup untuk \r\nmenyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.\r\n', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 7, 'https://res.cloudinary.com/debldabws/image/upload/v1695936483/Test%20Product/image_61_bkk2oc.jpg'),
	(2, 'ABID CLEVER DRIPPER 102', 'UBRUKOPI', '25000', 'French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk yang ramping dan menarik. sangat\r\ncocok untuk membuat 1-2 gelas kopi.\r\nFrench Press merupakan salah satu teknik seduh manual yang simple, cukup untuk \r\nmenyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.\r\n', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 2, 'https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_63_fjvyxg.jpg'),
	(3, 'ABID CLEVER DRIPPER 102', 'UBRUKOPI', '28000', 'French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk yang ramping dan menarik. sangat\r\ncocok untuk membuat 1-2 gelas kopi.\r\nFrench Press merupakan salah satu teknik seduh manual yang simple, cukup untuk \r\nmenyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.\r\n', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 4, 'https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_55_cbejia.jpg'),
	(4, 'Almond Biscuit', 'UBRUKOPI', '49000', 'French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk yang ramping dan menarik. sangat\r\ncocok untuk membuat 1-2 gelas kopi.\r\nFrench Press merupakan salah satu teknik seduh manual yang simple, cukup untuk \r\nmenyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.\r\n', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 5, 'https://res.cloudinary.com/debldabws/image/upload/v1695936483/Test%20Product/image_52_pmtcsm.jpg'),
	(5, 'Aceh Gayo Coffee Beans...', 'UBRUKOPI', '50000', 'French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk yang ramping dan menarik. sangat\r\ncocok untuk membuat 1-2 gelas kopi.\r\nFrench Press merupakan salah satu teknik seduh manual yang simple, cukup untuk \r\nmenyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.\r\n', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 6, 'https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_53_glol0j.jpg'),
	(6, 'Blackpearl Coffee Beans...', 'UBRUKOPI', '12000', 'French Press dari Hario berbahan dasar kaca berwarna abu-abu di desain dengan bentuk yang ramping dan menarik. sangat\r\ncocok untuk membuat 1-2 gelas kopi.\r\nFrench Press merupakan salah satu teknik seduh manual yang simple, cukup untuk \r\nmenyeduh air dan steep selama empat menit sebelum kamu menekan knob agar ampas bisa turun ke dasar.\r\n', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 18, 'https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_54_ymgjpe.jpg');

-- Dumping structure for table coffe.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(225) NOT NULL DEFAULT '0',
  `last_name` varchar(225) NOT NULL DEFAULT '0',
  `email` varchar(225) NOT NULL DEFAULT '0',
  `number` varchar(225) NOT NULL DEFAULT '0',
  `password` varchar(225) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffe.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `number`, `password`) VALUES
	(5, 'Agus', 'Nurdin', 'Agus@gmail', '08328092023', '$2b$13$B6zDr7Gzkm5B48I1UW9AAeJya/.0s6diX5UqmNx1Ic8zr9uu1pVIe'),
	(6, 'Reihan', 'Data', 'reihan@gmail.com', '08328092023', '$2b$13$Fvvqc9B5PMAZZ5z5X6OJju7JRkgUa8RBUgnfXrQhRlKsK9dW6z62C'),
	(7, 'ssa', 'Data', 'asdc@gmail.com', '08328092023', '$2b$13$1qHgA8Jyx2.FgmOUoRd.oOMRvpcPeJQfCsomTCETTt3kNuayF1PJe'),
	(8, 'bgg', 'Data', 'asdc@gmail.com', '08328092023', '$2b$13$s3JDpurIeHC5QutJxRZ/1OvyT5zSG2Bt.QozDRLlIHdeCi6qZESfG'),
	(9, 'Agus', 'Racing', 'agus@gmail.com', '08380289283', '$2b$13$mpj12cUv7Qr.zewsxfy/0e8N/p4HywYtCtVigD4g7x7lipCUuAkZ.'),
	(10, 'Test Lagi', 'reihan', 'reihan@co.id', '08238923', '$2b$13$5BRH9TVLZWVsLf5.3meBa.C.pq2Vi3JifElTmk0s/ZtxW1JhNbzr2');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
