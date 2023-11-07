<?php session_start();
ob_start(); ?>
<meta charset='utf-8'>
<?php
$flag = null;
include_once '/flag_change';
$name = @$_POST['name'];
if (!empty($name)) {
    $flag = base64_encode($flag);
    setcookie('answer', $flag, time() + 3600 * 12, '/', 0, 0);
    echo '<h1>' . $name . '</h1>' . '<br>';
    echo '<h2>我怀疑你在糊弄我！！！</h2>' . '<br>';
    echo "<a  href='index.html'>" . "再给你一次机会好好填" . "</a><br>";
    echo "或者你可以选择用十年单身换取flag:" . "<a href='duixiang.txt'>" . "点此获取flag" . "</a>";
} else {
    echo '<h1 style="color:green">' . '你连对象都没有测什么测！！！' . '</h1>';
}
?>