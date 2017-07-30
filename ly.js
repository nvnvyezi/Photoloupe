var bigimg ={
	box : document.getElementById('box'),
	little : document.getElementById('little'),
	move : document.getElementById('move'),
	big : document.getElementById('big'),
	move1 : document.getElementById('move1'),
	see : function(){
		bigimg.move.style.display = 'block';
		bigimg.big.style.display = 'block';
	},
	hidden : function(){
		bigimg.move.style.display = 'none';
		bigimg.big.style.display = 'none';
	},
	get : function(e){
		var x = e.clientX;
		var y = e.clientY;
		var boxx = bigimg.box.offsetTop;
		var boxy = bigimg.box.offsetLeft;
		var movex = bigimg.move.offsetWidth;
		var movey = bigimg.move.offsetHeight;
		var mleft = x-boxy - movex/2;
		var mtop = y-boxx - movey/2;
		if(mtop <=0){
			mtop=0;
		}else if(mtop >= bigimg.little.offsetHeight - bigimg.move.offsetHeight){
			mtop = bigimg.little.offsetHeight - bigimg.move.offsetHeight;
		}
		if(mleft<=0){
			mleft = 0;
		}else if(mleft>=bigimg.little.offsetWidth - bigimg.move.offsetWidth){
			mleft =bigimg.little.offsetWidth - bigimg.move.offsetWidth;
		}
		bigimg.move.style.top = mtop +"px";
		bigimg.move.style.left = mleft + 'px';
		var w = mleft / (bigimg.little.offsetWidth - bigimg.move.offsetWidth);
		var h =mtop / (bigimg.little.offsetHeight - bigimg.move.offsetHeight);
		var b_top = (bigimg.move1.offsetHeight -bigimg.big.offsetHeight) * h;
		var b_left = (bigimg.move1.offsetWidth - bigimg.big.offsetWidth) * w;
		bigimg.move1.style.left = -b_left +'px';
		bigimg.move1.style.top  = b_top +'px';
	},

};
bigimg.little.onmouseout = function(){
	bigimg.hidden();
};
bigimg.little.onmousemove = function(){
	bigimg.see();
	bigimg.get(event);
};