<?php
highlight_file(__FILE__);
$flag = null;
include '/flag_change';
$a = $_SERVER['argv'][0];
$b = $_SERVER['argv'][1];
$c = $_SERVER['HTTP_CLIENT_IP'];
echo $a."<hr/ >";
echo md5($a)."<hr/ >";
echo $b."<hr/ >";
echo  md5($b)."<hr/ >";
echo $c;


if ($a == md5($b) && $a != $b && $a == md5($a)) {
    if (isset($c)) {
        echo $flag;
    } else {
        echo '提供一个client-ip';
    }
}
?>