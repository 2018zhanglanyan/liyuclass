// 张燕的跨淘网js脚本语言(行为)
// 导航js开始
;(function(w){
	function topNav(){
		$('right-nav').hover(function(){
			$('drop-down').css('display','block');
		},function(){
		})
	}
	w.topNav = topNav;
})(window);
topNav();//导航的调用