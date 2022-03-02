<?php
include 'db.php';

class User extends DB{
    private $name;
    private $lastname;
    private $username;


    public function userExists($user, $pass){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE username = :user AND passw = :pass');
        $query->execute(['user' => $user, 'pass' => $pass]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function setUser($user){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE username = :user');
        $query->execute(['user' => $user]);
        
        foreach ($query as $currentUser) {
            $this->name = $currentUser['name'];
            $this->lastname = $currentUser['lastname'];
            $this->username = $currentUser['username'];
        }
    }

    public function userRegExists($user){
        $query = $this->connect()->prepare('SELECT * FROM users WHERE username = :user');
        $query->execute(['user' => $user]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function regUser($username, $email, $pass, $name, $lastname){
        $query = $this->connect()->prepare('INSERT INTO users (`user_id`, `username`, `email`, `passw`, `name`, `lastname`) VALUES (NULL, :username, :email, :pass, :nom, :lastname);');
        $query->execute(['username' => $username, 'email' => $email, 'pass' => $pass, 'nom' => $name, 'lastname'  => $lastname]);
    }

    public function getName(){
        return $this->name;
    }

    public function getLastName(){
        return $this->lastname;
    }
}

?>