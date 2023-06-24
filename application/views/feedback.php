
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Success</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>


<?php
   if($_SERVER['REQUEST_METHOD']=='POST'){
extract($_POST);

$msg2 = "<p><h5>Name : </h5> " . $name . "</p>";
$msg2 .= "<h5>Phone number : </h5><p>" . $number . "</p>";
$msg2 .= "<h5>Feedback : </h5><p>" . $message . "</p>";
// var_dump($msg2);
// die();
$to2 = "info@amazesouth.com";
$subject2 = "Feedback";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <No_reply-amazesouth.com/>' . "\r\n";

// sending mail to admin for contact us
$ismailSent = mail($to2, $subject2, $msg2, $headers);
if($ismailSent){
    echo '<script>
    alert("Message sent successfully ! Thank you");
    window.location.href = "/home";
    </script>';
}
// $referer = $_SERVER['HTTP_REFERER'];
// header("Location: $referer");
}
    ?>


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>