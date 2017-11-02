<?php
header("Access-Control-Allow-Origin: *");
$json_string = file_get_contents('php://input'); ##今回のキモ
echo $json_string;
$obj = json_decode($json_string);
var_dump($obj);
?>