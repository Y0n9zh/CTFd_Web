<?php
header("Content-Type: text/html;charset=utf-8");
$hack = '你该不会是个黑客吧';
$flag = null;
include_once "/flag_change";

if (isset($_POST['t1']) && isset($_POST['t2'])) {
    $a = $_POST['t1'];
    $b = $_POST['t2'];
    if ($a != $b && md5($a) == md5($b)) {
        echo 'flag:' . $flag;
    } else {
        echo '<font size="3" color="red">FBI warning:</font>' . $hack;
    }
} else {
    echo '<font size="3" color="red">FBI warning:</font>' . $hack;
}
?>
<html lang="en">
<header></header>

<body>
<h1>try to get the flag</h1>

<form method='post'>
    T1:<input type="text" name="t1">
    T2:<input type="text" name="t2">
    <input type='submit' value="提交">
</form>
<!--
if(isset($_POST['t1'])&&isset($_POST['t2'])){
	$a = $_POST['t1'];
	$b = $_POST['t2'];
	if($a !=$b && md5($a)==md5($b)){
		echo $flag;
	}else{
		echo $hack;
	}
}else{
	echo $hack;
}
-->

</body>
</html>