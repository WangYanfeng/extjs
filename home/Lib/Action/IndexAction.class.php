<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
    	$this->display();
	}
	function getInfo(){
		$DBuser_basic=D('user_basic');
		$res=$DBuser_basic->select();
		//dump(json_encode($res));
		echo "{rows:".json_encode($res)."}";
	}
}