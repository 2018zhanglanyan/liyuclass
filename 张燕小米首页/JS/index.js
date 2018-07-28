handleShopping();
handleNav();
handleSearchBox();
function handleShopping(){
	// 获取元素
	var oShoppingBox = document.querySelector('.shopping-box');
	var oShopping = document.querySelector('.shopping-box .shopping');
	var oShoppingA = oShopping.getElementsByTagName('a')[0];
	var oShoppingLoader = document.querySelector('.shopping-content .loader');
	var oShoppingContent = document.querySelector('.shopping-content');
	var oEmptySpan = document.querySelector('.shopping-box .empty-shopping');
	console.log(oShoppingA);
	// 监听鼠标移入事件
	oShoppingBox.onmouseenter = function(){
		// 1.改变购物车的背景色和字体颜色
		oShopping.style.backgroundColor = '#fff';
		oShoppingA.style.color = '#ff6700';
		// 2.显示loading图标
		oShoppingLoader.style.display = 'block';
		// 3.购物车的内容显示出来
		// oShoppingContent.style.height = '100px';
		animation(oShoppingContent,{height:100},false,function(){
			// 隐藏loading
			oShoppingLoader.style.display = 'none';
			// 获取数据并显示
			oEmptySpan.style.display = 'block';
		});
	}
	oShoppingBox.onmouseleave = function(){
	 	// 改变购物车的背景色和字体颜色
	 	oShopping.style.backgroundColor = '#424242';
	 	oShoppingA.style.color = '#b0b0b0';
	 	oEmptySpan.style.display = 'none';
	 	// 隐藏购物车内容
	 	animation(oShoppingContent,{height:0});
	}
}
function handleNav(){
	// 获取导航标签
	var aNavA = document.querySelectorAll('.box2 .navs a');
	var oNavContent = document.querySelector('.box2 .nav-content');
	var oNavUl = oNavContent.getElementsByTagName('ul')[0];
	var timer = null;
	for (var i = 0; i < aNavA.length-2; i++) {
		aNavA[i].index = i;
		aNavA[i].onmouseenter = function(){
			clearTimeout(timer);
			oNavContent.style.borderTop = '1px solid #ccc';
			animation(oNavContent,{height:200});
			loadData(this.index);
		}
		aNavA[i].onmouseleave = function(){
			timer = setTimeout(function(){
				oNavContent.style.borderTop = 'none';
				animation(oNavContent,{height:0});
			},500)
		}
		oNavContent.onmouseenter = function(){
			clearTimeout(timer);
		}
		oNavContent.onmouseleave = function(){
			timer = setTimeout(function(){
				oNavContent.style.borderTop = 'none';
				animation(oNavContent,{height:0});
			},500)
		}
	}
	function loadData(index){
		// console.log(index);
		var aDatas = aNavItems[index];
		// console.log(datas);
		oNavUl.innerHTML = '';
		for (var i = 0; i < aDatas.length; i++) {
			// console.log(aDatas[i]);
			var oLi = document.createElement('li');
			var oDiv = document.createElement('div');
			oDiv.className = 'img-box';
			var oImg = document.createElement('img');
			oImg.src = aDatas[i].img;
			var oP1 = document.createElement('p');
			oP1.className = 'product-name';
			oP1.innerHTML = aDatas[i].name;
			var oP2 = document.createElement('p');
			oP2.className = 'product-price';
			oP2.innerHTML = aDatas[i].price + "元起";
			if (aDatas[i].tag) {
				var oSpan = document.createElement('span');
				oSpan.className = 'tag';
				oSpan.innerHTML = aDatas[i].tag;
				oLi.appendChild(oSpan);
			}
			oDiv.appendChild(oImg);
			oLi.appendChild(oDiv);
			oLi.appendChild(oP1);
			oLi.appendChild(oP2);
			oNavUl.appendChild(oLi);
		}
	}
}
function handleSearchBox(){
	var oLists = document.querySelector(' .searchBox .lists');
	var oInput = document.querySelector(' .searchBox .inputer');
	oInput.onfocus = function(){
		oLists.style.display = 'block';
	}
}