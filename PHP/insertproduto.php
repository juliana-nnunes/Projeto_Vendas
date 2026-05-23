<?php 
//incluir a conexão do banco de dados
include 'conexao.php';

//guardar a instrução do mysql na variavel
$insert = "INSERT INTO tb_produto VALUES (null,'camera','1000')";

//função query irá executar a instrução sql dentro do banco
$resultado = $conexao->query($insert);


if ($resultado == true) {
    echo "<script> alert('produto cadastrado com sucesso') </script>";
}