<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$street=$_POST['street'];
$house=$_POST['house'];
$block=$_POST['block'];
$room=$_POST['room'];
$et=$_POST['et'];
$comment=$_POST['comment'];
$review=$_POST['review'];
$call=$_POST['review'];

$result = [status=>"true", text=>""];
if($name=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Имя!";
}
if($phone=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Телефон!";
}
if($street=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Улица!";
}
if($house=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Дом!";
}
if($block=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Корпус!";
}
if($room=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Квартира!";
}
if($et=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Этаж!";
}
if($comment=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Комментарий!";
}
if($review=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Способа оплаты!";
}
if($call=="") {
    $result["status"]="folse";
    $result["text"]="Заполните поле Звонок!";
}

if($result["status"]=="true") {
$text="Имя:".$name."\nТелефон".$phone."\nУлица".$street."\nДом".$house."\nКорпус".$block."\nКвартира".$et."\nКомментарии".$comment."\nОплата".$review."\nЗвонок".$call;
mail (to: "zarina.mambetova84@gmail.com", subject: "Form", $text);
}
echo json_encode ($result);
?>
