<?php
// Incluir a conexão com o banco de dados
include("connection.php"); // Usa a variável $conexao para conexão ao banco de dados

// Verificar se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber os dados via POST
    $obterDados = file_get_contents("php://input");
    $dados = json_decode($obterDados);

    // Validar se os campos estão preenchidos
    if (empty($dados->imagemcard) || empty($dados->imagemcardmodalurl) ) {
        http_response_code(400);
        echo json_encode(['message' => 'a url da img do card e do modal são obrigatorias']);
        exit();
    }

    // Separar dados
    $titulo = $dados->titulo;
    $textodocard = $dados->textodocard;
    $imagemcard = $dados->imagemcard; 
    $titulomodal = $dados->titulomodal;
    $textcardmodal = $dados->textcardmodal;
    $imagemcardmodalurl = $dados->imagemcardmodalurl;
    $urlvideo = $dados->urlvideo;

    // Query SQL para inserir feedback
    $sqlInsert = "INSERT INTO feedback (titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($conexao, $sqlInsert); // Usando a conexão $conexao
    mysqli_stmt_bind_param($stmt, "sssssss", $titulo, $textodocard, $imagemcard, $titulomodal, $textcardmodal, $imagemcardmodalurl, $urlvideo); // Definindo os parâmetros
    $executar = mysqli_stmt_execute($stmt); // Executando a consulta

    // Verificar se a inserção foi bem-sucedida
    if ($executar) {
        $feedback = [
            'titulo' => $titulo,
            'textodocard' => $textodocard,
            'imagemcard' => $imagemcard,
            'titulomodal' => $titulomodal,
            'textcardmodal' => $textcardmodal,
            'imagemcardmodalurl' => $imagemcardmodalurl,
            'urlvideo' => $urlvideo
        ];

        // Encapsular em um JSON e retornar
        echo json_encode($feedback);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao inserir feedback.']);
    }

    // Fechar a conexão com o banco de dados
    mysqli_close($conexao);
}
?>
