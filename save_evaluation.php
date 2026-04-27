<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if ($data !== null) {
        file_put_contents('evaluations.json', json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(['status' => 'success']);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
    }
} else {
    // GET request - return current data
    if (file_exists('evaluations.json')) {
        echo file_get_contents('evaluations.json');
    } else {
        echo '[]';
    }
}
?>