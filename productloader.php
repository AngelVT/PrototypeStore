<?php

include_once 'products.php';

$products = new Products();

if($products->productExist($_POST['key'])){
    $key = $_POST['key'];
    include_once 'product.html';
}
else{
    include_once 'shoploader.php';
}

?>