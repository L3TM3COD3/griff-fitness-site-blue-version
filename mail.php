<?php

    $name = $_POST['name'];
    $tel = $_POST['tel'];

    $mail_message = '
    <html>
        <head>
            <title>Новая заявка!</title>
        </head>
        <body>
            <h2>Информация:</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Номер телефона: ' . $tel . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Система оповещения <grif-zal.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('nnv2698@gmail.com', 'Новый заявка!', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Спасибо, мы свяжемся с Вами в самое ближайшее время!";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);


?>