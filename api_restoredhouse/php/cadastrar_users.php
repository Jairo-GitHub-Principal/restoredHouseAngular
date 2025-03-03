<?php
// Incluir a conexão com o banco de dados
include("connection.php");

// Verificar se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obter o corpo da requisição como texto simples
    $inputData = file_get_contents("php://input");
    $inputLines = explode("\n", $inputData); // Separar as linhas

    // Extrair nome e senha
    $nome = isset($inputLines[0]) ? trim($inputLines[0]) : null;
    $senha = isset($inputLines[1]) ? trim($inputLines[1]) : null;

    // Verificar se os campos são obrigatórios
    if (empty($nome) || empty($senha)) {
        http_response_code(400);
        echo json_encode(['message' => 'Todos os campos são obrigatórios.']);
        exit();
    }

    // Hash da senha
    $hashedPassword = password_hash($senha, PASSWORD_BCRYPT);

    // Preparar a query SQL para inserir o usuário
    $sqlInsert = 'INSERT INTO `user` (nome, senha) VALUES (?, ?)';
    $stmt = mysqli_prepare($conexao, $sqlInsert);

    // Verificar se a query foi preparada corretamente
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao preparar a query de registro.']);
        exit();
    }

    // Vincular os parâmetros e executar a query
    mysqli_stmt_bind_param($stmt, "ss", $nome, $hashedPassword);
    $executar = mysqli_stmt_execute($stmt);

    // Verificar se o registro foi bem-sucedido
    if ($executar) {
        http_response_code(201);
        echo json_encode(['message' => 'Usuário registrado com sucesso.']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao registrar usuário.']);
    }

    // Fechar a declaração e a conexão com o banco de dados
    mysqli_stmt_close($stmt);
    mysqli_close($conexao);
} else {
    // Retornar erro se o método não for POST
    http_response_code(405);
    echo json_encode(['message' => 'Método não permitido.']);
}
?>
