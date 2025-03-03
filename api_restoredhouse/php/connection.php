<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


// variaveis pra conectar no servidor local ambiente de development
// $host = "localhost"; // endereço do mysql poderia ser 127.0.0.1
// $user = "root"; // usuario de acesso ao mysql
// $senha = ""; // senha de acessa ao mysql
// $database = "restoredhome"; // nome do DB

// variaveis de conexão com DB restoredhdb hospedado no servidor web da localweb
// $url='restoredhome.mysql.dbaas.com.br';
// $usuario = 'restoredhome';
// $senha= 'Loca102030@#';
// $base =  'restoredhome';

// variaveis de conexão com DB restoredhdb hospedado no servidor web da localweb ambiente de produção
$host='restoredhdb.mysql.dbaas.com.br';
$user = 'restoredhdb';
$senha= 'Olegna12@';
$database =  'restoredhdb';

// conexão

$conexao = mysqli_connect($host,$user,$senha,$database);//ok

// Verificação da conexão
if (mysqli_connect_errno()) {
    echo "Falha na conexão com o MySQL: " . mysqli_connect_error();
    exit();
}

// configurar  os caractere especiais , fazer com que os caracteres usado no frontend
// seja os mesmos usados no backend
mysqli_set_charset($conexao,"utf8"); // ok

?>


