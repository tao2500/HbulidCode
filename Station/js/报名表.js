addLoadEvent(setOutput());
var number;
//setTimeout("setOutput()",5000);
"use strict";
function getInput(){
	var input=document.getElementById("input");
	var result=document.getElementById("result"); 
	var a=input.value;
	if(number==a){
		var para=document.createElement("p");
		var text=document.createTextNode("验证成功！！")
		para.appendChild(text);
		result.appendChild(para);
		ok();
		//window.location.href="申请表ok.html";
	}else{
		var para=document.createElement("p");
		var text=document.createTextNode("输入有误，请重新输入！")
		para.appendChild(text);
		result.appendChild(para);
	}
	}
function setOutput(){
	var output=document.getElementById("output");
	number=Math.floor(Math.random()*100);
	output.setAttribute("value",number);
}

function web(){
	var out=document.getElementById("drop_down_menu");
	out.setAttribute("value","技术意向: 前端");
	noshow();
}
function backstage(){
	var out=document.getElementById("drop_down_menu");
	out.setAttribute("value","技术意向: 后端");
	noshow();
}
function ui(){
	var out=document.getElementById("drop_down_menu");
	out.setAttribute("value","技术意向: Ui端");
	noshow();
}
function Andorra(){
	var out=document.getElementById("drop_down_menu");
	out.setAttribute("value","技术意向: 安卓端");
	noshow();
}
function ios(){
	var out=document.getElementById("drop_down_menu");
	out.setAttribute("value","技术意向: ios端");
	noshow();
}
function management(){
	var out=document.getElementById("drop_down_menu");
	out.setAttribute("value","技术意向: 项目管理端");
	noshow();
}

function show(){
	var a=document.getElementById("menu");
	a.setAttribute("style","display: inline-block;");
	var aa=document.getElementById("return");
	aa.setAttribute("style","position: relative; top: 277px; left: 1052px; display:inline-block; z-index: 1;");
	var aaa=document.getElementById("open");
	aaa.setAttribute("style","position: relative; left: -23px; display: none;")
}
function noshow(){
	var a=document.getElementById("menu");
	a.setAttribute("style","display: none;");
	var aa=document.getElementById("return");
	aa.setAttribute("style","position: relative; top: 277px; left: 1052px; display:none; z-index: 1;");
	var aaa=document.getElementById("open");
	aaa.setAttribute("style","position: relative; left: -23px; display: inline-block;")
}

function openNext(){
	window.location.href="申请表验证.html";
}

function addLoadEvent(func){
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

function next(){
	var a=document.getElementById("photo");
	a.setAttribute("style","display: none;");
	var b=document.getElementById("aa");
	b.setAttribute("style","display: none;");
	var c=document.getElementById("open2");
	c.setAttribute("style","display: block;");
	}

function yes(){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
			document.getElementById("open2").innerHTML= this.responseText;
		}
	};
	xmlHttp.open("GET","ajax验证.txt",true);
	xmlHttp.send();
}

function test(){
	alert("折行成功1！");
}
function test2(){
	alert("折行成功2！");
}

function ok(){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
			document.getElementById("open2").innerHTML= this.responseText;
		}
	};
	xmlHttp.open("GET","ajax验证成功.txt",true);
	xmlHttp.send();
}
