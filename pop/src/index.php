<?php
//flag is in /flag_change
highlight_file(__FILE__);
error_reporting(0);
class QZI {
    private $lalala;
    public function qziedu($value)
    {
        include($value);
        echo $flag;
    }
    public function __invoke(){
        $this->qziedu($this->lalala);
    }
}

class A{
    public $qian;
    public $yu;
    public function __toString(){
        return $this->yu->qian;
    }
    public function __wakeup(){
        echo $this->qian;
    }
}

class V{
    public $py;
    public function __construct(){
        $this->py = array();
    }

    public function __get($key){
        $function = $this->py;
        return $function();
    }
}

if(isset($_GET['pop'])){
    unserialize($_GET['pop']);
}
?>
