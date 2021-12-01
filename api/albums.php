<?php
require_once __DIR__ . "/../data/albums.php";

header("Content-Type: application/json");

echo json_encode([
  "albums" => $albums
]);
?>