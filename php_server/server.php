<?php

// Habilitar CORS
header("Access-Control-Allow-Origin: *"); // Permite acesso de qualquer origem
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Permite os métodos mencionados
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Permite os cabeçalhos específicos

// Tratar requisições OPTIONS (CORS pré-voo)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'auth.php';
require_once 'feedback.php';
require_once 'database.php';

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Inicia a sessão
session_start();

// Rota de registro
if ($method === 'POST' && $path === '/register') {
    $data = json_decode(file_get_contents('php://input'), true);
    echo register($data['nome'], $data['senha']);
}

// Rota de login
if ($method === 'POST' && $path === '/login') {
    $data = json_decode(file_get_contents('php://input'), true);
    $response = login($data['nome'], $data['senha']);
    
    // Se o login for bem-sucedido, armazena o ID do usuário na sessão
    if (isset(json_decode($response)->token)) {
        $_SESSION['user_id'] = json_decode($response)->token; // Armazenar um identificador, por exemplo, ID do usuário
    }
    
    echo $response;
}

// Rota de feedback
if ($method === 'POST' && $path === '/feedback') {
    $data = json_decode(file_get_contents('php://input'), true);
    echo insertFeedback($data['titulo'], $data['textodocard'], $data['imagemcard'], $data['titulomodal'], $data['textcardmodal'], $data['imagemcardmodalurl'], $data['urlvideo']);
}

// Rota para obter feedback
// if ($method === 'GET' && $path === '/server.php/feedback') {
//     echo getFeedback();
// }

if ($method === 'GET' && $path === '/server.php/feedback') {
    $feedbacks = getFeedback(); // Obtém os feedbacks como um objeto PHP
    header('Content-Type: application/json'); // Define o tipo de conteúdo como JSON
    echo json_encode($feedbacks); // Converte em JSON para enviar ao cliente
}


// Rota para deletar feedback
if ($method === 'DELETE' && preg_match('/\/feedback\/(\d+)/', $path, $matches)) {
    $id = $matches[1];
    echo deleteFeedback($id);
}

?>
