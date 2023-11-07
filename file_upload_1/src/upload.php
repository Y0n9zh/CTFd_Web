<?php
header("Content-Type: text/html;charset=utf-8");

if ($_FILES["file"]["error"] > 0) {
    echo "请选择上传文件" . "<br />";
    echo "<a href='./index.html'>" . "重新上传" . "</a>";
} else {
    //MIME检测
    if (($_FILES['file']['type'] == 'image/jpeg') || ($_FILES['file']['type'] == 'image/png') || ($_FILES['file']['type'] == 'image/gif')) {
        //黑名单检测
        $BlackList = array(".php5", ".php4", ".php3", ".php2", ".html", ".htm", ".phtml", ".pht", ".pHp", ".pHp5", ".pHp4", ".pHp3", ".pHp2", ".Html", ".Htm", ".pHtml", ".htaccess", ".ini");
        if (isset($_POST["submit"])) {
            $name = $_FILES['file']['name']; //接收文件名
            //echo $name;
            $extension = substr(strrchr($name, "."), 0);//得到扩展名
            //echo $extension;
            $boo = false;

            foreach ($BlackList as $key => $value) {
                if ($value == $extension) {//迭代判断是否有命中
                    $boo = true;
                    break;//命中之后直接退出循环
                }
            }

            if (!$boo) {//如果没有命中，则开始文件上传操作
                echo "Upload: " . $_FILES["file"]["name"] . "<br />";
                echo "Type: " . $_FILES["file"]["type"] . "<br />";
                echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
                move_uploaded_file($_FILES["file"]["tmp_name"], './uploads/' . $_FILES["file"]["name"]);//移动临时文件到当前文件目录
                echo "file in /uploads/" . $_FILES["file"]["name"];
            } else {
                echo "文件不合法！！";
            }
        }


        //存储文件
    } else {
        echo "该文件类型" . $_FILES["file"]["type"] . "不允许上传" . "<br />";
        echo "<a href='./index.html'>" . "重新上传" . "</a>";
    }
}
?>
