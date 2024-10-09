<?php
require_once 'database.php';

// Inserir novo feedback
function insertFeedback($titulo, $textodocard, $imagemcard, $titulomodal, $textcardmodal, $imagemcardmodalurl, $urlvideo) {
    $connection = createConnection();

    if (!$connection) {
        return json_encode(['error' => 'Falha ao conectar ao banco de dados.']);
    }

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (empty($titulo) || empty($textodocard) || empty($imagemcard) || empty($titulomodal) || empty($textcardmodal) || empty($imagemcardmodalurl) || empty($urlvideo)) {
        return json_encode(['error' => 'Todos os campos são obrigatórios.']);
    }

    $sql = "INSERT INTO feedback (titulo, textodocard, imagemcard, titulomodal, textcardmodal, imagemcardmodalurl, urlvideo) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $connection->prepare($sql);

    if ($stmt === false) {
        return json_encode(['error' => 'Erro ao preparar a consulta: ' . $connection->error]);
    }

    $stmt->bind_param("sssssss", $titulo, $textodocard, $imagemcard, $titulomodal, $textcardmodal, $imagemcardmodalurl, $urlvideo);

    if ($stmt->execute()) {
        $response = json_encode(['message' => 'Feedback inserido com sucesso!']);
    } else {
        $response = json_encode(['error' => 'Erro ao inserir feedback: ' . $stmt->error]);
    }

    $stmt->close(); // Fechando a declaração
    disconnectFromDatabase($connection);
    return $response;
}

// Obter todos os feedbacks
// function getFeedback() {
//     $connection = createConnection();

//     if (!$connection) {
//         return json_encode(['error' => 'Falha ao conectar ao banco de dados.']);
//     }

//     $sql = "SELECT * FROM feedback";
//     $result = $connection->query($sql);

//     if ($result === false) {
//         return json_encode(['error' => 'Erro ao executar a consulta: ' . $connection->error]);
//     }

//     if ($result->num_rows > 0) {
//         $feedbacks = [];
//         while ($row = $result->fetch_assoc()) {
//             $feedbacks[] = $row;
//         }
//         $response = json_encode($feedbacks);
//     } else {
//         $response = json_encode(['message' => 'Nenhum feedback encontrado.']);
//     }

//     disconnectFromDatabase($connection);
//     return $response;
// }

// function getFeedback() {
//     // Chama a função createConnection para obter a conexão com o banco de dados
//     $connection = createConnection();

//     // Verifica se a conexão foi estabelecida com sucesso
//     if ($connection->connect_error) {
//         return json_encode(['error' => 'Falha ao conectar ao banco de dados: ' . $connection->connect_error]);
//     }

//     // Prepara a consulta SQL
//     $sql = "SELECT * FROM feedback";
//     $result = $connection->query($sql);

//     // Verifica se a consulta foi executada corretamente
//     if ($result === false) {
//         disconnectFromDatabase($connection); // Desconecta em caso de erro
//         return json_encode(['error' => 'Erro ao executar a consulta: ' . $connection->error]);
//     }

//     // Verifica se há resultados
//     if ($result->num_rows > 0) {
//         $feedbacks = [];
//         while ($row = $result->fetch_assoc()) {
//             $feedbacks[] = $row; // Adiciona cada feedback ao array
//         }
//         $response = json_encode($feedbacks); // Converte o array em JSON
//     } else {
//         $response = json_encode(['message' => 'Nenhum feedback encontrado.']);
//     }

//     // Desconecta do banco de dados
//     disconnectFromDatabase($connection);
    
//     return $response; // Retorna a resposta em formato JSON
// }


require_once 'database.php';

// Obter todos os feedbacks
function getFeedback() {
    // Chama a função createConnection para obter a conexão com o banco de dados
    $connection = createConnection();

    // Verifica se a conexão foi estabelecida com sucesso
    if ($connection->connect_error) {
        return json_encode(['error' => 'Falha ao conectar ao banco de dados: ' . $connection->connect_error]);
    }

    // Prepara a consulta SQL
    $sql = "SELECT * FROM feedback";
    $result = $connection->query($sql);

    // Verifica se a consulta foi executada corretamente
    if ($result === false) {
        disconnectFromDatabase($connection); // Desconecta em caso de erro
        return json_encode(['error' => 'Erro ao executar a consulta: ' . $connection->error]);
    }

    // Verifica se há resultados
    if ($result->num_rows > 0) {
        $feedbacks = [];
        while ($row = $result->fetch_assoc()) {
            $feedback[] = $row; // Adiciona cada feedback ao array
        }
        $response = json_encode($feedback); // Converte o array em JSON
    } else {
        $response = json_encode(['message' => 'Nenhum feedback encontrado.']);
    }

    // Desconecta do banco de dados
    disconnectFromDatabase($connection);
    
    return $response; // Retorna a resposta em formato JSON
}


// Deletar feedback
function deleteFeedback($id) {
    $connection = createConnection();

    if (!$connection) {
        return json_encode(['error' => 'Falha ao conectar ao banco de dados.']);
    }

    $sql = "DELETE FROM feedback WHERE id = ?";
    $stmt = $connection->prepare($sql);

    if ($stmt === false) {
        return json_encode(['error' => 'Erro ao preparar a consulta: ' . $connection->error]);
    }

    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        $response = json_encode(['message' => 'Feedback excluído com sucesso!']);
    } else {
        $response = json_encode(['error' => 'Erro ao excluir feedback: ' . $stmt->error]);
    }

    $stmt->close(); // Fechando a declaração
    disconnectFromDatabase($connection);
    return $response;
}
?>