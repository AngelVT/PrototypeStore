<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="styles.css" type="text/css">
    <link rel="shortcut icon" href="img/Tab_Icon.png">
    <title>SeductionMX &#8747; Tienda</title>
</head>

<body>
    <nav class="navbar">
        <div class="navbar_search">
            <a href="#"><img src="img/SeductionMX_Logo.png" class="navbar_brand"></a>

            <div class="logreg">
                <a href="login.html"><img src="img/user.png" style="height: 50px;"></a>
            </div>
            <div class="navbar_cbtn" id="menu_mobile">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="navbar_searchbar_container" id="navsearch">
                <form>
                    <input class="navbar_searchbar" type="search" placeholder="Search" aria-label="Search">
                    <button class="navbar_button" type="submit">Search</button>
                </form>
            </div>
        </div>
        <div class="navbar_nav">
            <ul class="navbar_menu" id="navelements">
                <li class="navbar_item">
                    <a href="index.html" class="navbar_link">Inico</a>
                </li>
                <li class="navbar_item" class="navbar_link">
                    <a href="#" class="navbar_link">Lo nuevo</a>
                </li>
                <li class="navbar_item">
                    <a href="#" class="navbar_link">Lenceria</a>
                </li>
                <li class="navbar_item">
                    <a href="#" class="navbar_link">A la moda</a>
                </li>
                <li class="navbar_item">
                    <a href="#" class="navbar_link">Tallas grandes</a>
                </li>
                <li class="navbar_item">
                    <a href="#" class="navbar_link">Tallas pequeñas</a>
                </li>
            </ul>
        </div>
    </nav>
    <section class="content">
        <!-- <h1>Tienda</h1> -->
        <div class="product_container">

            <?PHP
                require_once 'products.php';

                $obj = new Products();

                $obj->getProducts();
            ?>

            <!--<div class="product_card">
                <h3>Nombre del producto</h3>
                <p><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b></p>
                <p>-Talla<br>-Color<br>-Dieño</p>
                <p id="precio"><b>$1000.00</b></p>
                <div class="btn_container">
                    <button class="product_card_btn" onclick="redirect('product.html')"><img src="img/eye.png"></button>
                    <button type="submit" class="product_card_btn"><img src="img/cart.png"></button>
                </div>
            </div>-->

        </div>

        <div class="shopping_cart">
            <a href="cart.html"><img src="img/cart.svg"></a>
            <a class="indicator">1</a>
        </div>

    </section>

    <footer class="foot">
        <div class="foot_section">
            <h4>Contactanos</h4>
            <div class="foot_subsection">
                <a href="#"><img src="img/WA.png"></a>
                <p><a href="#">55 3100 2642</a></p>
            </div>
            <div class="foot_subsection">
                <a href="#"><img src="img/email.png"></a>
                <p><a href="#">email@seduction.mx</a></p>
            </div>
        </div>
        <div class="foot_section">
            <h4>Redes Sociales</h4>
            <div class="foot_subsection">
                <a href="#"><img src="img/IG.png"></a>
                <p><a href="#">@seductionmx</a></p>
            </div>
            <div class="foot_subsection">
                <a href="#"><img src="img/FB.png"></a>
                <p><a href="#">@seductionmx</a></p>
            </div>
            <div class="foot_subsection">
                <a href="#"><img src="img/TW.png"></a>
                <p><a href="#">@seductionmx</a></p>
            </div>
        </div>
    </footer>

    <script src="js/navbar_btn.js"></script>
    <script src="js/nav_manager.js"></script>
</body>

</html>