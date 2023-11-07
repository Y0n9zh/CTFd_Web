<?php
error_reporting(0);
highlight_file('index.php');
echo "<br><br>";

$flag = null;
include_once '/flag_change';

$msg_giveme = 'Give me the flag!';
$msg_getout = 'No this. Get out!';

if (!isset($_GET['flag']) && !isset($_POST['flag'])) {
    exit($msg_giveme);
}

if ($_POST['flag'] === 'flag' || $_GET['flag'] === 'flag') {
    exit($msg_getout);
}

foreach ($_POST as $key => $value) {
    $$key = $value;
}

foreach ($_GET as $key => $value) {
    $$key = $$value;
}

echo 'the flag is : ' . $flag;

?>