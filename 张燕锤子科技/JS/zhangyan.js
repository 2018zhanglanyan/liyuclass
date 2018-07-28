//张燕的js
// 购物车
(function(w){
	function gouwuche(){
		var oChe = document.querySelector('.top .top-right i');
		var oA = document.querySelector('.top .top-right a');
		var oKong = document.querySelector('.top .top-right .kong');
		var timer = null;
		oChe.onmouseenter = function(){
			clearTimeout(timer);
			oKong.style.display = 'block';
			oA.className = 'active';
		}
		oChe.onmouseleave = function(){
			timer=setTimeout(function(){
				oKong.style.display = 'none';
				oA.className = '';				
			},300)
		}
		oKong.onmouseenter = function(){
			clearTimeout(timer);
			oKong.style.display = 'block';
			oA.className = 'active';
		}
		oKong.onmouseleave = function(){
			timer=setTimeout(function(){
				oKong.style.display = 'none';
				oA.className = '';
			},300)			
		}
	}
	w.gouwuche = gouwuche;
})(window);
// 搜索框
(function(w){
	function sousuokuang(){
		var oSousuo = document.querySelector('section .neinav .sousuo');
		var oXialacaidan = document.querySelector('section .neinav .xialacaidan');
		var aSpan = document.querySelectorAll('section .neinav .sousuo span');
		var aDiv = document.querySelectorAll('section .neinav .sousuo div');
		oSousuo.onclick = function(ev){
			var oEvent=ev ||event;
			oXialacaidan.style.display = 'block';
			aSpan[0].style.display = 'block';
			aSpan[1].style.display = 'block';
			aDiv[0].style.display = 'none';
			aDiv[1].style.display = 'none';
			oEvent.stopPropagation();
		}
		document.onclick = function(){
			oXialacaidan.style.display = 'none';
			aSpan[0].style.display = 'none';
			aSpan[1].style.display = 'none';
			aDiv[0].style.display = 'block';
			aDiv[1].style.display = 'block';
		}
	}
	w.sousuokuang = sousuokuang;
})(window);
// 滑动导航
;(function(w){
	function topnav(ev){
		var oBox = document.getElementById('dongnav');
		window.onscroll = function(){
			var iTop=document.documentElement.scrollTop || document.body.scrollTop;
			if (iTop >= 100) {
				animation(oBox,{height:80});
	 			oBox.style.top = iTop;
			}else{
				animation(oBox,{height:0});
			} 			
		}
	}
	w.topnav = topnav;
})(window);
// 手机下拉
;(function(w){
	function shoujixiala(){
		var oShouji = document.querySelectorAll('section .neinav .neinav-ul a')[1];
		var oTop = document.querySelector('.top2');
		oShouji.onmouseenter = function(){
			animation(oTop,{height:400});
		}
		oShouji.onmouseleave = function(){
			animation(oTop,{height:0});
		}
		oTop.onmouseenter = function(){
			animation(oTop,{height:400});
		}
		oTop.onmouseleave = function(){
			animation(oTop,{height:0});
		}
	}
	w.shoujixiala = shoujixiala;
})(window);
topnav();//滑动导航
gouwuche();//购物车
sousuokuang();//搜索框
shoujixiala();//手机下拉