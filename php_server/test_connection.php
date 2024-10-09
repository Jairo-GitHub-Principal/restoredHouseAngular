<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'database.php';

$connection = createConnection();

if ($connection) {
    // echo 'Conexão estabelecida com sucesso.';
} else {
    echo 'Falha ao estabelecer conexão com o banco de dados.';
}

disconnectFromDatabase($connection);
