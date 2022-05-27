<?php
$_POST = json_decode(file_get_contents("php://input"), true);     //! декодуєм JSON для роботи з ним на PHP
echo var_dump($_POST);   //! бере дані що прийшли з клієнта, перетворює в строку і показує назад на клієнті