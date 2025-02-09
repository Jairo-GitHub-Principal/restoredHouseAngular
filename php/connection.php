<?php
// variaveis
$url = "localhost"; // endereço do mysql poderia ser 127.0.0.1
$usuario = "root"; // usuario de acesso ao mysql
$senha = ""; // senha de acessa ao mysql
$base = "restoredhome"; // nome do DB

// conexão

$conexao = mysqli_connect($url,$usuario,$senha,$base);//ok

// Se a conexão falhar, retorne um JSON de erro e encerre o script
if (!$conexao) {
    header('Content-Type: application/json');
    echo json_encode(["error" => "Erro ao conectar ao banco de dados: " . mysqli_connect_error()]);
    exit;
}

// configurar  os caractere especiais , fazer com que os caracteres usado no frontend
// seja os mesmos usados no backend
mysqli_set_charset($conexao,"utf8"); // ok
?>