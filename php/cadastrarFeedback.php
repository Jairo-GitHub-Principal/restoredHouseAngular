<?php
// incluir a conexão
include("connection.php");
$obterDados = file_get_contents("php://input");  // ?

$extrair = json_decode($obterDados);
// separar dados
// obs.: o nome "cursos" nas duas linhas abaixo e referencia ao nome cursos dado ao json no meotdo de listagem, la no json_encode("cursos"=>$variavel)
//$nomeCurso = $extrair->cursos->nomeCurso;

$titulo = $extrair -> titulo;
$imagemcard = $extrair -> imagemcard;
$titulomodal = $extrair -> titulomodal;
$textcardmodal = $extrair -> textcardmodal;
$imagemcardmodalurl = $extrair -> imagemcardmodalurl;
$urlvideo = $extrair -> urlvideo;


//query sql
$sql = "INSERT INTO feedback (titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo) VALUES ($titulo,$textodocard, $imagemcard, $titulomodal, $textcardmodal, $imagemcardmodalurl, $urlvideo)";
//Executar a conexão e a pesquiso do sql
$executar = mysqli_query($conexao,$sql); // na video aula não tem a variavel $executar
// vetor para exportar os daos cadastrado
$feedback=[
    'titulo'->$titulo, 
    'textodocard'->$textodocard, 
    'imagemcard'->$imagemcard, 
    'titulomodal'->$titulomodal, 
    'textcardmodal'->$textcardmodal, 
    'imagemcardmodalurl'->$imagemcardmodalurl, 
    'urlvideo'->$urlvideo
    
];
// incapsular em um json
echo(json_encode($feedback));
?>