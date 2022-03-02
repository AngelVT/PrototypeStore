<?php

include_once 'user.php';
include_once 'user_session.php';

$userSession = new UserSession();
$user = new User();

if(isset($_SESSION['user'])){
    $user->setUser($userSession->getCurrentUser());
    include_once 'profile.html';
}
else if(isset($_POST['names']) && isset($_POST['lastnames']) && isset($_POST['usernom']) && isset($_POST['emails']) && isset($_POST['userpas'])){
    $regError = "Dentro del IF";
    $nameReg = $_POST['names'];
    $lnameReg = $_POST['lastnames'];
    $userReg = $_POST['usernom'];
    $emailReg = $_POST['emails'];
    $passReg = $_POST['userpas'];

    if($user->userRegExists($userReg)){
        $regError = "Nombre de usuario en uso";
        include_once 'register.html';
    }
    else if($user->userRegExists($userReg) == false){
        $user->regUser($userReg, $emailReg, $passReg, $nameReg, $lnameReg);
        $regError = "Registro Exitoso en la base de datos";
        $userSession->setCurrentUser($userReg);
        $user->setUser($userReg);
        include_once 'profile.html';
    }
    else{
        $regErrorV = "Algo anda mal! Revisa tus datos";
        include_once 'register.html';
    }

}
else{
    $regError = "Failed: " . $_POST['names'] . $_POST['lastnames'] . $_POST['usernom'] . $_POST['emails'] . $_POST['userpas'];
    include_once 'register.html';
}

?>