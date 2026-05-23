<?php 
//incluir a conexão do banco de dados
include 'conexao.php';

//guardar a instrução do mysql na variavel
$insert = "INSERT INTO tb_cliente VALUES (null,'pixelmemories','11958545875','Lucas')";

//função query irá executar a instrução sql dentro do banco
$resultado = $conexao->query($insert);


if ($resultado == true) {
    echo "<script> alert('Cliente cadastrado com sucesso') </script>";
}





?>