<?php
// Incluir a conexão
include("connection.php");

$obterDados = file_get_contents("php://input");  // Receber os dados via POST
$extrair = json_decode($obterDados);

// Separar dados do JSON
$nome = $extrair->nome;
$senha = $extrair->senha;
$action = $extrair->action;

echo "Dados de login recebidos:\n";
echo "Nome: $nome\n";
echo "Senha: $senha\n";
// Verificar se os campos estão preenchidos
if (!$nome || !$senha) {
    echo json_encode(['message' => 'Todos os campos são obrigatórios.']);
    exit;
}

// Verificar se é uma tentativa de registro ou login
$acao = $extrair->acao;

if ($acao === 'register') {
    
    // criar o Hash da senha
    $hashedPassword = password_hash($senha, PASSWORD_BCRYPT);

    // SQL para inserir novo usuário
    $sql = "INSERT INTO user (nome, senha) VALUES ('$nome', '$hashedPassword')";
    $executar = mysqli_query($conexao, $sql);

    // Verificar se a execução foi bem-sucedida
    if ($executar) {
        echo json_encode(['message' => 'Usuário registrado com sucesso.']);
    } else {
        echo json_encode(['message' => 'Erro ao registrar usuário.']);
    }
} elseif ($acao === 'login') {
    // SQL para buscar o usuário
    $sql = "SELECT * FROM user WHERE nome = '$nome'";
    $result = mysqli_query($conexao, $sql);
    
    // Verificar se o usuário foi encontrado
    if (mysqli_num_rows($result) === 0) {
        echo json_encode(['message' => 'Usuário não encontrado.']);
        exit;
    }

    $user = mysqli_fetch_assoc($result);

    // Verificar se a senha é válida
    if (password_verify($senha, $user['senha'])) {
        session_start(); // Iniciar sessão
        $_SESSION['user_id'] = $user['id']; // Armazenar ID do usuário
        $_SESSION['user_nome'] = $user['nome']; // Armazenar nome do usuário

        echo json_encode(['message' => 'Login bem-sucedido.']);
    } else {
        echo json_encode(['message' => 'Senha incorreta.']);
    }
} else {
    echo json_encode(['message' => 'Ação inválida.']);
}
?>
