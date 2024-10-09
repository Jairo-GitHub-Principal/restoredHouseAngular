<?php
// database.php

function createConnection()
{
    // $host = 'restoredhome.mysql.dbaas.com.br';
    // $user = 'restoredhome';
    // $password = 'Loca102030@#';
    // $database = 'restoredhome';

      $host = 'localhost';
      $user = 'root';
      $password ='';
      $database = 'restoredhome';


    $connection = new mysqli($host, $user, $password, $database);

    // Verifica se houve erro na conexão
    if ($connection->connect_error) {
        // Em vez de usar die(), lançar uma exceção pode ser melhor para tratamento de erros
        throw new Exception('Erro de conexão: ' . $connection->connect_error);
    }

    // Mensagem de conexão bem-sucedida (pode ser removida em produção)
    echo 'Conexão estabelecida com sucesso.'; 
    return $connection;
}

function disconnectFromDatabase($connection)
{
    if ($connection) {
        $connection->close(); // Fecha a conexão
         echo 'Conexão com o banco de dados encerrada.'; // Remover ou comentar em produção
    }
}

// Outras funções de manipulação do banco de dados podem ser adicionadas aqui

// Não esqueça de fechar o PHP
?>