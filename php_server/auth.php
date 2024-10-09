<?php
require 'database.php';

// Função para registrar novo usuário
function register($nome, $senha) {
    $connection = createConnection();

    // Validar dados
    if (!$nome || !$senha) {
        disconnectFromDatabase($connection); // Certificar que a conexão é fechada
        return json_encode(['message' => 'Todos os campos são obrigatórios.']);
    }

    $hashedPassword = password_hash($senha, PASSWORD_BCRYPT);

    $sqlInsert = "INSERT INTO user (nome, senha) VALUES (?, ?)";
    $stmt = $connection->prepare($sqlInsert);
    $stmt->bind_param("ss", $nome, $hashedPassword);

    if ($stmt->execute()) {
        $response = json_encode(['message' => 'Usuário registrado com sucesso.']);
    } else {
        $response = json_encode(['message' => 'Erro ao registrar usuário.']);
    }

    disconnectFromDatabase($connection);
    return $response;
}

// Função de login de usuário
function login($nome, $senha) {
    $connection = createConnection();

    // Validar dados
    if (!$nome || !$senha) {
        disconnectFromDatabase($connection); // Certificar que a conexão é fechada
        return json_encode(['message' => 'Todos os campos são obrigatórios.']);
    }

    $sqlSelect = "SELECT * FROM user WHERE nome = ?";
    $stmt = $connection->prepare($sqlSelect);
    $stmt->bind_param("s", $nome);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        disconnectFromDatabase($connection); // Certificar que a conexão é fechada
        return json_encode(['message' => 'Usuário não encontrado.']);
    }

    $user = $result->fetch_assoc();

    if (password_verify($senha, $user['senha'])) {
        // Aqui você pode utilizar sessões ou outra forma de autenticação
        session_start(); // Inicia a sessão
        $_SESSION['user_id'] = $user['id']; // Armazena o ID do usuário na sessão
        $_SESSION['user_nome'] = $user['nome']; // Armazena o nome do usuário na sessão
        
        disconnectFromDatabase($connection); // Fechando a conexão antes do return
        return json_encode(['message' => 'Login bem-sucedido.']);
    } else {
        disconnectFromDatabase($connection); // Certificar que a conexão é fechada
        return json_encode(['message' => 'Senha incorreta.']);
    }
}
?>
