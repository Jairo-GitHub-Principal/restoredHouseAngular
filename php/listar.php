<?php
// incluir a conexão
include("conexao.php");

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
    $feedback[$indice]['id']= $linha['id'];
    $feedback[$indice]['textodocard']= $linha['textodocard'];
    $feedback[$indice]['imagemcard']= $linha['imagemcard'];
    $feedback[$indice]['titulomodal']= $linha['titulomodal'];
    $feedback[$indice]['textcardmodal']= $linha['textcardmodal'];
    $feedback[$indice]['imagemcardmodal']= $linha['imagemcardmodal'];
    $feedback[$indice]['urlvideo']= $linha['urlvideo'];
    $indice++;
}
// incapsular em um json e impeimir na tela
// json_encode($cursos)
echo(json_encode($feedback));
?>