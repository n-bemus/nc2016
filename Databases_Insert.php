<?php

require("Databases_Insert_Cred.php");

echo $_POST["method"]();

function sanitize($str, $quotes = ENT_NOQUOTES) {
    $str = htmlspecialchars($str, $quotes);
    return $str;
}

function getDeveloper_Games() {
    $dbConn = mysqli_connect(server(), username(), password(), db());

    $query = "SELECT * FROM developer_games";
    $result = $dbConn->query($query);
    if ($dbConn->connect_error) {
        $return->connect_error = "Connection failed: " . $dbConn->connect_error;
        $return->success = false;
        return json_encode($return);
    }

    $developer_games = array();

    if ($result) {
        while ($row = $result->fetch_array()) {
            $allColumns = array();
            for ($i = 0; $i < 4; $i++) {
                array_push($allColumns, $row[$i]);
            }
            array_push($developer_games, $allColumns);
        }
    }

    $return = new stdClass();
    $return->success = true;
    $return->developer_games = $developer_games;
    $return->querystring = $query;
    return json_encode($return);
}

function getPlatforms() {

    $dbConn = mysqli_connect(server(), username(), password(), db());

    $query = "SELECT * FROM platforms";
    $result = $dbConn->query($query);
    if ($dbConn->connect_error) {
        $return->connect_error = "Connection failed: " . $dbConn->connect_error;
        $return->success = false;
        return json_encode($return);
    }

    $platforms = array();

    if ($result) {
        while ($row = $result->fetch_array()) {
            $allColumns = array();
            for ($i = 0; $i < 3; $i++) {
                array_push($allColumns, $row[$i]);
            }
            array_push($platforms, $allColumns);
        }
    }

    $return = new stdClass();
    $return->success = true;
    $return->platforms = $platforms;
    $return->querystring = $query;
    return json_encode($return);
}

function insertDeveloper_Game() {
    if (isset($_POST['Developer_Name'])) {
        $Developer_Name = json_decode(sanitize($_POST['Developer_Name']));
    }
    if (isset($_POST['Developer_Console_Count'])) {
        $Developer_Console_Count = json_decode(sanitize($_POST['Developer_Console_Count']));
    }
    if (isset($_POST['Developer_Year'])) {
        $Developer_Year = json_decode(sanitize($_POST['Developer_Year']));
    }

    $dbConn = mysqli_connect(server(), username(), password(), db("Developer_Games"));

    if ($dbConn->connect_error) {
        die("Connection failed: " . $dbConn->connect_error);
    }

    $query = "INSERT INTO developer_games ( Developer_Name, Developer_Console_Count, Developer_Year ) " .
            "VALUES ( " .
            "'" . $Developer_Name . "', " .
            "" . $Developer_Console_Count . ", " .
            "" . $Developer_Year . " );";
    $result = $dbConn->query($query);
    $return = new stdClass;
    $return->querystring = (string) $query;
    if ($result) {
        $return->success = true;
    } else {
        $return->success = false;
    }
    return json_encode($return);
}
