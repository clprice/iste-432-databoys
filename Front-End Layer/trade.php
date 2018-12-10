<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>VBay</title>
    <link rel="stylesheet" href="style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

<body>
<?php
session_start();

if(isset($_POST['submit']) && isset($_POST['condition'])) { 
    createOffer();
} else if (isset($_POST['submit']) && !(isset($_POST['condition']))) {
    echo "You must provide the condition";
}

if(isset($_POST['completetrade']) && isset($_GET['offerid'])) {
    completeTrade();
}

function getTrade() {
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/trades/".$_GET['tradeid'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_POSTFIELDS => "",
        CURLOPT_HTTPHEADER => array(),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        $jsonData = json_decode($response,true);
    }
    return $jsonData;
}

function getGame($gameid) {

    $curl = curl_init();
  
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games/$gameid",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_POSTFIELDS => "",
      CURLOPT_HTTPHEADER => array()
    ));
  
    $response = curl_exec($curl);
    $err = curl_error($curl);
  
    curl_close($curl);
  
    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      $jsonData = json_decode($response,true);
    }
    return $jsonData['name'];
}

function getAllGames() {

    $curl = curl_init();
  
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/games",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_POSTFIELDS => "",
      CURLOPT_HTTPHEADER => array()
    ));
  
    $response = curl_exec($curl);
    $err = curl_error($curl);
  
    curl_close($curl);
  
    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      $jsonData = json_decode($response,true);
    }
    return $jsonData;
}

function createOffer() {
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/trades/{$_GET['tradeid']}/offers",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"userid\": \"{$_SESSION['role']}\", \"gameid\": {$_POST['game']}, \"condition\": \"{$_POST['condition']}\", \"message\": \"{$_POST['message']}\"}",
        CURLOPT_HTTPHEADER => array(
            "Content-Type: application/json"
        )
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
    echo "cURL Error #:" . $err;
    } else {
    echo $response;
    }
}

function completeTrade() {

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://afternoon-beyond-89008.herokuapp.com/vbay-api/trades/{$_GET['tradeid']}/completedtrades",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"offerid\": \"{$_GET['offerid']}\"}",
        CURLOPT_HTTPHEADER => array(
            "Content-Type: application/json"
        )
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }
}

?>
    <a href="index.html"><img src="VBay logo.PNG" alt="logo" height = "50px"></a>
    <?php include 'nav.php';?>
    <div class="container">
        <div class="trade">
            <h1><?php echo getGame(getTrade()['gameid']); ?></h1>
            <h3>Description:</h3>
            <p><?php echo getTrade()['description']; ?></p>
            <h3>Condition:</h3>
            <p><?php echo getTrade()['condition']; ?></p>
            <h3>Trader:</h3>
            <p><?php echo getTrade()['userid']; ?></p>
        </div>
        <div class="offers">
            <form action="trade.php?tradeid=<?php echo $_GET['tradeid']; ?>" method="post">
                Games:
                <select name="game">
                    <?php 
                        foreach(getAllGames() as $game) {
                            if($game['gameid'] != getTrade()['gameid'])
                                echo "<option value='{$game['gameid']}'>".$game['name']."</option>";
                        }
                    ?>
                </select><br><br>
                Condition: 
                <input type="text" name="condition"><br><br>
                Message:
                <textarea name="message" rows="5" cols="40"></textarea><br>
                <input type="submit" name="submit" value="Submit">
            </form>
            <h2>Offers</h2>
                <?php 
                    foreach(getTrade()['offers'] as $offer) {
                        echo "<div class='offer'>";
                        echo "<p>User: {$offer['userid']}</p>";
                        echo "<p>Game: ".getGame($offer['gameid'])."</p>";
                        echo "<p>Condition: {$offer['condition']}</p>";
                        echo "<p>Message: {$offer['message']}</p>";
                        if(getTrade()['userid'] == $_SESSION['role']) {
                            echo "<form action='trade.php?tradeid=".$_GET['tradeid']."&offerid={$offer['offerid']}' method='post'>";
                            echo "<input type='submit' name='completetrade' value='Complete Trade'></form>";
                        }
                        echo "</div>";
                    }
                ?>
        </div>

    </div>
    <?php include 'foot.php';?>
</body>
</html>