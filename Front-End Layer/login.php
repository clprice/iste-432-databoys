<?php
	include "assets/inc/header.php";
	include "assets/inc/nav.php";
	include "assets/inc/container.php";
	require_once('DB.class.php');
	session_start();
	if(isset($_SESSION['role'])){
		#change this to a link we want if they have already logged in
		header("Location: index.html");
	}
?>

<div id="login-row" class="row justify-content-center align-items-center">
    <div id="login-column" class="col-md-6">
        <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" action="" method="post">
				<h1 class="text-center">Login</h1>
                <div class="form-group">
                    <label for="email" >Email:</label><br>
                    <input type="text" name="email" id="email" class="form-control">
				</div>
                <div class="form-group">
                    <label for="password">Password:</label><br>
                    <input type="password" name="password" id="password" class="form-control">
				</div>
                <div class="form-group">
                    <label for="remember-me"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                    <input type="submit" name="submit" class="btn btn-info btn-md text-uppercase" value="submit">
				</div>
				<div class="form-group">
					<input type="submit" name="logout" value="logout">
				</div>
			</form>
		</div>
	</div>
</div> <!-- end login row -->
<?php
    $db = new PDO_DB();
	
	if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['password'])){
		
		$results = $db->userLogin($_POST['email']);
		
		#change results->VCHEMAIL and $results->VCHPASSWORD to api call results for those values
		if ($_POST['email'] == $results->VCHEMAIL &&
		password_verify($_POST['password'], $results->VCHPASSWORD)) {
			$_SESSION['valid'] = true;
			#INSERT ROLE CALL FROM API HERE 
			$_SESSION['role'] = apicallRole;
			#INSERT USERID CALL FROM API HERE 
			$_SESSION['userId'] = apicallUserId;
			
			#change this to a valid link in our app to redirect after login
			header("Location: index.html");
		}
		else{
			echo "Password or email incorrect";
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
<?php
	include "assets/inc/end-container.php";
	include "assets/inc/footer.php";
?>

</body>

</html>
