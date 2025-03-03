<?php
// Incluir a conexão com o banco de dados
include("connection.php");

// Verificar se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Método não permitido.']);
    exit();
}

// Obter o corpo da requisição diretamente (esperando apenas o ID no corpo)
$inputData = file_get_contents("php://input");

// Verificar se o dado está vazio ou inválido
if (empty($inputData) || !is_numeric($inputData)) {
    http_response_code(400);
    echo json_encode(['message' => 'ID do feedback é obrigatório e deve ser numérico.']);
    exit();
}

// Converter o dado para inteiro
$feedbackId = intval($inputData);

// Preparar a query SQL para deletar o feedback com o ID correspondente
$sql = "DELETE FROM feedback WHERE id = ?";
$stmt = mysqli_prepare($conexao, $sql);

// Verificar se a query foi preparada corretamente
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['message' => 'Erro ao preparar a query de exclusão.']);
    exit();
}

// Definir o parâmetro do ID no SQL e executar a query
mysqli_stmt_bind_param($stmt, "i", $feedbackId);
mysqli_stmt_execute($stmt);

// Verificar se a exclusão foi bem-sucedida
if (mysqli_stmt_affected_rows($stmt) > 0) {
    http_response_code(200);
    echo json_encode(['message' => 'Feedback excluído com sucesso!']);
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Feedback não encontrado ou já excluído.']);
}

// Fechar a conexão com o banco de dados
mysqli_stmt_close($stmt);
mysqli_close($conexao);
?>
