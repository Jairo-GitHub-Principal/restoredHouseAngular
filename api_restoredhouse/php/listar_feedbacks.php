<?php

header("Access-Control-Allow-Origin: https://www.restoredhouse.com.br");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Tratar requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
// incluir a conexão
include("connection.php");

//query sql
$sql = "SELECT * FROM feedback";

//Executar a conexão e a pesquiso do sql
$executar = mysqli_query($conexao,$sql);

// vetor
$feedback=[];

// indice
$indice=0;

// laço de repetição para percorrer a tabela e listar os dados
while($linha = mysqli_fetch_assoc($executar)){
    $feedback[$indice] = [
        'id' => $linha['id'],
        'titulo'=>$linha['titulo'],
        'textodocard' => $linha['textodocard'],
        'imagemcard' => $linha['imagemcard'],
        'titulomodal' => $linha['titulomodal'],
        'textcardmodal' => $linha['textcardmodal'],
        'imagemcardmodalurl' => $linha['imagemcardmodalurl'],
        'urlvideo' => $linha['urlvideo']
    ];
    $indice++;
}
// incapsular em um json e impeimir na tela
// json_encode($cursos)
echo(json_encode($feedback));

mysqli_close($conexao);
?>