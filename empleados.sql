-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-01-2024 a las 22:48:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`) VALUES
(3, 'Samsung Universe 9', 'Samsung\'s new variant which goes beyond Galaxy to the Universe', '1249'),
(24, 'motorola', 'motorola moto G22', '2500'),
(29, 'iPhone 9', 'An apple mobile which is nothing like apple', '549'),
(30, 'iPhone X', 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...', '899'),
(31, 'OPPOF19', 'OPPO F19 is officially announced on April 2021.', '280'),
(32, 'Huawei P30', 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.', '350'),
(33, 'MacBook Pro', 'MacBook Pro 2021 with mini-LED display may launch between September, November', '1749'),
(34, 'Samsung Galaxy Book', 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched', '158'),
(35, 'Microsoft Surface Laptop 4', '\r\nStyle and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen', '1499'),
(36, 'Infinix INBOOK', 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty', '1099'),
(37, 'HP Pavilion 15-DK1056WM', 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10', '1099'),
(38, 'perfume oil', 'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil', '13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_empleados`
--

CREATE TABLE `tb_empleados` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `repeatPass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tb_empleados`
--

INSERT INTO `tb_empleados` (`id`, `name`, `user`, `email`, `password`, `repeatPass`) VALUES
(16, 'brand', '', 'f0180026@gmail.com', '$2b$10$opxX8XPgiK28jQY0eGObjOeN3/HSRXsyD/.8RJfQmH2nQ2Sex9.cO', '$2b$10$opxX8XPgiK28jQY0eGObjOeN3/HSRXsyD/.8RJfQmH2nQ2Sex9.cO'),
(17, 'juan', 'luna01', 'luna@gmail.com', '$2b$10$DpzOiecCImWj0j0.dH4pNO5NTyG9z/VhVKVAY5i6mJCgVkd6pCgrG', '$2b$10$DpzOiecCImWj0j0.dH4pNO5NTyG9z/VhVKVAY5i6mJCgVkd6pCgrG'),
(19, 'juan', 'juan23', 'juan@as.com', '$2b$10$hBt7fjEDumEHCzpnYvxl9u8/Kx.l2XWHqAmGZ3AJGMJExBhY30Ca2', '$2b$10$hBt7fjEDumEHCzpnYvxl9u8/Kx.l2XWHqAmGZ3AJGMJExBhY30Ca2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tb_empleados`
--
ALTER TABLE `tb_empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `tb_empleados`
--
ALTER TABLE `tb_empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
