<html>
<body>
   <head>
    <meta name="google-site-verification" content="i9q6OFNVDARRi7wopk3Rmc7Blzem-bjRbRrUDLB-BGs" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="image/gif" href="img/favicon.gif">
    <link rel="shortcut icon" href="img/favicon.gif" />
    <title>Inspire Innovation Business Consultants</title>

    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400" rel="stylesheet">
    <!--Desktop Styles-->
    
    <!--Mobile Styles-->
    <link href="styles/mobileStyle.css" type="text/css" rel="stylesheet">
    <!--Grid.styles-->
    <link href ="styles/vendor/grid.css" type = "text/css" rel ="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->

    <script src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous"></script>
    <script src="scripts/services.js"></script>
    <!-- <script src="scripts/googleMap.scripts"></script> -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXVnXC6PQx3DRy2eWXE4fknCjZcfUtGjI&callback=myMap"></script>


    <link href="../styles/contact.css" type="text/css" rel="stylesheet">
    <link href="../styles/style.css" type="text/css" rel="stylesheet">
    </head>

    <body style="font-size:200%">

    <header>
    <i id ="menu" class="fa fa-navicon" ></i>
    <a id="logoContainer" href="index.php">
        <img id="logo" src="../img/Logo.png" alt="Logo">
    </a>
    <div id="Side_menu">
        <div id="dropdown_content">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Team</a>
            <a href="">ResourceS</a>
            <a href="">Contact Us</a>
        </div>
    </div>
</header>
<?php

/* $servername = "localhost";
$username = "admin";
$password = "Inspire4949";
$dbname = "COMMUNICATIONS";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = "'".$_POST["fullname"]."'";
$email = "'".$_POST["email"]."'";
$company = "'".$_POST["company"]."'";
$subject = "'".$_POST["subject"]."'";
$message = "'".$_POST["message"]."'";

$sql = "INSERT INTO messages (fullname, email, company, subject, message)
VALUES($name,$email,$company,$subject,$message)";

echo "<p>name ".$name."</p>";
echo "<p>email ".$email."</p>";
echo "<p>company ".$company."</p>";
echo "<p>subject ".$subject."</p>";
echo "<p>message ".$message."</p>";
if (mysqli_query($conn, $sql)) {
    echo  'Hi '.$_POST["fullname"].' your query has been received. Thanks for reaching out.</br>';
    echo 'We will review your message and contact you at'. $_POST["email"].' soon.</br>';;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
} */

echo  'Hi '.$_POST["fullname"].' your query has been received. Thanks for reaching out.</br>';
echo 'We will review your message and contact you at'. $_POST["email"].' soon.</br>';

$email = $_POST["email"];
$to = "info@inspireinnovation.co.ls";
$subject = "New Form Submission";
$headers = "From: $email\n";
$message = $_POST["message"];

"Email Address: $email";
$user = "$email";
$usersubject = "Thank you";
$userheaders = "From: info@inspireinnovation.com\n";
$usermessage = "Thank you for your query, we will review it and get back to you soon";
mail($to, $subject, $message, $headers);
mail($user, $usersubject, $usermessage, $userheader);
?>
</body>
<html>
