<?php

// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
echo 'efhsjkdfnksd';
// Переменные, которые отправляет пользователь
$street = $_POST['street'];
$money = $_POST['money'];
$star = $_POST['star'];
$comment = $_POST['comment'];

// Формирование самого письма
$title = "Отзыв клиента";
$body = "
<h2>Новое письмо</h2>
<b>Улица:</b> $street<br>
<b>Цена за стрижку:</b> $money<br>
<b>Оценка:</b> $star <br><br>
<b>Комментарий от клиента:</b><br>$comment
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'alpencomment'; // Логин на почте
    $mail->Password   = '2W92U79ha5zy1cwQK6Tv'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('alpencomment@mail.ru', 'Экспресс парикмахерская'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('alex-volik-17@yandex.ru');  
    // $mail->addAddress('alpencomment@mail.ru'); // Ещё один, если нужен

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
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

