
//alert(typeof document.getElementById(ppp));
/*var a=document.getElementsByTagName("p");
alert(a.length);
var a=document.getElementsByTagName("*");
alert(a.length);*/
//alert(getElementsByClassName("pp").length);
/*var a=document.getElementsByTagName("*");
alert(document.getElementsByClassName(a, "ppp"));*/
//addEventListener(tesst());
//addEventListener(tesstt());
//addEventListener(getElementsByClassName(body,"pp"));

addEventListener(aa());

function aa(){
	var a=float;
	if(a==float){
		a=float;
		alert("test1");
	}
	if(a==true){
		alert("负负得正！");
	}
	alert()
}

function addLoadEvent(func){//P83
	var oldonload=window.onload;
	if(typeof window.onload !='function'){
		window.onload=func;
	}
	else {
		window.onload=function(){
			oldonload();
			func;
		}
	}
}



function tesst(){
	alert("test成功！！！");
}
function tesstt(){
	alert(typeof document.getElementsByClassName("pp"));
	alert(document.getElementsByClassName("pp").length);
	alert(document.getElementsByClassName(p,"pp"));
}

function getElementsByClassName(node,classname){ //适用于新老浏览器的getclassname方法,node为搜索起点。
	if(node.getElementsByClassName){
		return node.getElementsByClassName(classname);
	}
	else{
		var results=new Array();
		var elems =node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++){
			if(elems[i].className.indexOf(classname)!=-1){ 
				results[results.length]=elems[i];
			}  
		}
		return results; 
	}
}

function insertAfter(newElement,targetElement){  //自己编写的insertafter函数。p110
	var parent = targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
