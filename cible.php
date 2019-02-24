<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <title>codes d'accés NASA</title>
  </head>
  <body>

    <?php 
    if ($_POST['prenom']){
     echo htmlspecialchars($_POST['prenom']);
    }else{
    echo '<p>prénom incorrect</p>';
    }?>
    <br/>
    <?php 
    if ($_POST['mail']){
    echo htmlspecialchars($_POST['mail']);
    }else{
    echo '<p>mail incorrect</p>';
    }?>
    <br/>
    <?php
    if ($_POST['message']){
    echo htmlspecialchars($_POST['message']);
    }else{
    echo '<p>no word!!</p>';
    }
    ?>
    

  </body>
 </html>