var wrap = document.getElementById('wrapper');
var con = document.getElementById('con');
var act = document.getElementById('act');
//var img = document.querySelector('img')[0];
var banner = document.getElementById('banner');
var lis = banner.getElementsByTagName('li');
var $ul = document.getElementById('uls');
var list = $ul.getElementsByTagName('li');
var prev = act.getElementsByTagName('span')[0];
var next = act.getElementsByTagName('span')[1];

var html = document.getElementsByTagName('html')[0];
var body = document.getElementsByTagName('body')[0];
html.style.width = html.clientWidth;
html.style.height = html.clientHeight;
body.style.width = body.clientWidth;
body.style.height = body.clientHeight;

console.log(html.clientWidth);

var num = 0;
	
next.onclick = function(){
	num++;
	if(num>=lis.length){
		num = lis.length-1;
		alert('已經是最後一張了');
		return;
	}
	banner.style.transform = 'translateX(-'+num*1920+'px)';
	banner.style.webkitTransform = 'translateX(-'+num*1920+'px)';
	
};
console.log(banner.style.webkitTransform);
prev.onclick = function(){
	num--;
	if(num<0){
		num = 0;
		alert('已經是第一張了');
		return;
	}
	banner.style.transform = 'translateX('+num*1920+'px)';
	banner.style.webkitTransform = 'translateX('+num*1920+'px)';
};

function next(i){
	banner.style.transform = 'translateX(-'+i*1920+'px)';
	banner.style.webkitTransform = 'translateX(-'+i*1920+'px)';
}
function getCss(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
