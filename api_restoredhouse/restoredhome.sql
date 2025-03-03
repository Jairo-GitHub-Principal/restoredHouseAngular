-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Fev-2025 às 03:03
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `restoredhome`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedback`
--

CREATE TABLE `feedback` (
  `id` int(6) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `textodocard` varchar(255) NOT NULL,
  `imagemcard` text NOT NULL,
  `titulomodal` varchar(255) NOT NULL,
  `textcardmodal` text DEFAULT NULL,
  `imagemcardmodalurl` text DEFAULT NULL,
  `urlvideo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `feedback`
--

INSERT INTO `feedback` (`id`, `titulo`, `textodocard`, `imagemcard`, `titulomodal`, `textcardmodal`, `imagemcardmodalurl`, `urlvideo`) VALUES
(17, 'aafsdfasdfasafsfd', 'asdfasdfasdfa\nasdfasdfasdfa\nasdfasdf', 'https://media.istockphoto.com/id/614055522/pt/foto/blue-and-yellow-macaw-in-flight.jpg?s=2048x2048&w=is&k=20&c=gxf1pPDBG7996Rf9LQoWCxPdoJrwDlJrkmjahDRKv3Y=', 'asdfasdfasdf', 'asdfasdasdfasdfa\nasdfasdfafasdf\nasdfasdfasdfasdf', 'https://media.istockphoto.com/id/614055522/pt/foto/blue-and-yellow-macaw-in-flight.jpg?s=2048x2048&w=is&k=20&c=gxf1pPDBG7996Rf9LQoWCxPdoJrwDlJrkmjahDRKv3Y=', 'https://www.youtube.com/embed/XmU3WKDQPfk?si=arTAe-OzUV348txh'),
(18, 'asdfasdf', 'asdfasdf', 'asdfasdfa', 'asdfasdf', 'asdfasda', 'sdfas', 'asdfasdf');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `senha` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `nome`, `senha`) VALUES
(2, 'jairo', '$2a$10$Gzda4SQUpd1s9Vu5I3iVwec2Z9R.MwFxCKXs4ssSmM3pnhIMfJnBO'),
(3, 'admim', '$2a$10$ZcCdrewjY9HlAstkIiEmPedmJA4ocE45sCdrrHiWknRvrMVMZEeUO');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
