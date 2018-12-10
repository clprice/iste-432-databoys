<!doctype html>

<?php
	session_start();
	if(isset($_SESSION['role'])){
		#change this to a link we want if they have already logged in
		
	}
?>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>VBay</title>
  <link rel="stylesheet" href="style.css">
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

<body>
  <script src="data.js"></script>
<a href="index.html"><img src="VBay logo.PNG" alt="logo" height = "50px"></a>
<?php include 'nav.php';?>
    
<h1>Profiles</h1>
<h2><a href="register.php">Register</a></h2>
<?php

$curl = curl_init();
$x = "https://afternoon-beyond-89008.herokuapp.com/vbay-api/users/";
$y = $_SESSION['role'];
$z = "{$x}{$y}";

curl_setopt_array($curl, array(
  CURLOPT_URL => $z,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);
$jsonData = json_decode($response,true);
					
curl_close($curl);
$fn = $jsonData['fname'];
$ln = $jsonData['lname']; 
$userid = $y;
if ($err) {
  echo "cURL Error #:" . $err;
} else {
 
}
?>
    
    
    
<div class="container">
    <form class="profile-form" >
		 <label for="fn" >First Name</label>
       <input type="text" name="fn" value="<?php echo htmlspecialchars($fn); ?>" /><br/>
         <label for="ln" >Last Name</label>
       <input type="text" name="ln" value="<?php echo htmlspecialchars($ln); ?>" /><br/>
         <label for="username" >Username</label>
       <input type="text" name="userid" value="<?php echo htmlspecialchars($userid); ?>" /><br/>
        
        Edit Information<br/>
        
        <input type="submit" value="Edit"><br/>
        <div >
            <input type="submit" name="logout" value="logout">
        </div>
    </form>
</div>
<?php
	if (!empty($_POST['logout'])){
		$_SESSION['valid'] = false;
		$_SESSION['role'] = '';
		session_destroy();
		echo 'You have logged out.';
	}
?>
<?php include 'foot.php';?>
</body>
</html>
