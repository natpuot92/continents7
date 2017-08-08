<?
if((isset($_POST['first_name'])&&$_POST['first_name']!="")&&(isset($_POST['last_name'])&&$_POST['last_name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['country'])&&$_POST['country']!="")){
        $to = 'valeraerohin97@mail.ru';
        $subject = 'New subscription';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>First Name: '.$_POST['first_name'].'</p>
                        <p>Last Name: '.$_POST['last_name'].'</p>
                        <p>Country: '.$_POST['country'].'</p>
                        <p>Phone: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Interested in: '.$_POST['interested'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: rapp@example.com\r\n";
        mail($to, $subject, $message, $headers);
}
?>