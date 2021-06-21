-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-06-2021 a las 05:16:00
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `articulosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(100) NOT NULL,
  `cp` varchar(16) NOT NULL,
  `equipo` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `serie` varchar(100) NOT NULL,
  `ubicacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `cp`, `equipo`, `marca`, `modelo`, `serie`, `ubicacion`) VALUES
(1, '53220099', 'lampara cialitica', 'surgiris', 'starled', '111444abc', 'sala operaciones'),
(2, '53220100', 'lampara cialitica', 'surgiris', 'starled', '111555abc', 'sala operaciones'),
(3, '5322001', 'monitor', 'mindray', 'beneview t5', '12345', 'emergencia'),
(4, '5322003', 'rayos x', 'apelem', 'ultra', 'xyz456', 'imagenes'),
(5, '5322004', 'monitor fetal', 'bistos', 'gemelar', 'fet123', 'emergencia'),
(6, '5322005', 'monitor', 'mindray', 'beneview t5', '789000', 'ginecologia'),
(7, '5322008', 'monitor', 'mindray', 'beneview t5', 'hjk999', 'emergencia'),
(8, '5322002', 'ecografo', 'samsung', 's6', 'abc123', 'ginecologia'),
(9, '5322006', 'monitor', 'mindray', 'beneview t5', 'qwer123', 'emergencia'),
(10, '5322007', 'monitor', 'mindray', 'beneview t5', '777asd', 'emergencia'),
(11, '5322009', 'monitor', 'mindray', 'beneview t5', 'cvb111', 'emergencia'),
(12, '5322010', 'monitor', 'mindray', 'beneview t5', '645ert', 'emergencia'),
(13, '5322011', 'monitor', 'mindray', 'beneview t5', '88iuy', 'emergencia'),
(14, '5322012', 'monitor', 'mindray', 'beneview t5', '123xyz', 'consulta'),
(15, '5322020', 'tensiometro', 'riester', 'big ben', 'ten123456', 'consulta'),
(16, '5322021', 'glucometro', 'accucheck', 'AC100', 'acxyz', 'consulta');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
