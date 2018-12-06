<?php
	session_start();
	if(isset($_SESSION['role'])){
		#change this to a link we want if they have already logged in
		header("Location: index.html");
	}
?>

<div>
    <div >
        <div>
            <form id="login-form" class="form" action="" method="post">
				<h1 class="text-center">Login</h1>
                <div >
                    <label for="username" >Username</label><br>
                    <input type="text" name="username" id="username" class="form-control">
				</div>
                <div >
                    <label for="password">Password:</label><br>
                    <input type="password" name="password" id="password" class="form-control">
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

	if (isset($_POST['submit']) && !empty($_POST['username']) && !empty($_POST['password'])){
		#insert some kind of api calls here


					$curl = curl_init();
					$x = 'https://afternoon-beyond-89008.herokuapp.com/vbay-api/users/';
					$y = $_POST['username'];
					$z = "{$x}{$y}";

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
					curl_close($curl);

					if ($err) {
					  echo "cURL Error #:" . $err;
					} else {
					 
					  if($_POST['password'] == $jsonData["password"]){
						  
						  
						  header("Location: index.html");
					  }
					}
	}

?>
<?php
	if (!empty($_POST['logout'])){
		$_SESSION['valid'] = false;
		$_SESSION['role'] = '';
		session_destroy();
		echo 'You have logged out.';
	}
?>

</body>

</html> 