<?php
	header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  //header('Access-Control-Allow-Headers: token, Content-Type');
  //header('Access-Control-Max-Age: 1728000');
  //header('Content-Type: application/text');

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "molarq_db";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	// Post Site
	if (isset($_POST["title"])) {

		$title = $_POST["title"];
		$descriptionShort = $_POST["des1"];
		$descriptionLong = $_POST["des2"];
		$latitude = $_POST["lat"];
		$longitude = $_POST["long"];
		$region = $_POST["region"];
		$crono = $_POST["cronologia"];
		$userID = $_POST["userID"];

		$sql = "INSERT INTO sites(title, descriptionShort, descriptionLong, latitude, longitude, region, crono, userID, validate)";
		$sql.= "VALUES ('$title', '$descriptionShort', '$descriptionLong', '$latitude', '$longitude', '$region', '$crono', '$userID', 0)";

		if ($conn->query($sql) === true) {
		    echo "New site created successfully!!";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	// Get Site
	if (isset($_GET["idsite"])) {

		$sql = "SELECT * FROM sites WHERE id = " . $_GET["idsite"];

		if ($result=mysqli_query($conn,$sql))
		{
			$row=mysqli_fetch_array($result);

			// {"0":"1","id":"1","1":"PUTO YACIMIENTO","title":"PUTO YACIMIENTO","2":"EL QUE NOS VA A RAYAR","descriptionShort":"EL QUE NOS VA A RAYAR","3":"Esto es una prueba que no creo que furule","descriptionLong":"Esto es una prueba que no creo que furule","4":"39.110491","latitude":"39.110491","5":"-2.114128","longitude":"-2.114128","6":"3","region":"3","7":"1","crono":"1","8":"1","userID":"1","9":"0","validate":"0"}

			echo json_encode($row);
		}
	}

	// Update Site
	if (isset($_POST["idsite"])) {

		$sql = "UPDATE sites SET validate = " . $_POST["validate"] . " WHERE id = " . $_POST["idsite"];

		if ($conn->query($sql) === true) {
		    echo "Site updated successfully!!";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	mysqli_close($conn);
?>