<?php
	session_start();
	if(isset($_SESSION['role'])){
		#change this to a link we want if they have already logged in
		header("Location: index.php");
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
    
<div class="container">
    <div class="profile-form" >
        <div>
            <form id="login-form" class="form" action="" method="post">
				<h1 class="text-center">Register</h1>
				<div >
                    <label for="userid" >Username</label><br>
                    <input type="text" name="userid" id="userid" class="form-control" required>
				</div>
                <div >
                    <label for="email" >Email</label><br>
                    <input type="text" name="email" id="email" class="form-control" required>
				</div>
                <div >
                    <label for="password">Password:</label><br>
                    <input type="password" name="password" id="password" class="form-control" required>
				</div>
				<div >
                    <label for="fn" >FirstName</label><br>
                    <input type="text" name="fn" id="fn" class="form-control" required>
				</div>
				<div >
                    <label for="ln" >LastName</label><br>
                    <input type="text" name="ln" id="ln" class="form-control" required>
				</div>
                <div >
                   
                    <input type="submit" name="submit"  value="submit">
				</div>
				<div >
					<input type="submit" name="logout" value="logout">
				</div>
			</form>
		</div>
	</div>
</div> <!-- end login row -->
<?php

	if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['password'])){
		#insert some kind of api calls here


					$curl = curl_init();
					$x = 'https://afternoon-beyond-89008.herokuapp.com/vbay-api/users/';
					$y = $_POST['userid'];
					$z = "{$x}{$y}";
					$userid = $_POST['userid'];
					$email = $_POST['email'];
					$password = $_POST['password'];
					$fn = $_POST['fn'];
					$ln = $_POST['ln'];
	
					curl_setopt_array($curl, array(
					  CURLOPT_URL => $z,
					  CURLOPT_RETURNTRANSFER => true,
					  CURLOPT_ENCODING => "",
					  CURLOPT_MAXREDIRS => 10,
					  CURLOPT_TIMEOUT => 30,
					  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
					  CURLOPT_CUSTOMREQUEST => "GET",
					  CURLOPT_POSTFIELDS => "",
					  CURLOPT_HTTPHEADER => array(
						
					  ),
					));

					$response = curl_exec($curl);
					$err = curl_error($curl);
					$jsonData = json_decode($response,true);
					echo $jsonData['email'];
					curl_close($curl);

					if ($err) {
					  echo "cURL Error #:" . $err;
					} else {
					 // make sure the emails aren't the same
					  if($_POST['email'] != $jsonData['email']){
							echo ' You can register';
							//format of postings
							//{"userid": "laraCroft", "email": "lara.croft@gmail.com", "password": "llamas", "fname": "Lara", "lname": "Croft"}
																				
													$curl = curl_init();

													curl_setopt_array($curl, array(
													  CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/users",
													  CURLOPT_RETURNTRANSFER => true,
													  CURLOPT_ENCODING => "",
													  CURLOPT_MAXREDIRS => 10,
													  CURLOPT_TIMEOUT => 30,
													  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
													  CURLOPT_CUSTOMREQUEST => "POST",
													  CURLOPT_POSTFIELDS => "{\"userid\": \"$userid\", \"email\": \"$email\", \"password\": \"$password\", \"fname\": \"$fn\", \"lname\": \"$ln\"}",
													  CURLOPT_HTTPHEADER => array(
														"Content-Type: application/json",
														"Postman-Token: 111cb9b5-2410-4f1f-b950-719a20b439fd",
														"cache-control: no-cache"
													  ),
													));

													$response = curl_exec($curl);
													$err = curl_error($curl);

													curl_close($curl);

													if ($err) {
													  echo "cURL Error #:" . $err;
													} else {
													  echo $response;
													}
																			 $_SESSION['role'] = $y;
						  
					  }//end of post
					}//end of else
	}//end of if

?>
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