<?php

include_once 'user.php';
include_once 'user_session.php';

$userSession = new UserSession();
$user = new User();

if(isset($_SESSION['user'])){
    $user->setUser($userSession->getCurrentUser());
    include_once 'profile.html';
}
else if(isset($_POST['username']) && isset($_POST['pass'])){
    $userForm = $_POST['username'];
    $passForm = $_POST['pass'];

    if($user->userExists($userForm, $passForm)){
        $userSession->setCurrentUser($userForm);
        $user->setUser($userForm);
        include_once 'profile.html';
    }
    else{
        $loginError = "Algo anda mal! Revisa tus datos";
        include_once 'login.html';
    }

}
else{
    include_once 'login.html';
}

?>
