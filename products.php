<?php
require_once 'db.php';

class Products extends DB{

    public function productExist($keyProduct){
        $query = $this->connect()->prepare('SELECT * FROM products WHERE product_key = :productkey');
        $query->execute(['productkey' => $keyProduct]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function getProducts(){
        $query = $this->connect()->prepare('SELECT * FROM products WHERE stock > 0');
        $query->execute();

        foreach ($query as $productos) {

            echo "
            <div class='product_card' style='background-image: url(img/products/$productos[product_img]);'>
                <h3>$productos[product_name]</h3>
                <p><b>$productos[product_description]</b></p>
                <p><b>-Talla:</b> $productos[product_size]</p>
                <p id='precio'><b>$ $productos[price_percent]</b></p>
                <div>
                    <form action=''>
                        <button type='' class='product_card_btn'><img src='img/eye.png'></button>
                    </form>
                </div>
                <div style='width: 10px; height: 10px;'></div>
                <div>
                    <form action=''>
                        <button type='submit' class='product_card_btn'><img src='img/cart.png'></button>
                    </form>
                </div>
            </div>
            ";
        }
    }

    public function getProduct($productIndex){
        $query = $this->connect()->prepare('SELECT * FROM products WHERE product_key = :productkey');
        $query->execute(['productkey' => $productIndex]);

        foreach($query as $targetProduct){
            echo "cargando producto con key: " . " " . $targetProduct['product_key'];    
        }
        
    }
}

?>