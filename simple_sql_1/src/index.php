<?php
header("Content-Type: text/html;charset=utf-8");
highlight_file('sql.txt');
echo '<br><br>';

if (isset($_POST['id'])) {

    $_POST['id'] = waf($_POST['id']);
    $con = mysqli_connect("localhost", "root", "root", "web");
    if (!$con)
        die('Could not connect: ' . mysqli_error($con));
    $sql = "SELECT * FROM users where id= {$_POST['id']}";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);
    echo "name: " . $row['username'];
    echo "<br />";
    echo "pw: " . $row['password'];
    mysqli_close($con);
}

function waf($str)
{
    $filter = 'outfile|readfile|;|load_file|sleep|delete|insert|update|database|user|information_schema';
    if (preg_match('/' . $filter . '/i', $str)) {
        exit('hacker!');
    }
    return $str;
}

?>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>just do it！！！！</title>
</head>
<h1>用户信息查询</h1>
<span>我才不会告诉你可以用 select flag from flag 看到 flag 呢！</span>
<form action="index.php" method="post">
    <p>id: <input type="text" name="id"/></p>
    <input type="submit" value="Submit"/>
</form>
</html>