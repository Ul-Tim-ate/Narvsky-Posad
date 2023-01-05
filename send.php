<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Файлы phpmailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$hotel = $_POST['hotel'];

// Формирование самого письма
$title = "Новое обращение Нарвский Посад";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Номер и желаемые дни:</b> $hotel<br>
";

// Настройки PHPMailer
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'maks.zotov.1998@inbox.ru'; // Логин на почте
    $mail->Password   = 'dg8H2X5dGJE8ej3S2hic'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('maks.zotov.1998@inbox.ru', 'Максим Зотов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('timohator1@mail.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Content-type: application/json');
echo json_encode($result);