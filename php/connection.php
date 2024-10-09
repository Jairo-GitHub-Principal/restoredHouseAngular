<?php
// variaveis
$url = "localhost"; // endereço do mysql poderia ser 127.0.0.1
$usuario = "root"; // usuario de acesso ao mysql
$senha = ""; // senha de acessa ao mysql
$base = "restoredhome"; // nome do DB

// conexão

$conexao = mysqli_connect($url,$usuario,$senha,$base);//ok

// configurar  os caractere especiais , fazer com que os caracteres usado no frontend
// seja os mesmos usados no backend
mysqli_set_charset($conexao,"utf8"); // ok
?>