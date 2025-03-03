<?php
// Incluir a conexão com o banco de dados
include("connection.php"); // Usa a variável $conexao para conexão ao banco de dados
require 'vendor/autoload.php'; // Para carregar a biblioteca JWT
use Firebase\JWT\JWT; // Biblioteca JWT
use Firebase\JWT\Key;

$SECRET_KEY = '1234'; // Chave secreta para gerar o token JWT

// Verificar se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber os dados via POST
    $obterDados = file_get_contents("php://input");
    $dados = json_decode($obterDados);

    // Validar se os campos estão preenchidos
    if (empty($dados->nome) || empty($dados->senha)) {
        http_response_code(400);
        echo json_encode(['message' => 'Todos os campos são obrigatórios.']);
        exit();
    }

    $nome = $dados->nome;
    $senha = $dados->senha;

    // Query SQL para buscar o usuário pelo nome
    $sqlSelect = "SELECT * FROM user WHERE nome = ?";
    $stmt = mysqli_prepare($conexao, $sqlSelect); // Usando a conexão $conexao
    mysqli_stmt_bind_param($stmt, "s", $nome); // Definindo o parâmetro
    mysqli_stmt_execute($stmt); // Executando a consulta
    $result = mysqli_stmt_get_result($stmt); // Obtendo os resultados

    // Verificar se o usuário foi encontrado
    if (mysqli_num_rows($result) === 0) {
        // Usuário não encontrado
        http_response_code(400);
        echo json_encode(['message' => 'Usuário não encontrado.']);
        exit();
    }

    // Pegar os dados do usuário
    $user = mysqli_fetch_assoc($result);

    // Verificar se a senha está correta
    if (!password_verify($senha, $user['senha'])) {
        // Senha incorreta
        http_response_code(400);
        echo json_encode(['message' => 'Senha incorreta.']);
        exit();
    }

    // Gerar o token JWT
    $payload = [
        'id' => $user['id'],
        'nome' => $user['nome'],
        'exp' => time() + (60 * 60) // Token expira em 1 hora
    ];

    $jwt = JWT::encode($payload, $SECRET_KEY, 'HS256');

    // Enviar o token como resposta
    echo json_encode(['token' => $jwt]);

    // Fechar a conexão com o banco de dados
    mysqli_close($conexao);
}
