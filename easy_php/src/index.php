<?php
highlight_file(__FILE__);
$flag = null;
include '/flag_change';
$a = $_SERVER['argv'][0];
$b = $_SERVER['argv'][1];
$c = $_SERVER['HTTP_CLIENT_IP'];

if ($a == md5($b) && $a != $b && $a == md5($a)) {
    if (isset($c)) {
        echo $flag;
    } else {
        echo '请提供一个 client-ip ';
    }
}
?>