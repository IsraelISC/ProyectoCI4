-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 21-02-2024 a las 02:15:00
-- Versión del servidor: 5.7.39
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_Cine`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_data_Imagen`
--

CREATE TABLE `tbl_data_Imagen` (
  `idImagen` int(11) NOT NULL,
  `urlImagen` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_peliculas`
--

CREATE TABLE `tbl_peliculas` (
  `idPelicula` int(11) NOT NULL,
  `nombrePelicula` varchar(90) NOT NULL,
  `idImagenPelicula` int(11) NOT NULL,
  `PrecioPelicula` float NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_data_Imagen`
--
ALTER TABLE `tbl_data_Imagen`
  ADD PRIMARY KEY (`idImagen`);

--
-- Indices de la tabla `tbl_peliculas`
--
ALTER TABLE `tbl_peliculas`
  ADD PRIMARY KEY (`idPelicula`),
  ADD KEY `idImagenPelicula_idx` (`idImagenPelicula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_data_Imagen`
--
ALTER TABLE `tbl_data_Imagen`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_peliculas`
--
ALTER TABLE `tbl_peliculas`
  MODIFY `idPelicula` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_peliculas`
--
ALTER TABLE `tbl_peliculas`
  ADD CONSTRAINT `idImagenPelicula` FOREIGN KEY (`idImagenPelicula`) REFERENCES `tbl_data_Imagen` (`idImagen`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
