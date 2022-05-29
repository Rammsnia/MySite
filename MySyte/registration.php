<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no">
    <link rel="stylesheet" href="styles/styles_main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
    <script src="scripts/ScriptMenu.js"></script>
    <title>Registration</title>
</head>
<body>
<div class="downP">
       <div class="regPole">
           <form method="post" action="/core/Users.php" enctype="multipart/form-data">
               <table>
                   <tr>
                       <td>Login</td>
                       <td>
                           <input type="text" name="LoginUsers">
                       </td>
                   </tr>
                   <tr>
                       <td>Password</td>
                       <td>
                           <input type="password" name="PassUsers">
                       </td>
                   </tr>
                   <tr>
                       <td>Confirm password</td>
                       <td>
                           <input type="password" name="PassTUsers">
                       </td>
                   </tr>
                   <tr>
                       <td>Avatar</td>
                       <td>
                           <input type="file" name="Avatar  Users">
                       </td>
                   </tr>
               </table>
           <input type="submit" value="Зарегистрироваться">
       </form>
   </div>
</div>
<?php include_once "temp/footer.php" ?>
