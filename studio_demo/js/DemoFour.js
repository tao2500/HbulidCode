 
 var number=0;
var one = document.getElementById("one");     //获取对象数组
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var night = document.getElementById("night");
var ten = document.getElementById("ten");
var array = [one,two,three,four,five,six,seven,eight,night,ten];

function judge(x){ //判断返回是否
	if(x==0) return false;
	if(x==1) return true;
}
function Selectall(){
	var i=0;
	var ts = document.getElementById("seleattress").checked;//全选框状态
	if(ts==false){
		for(i;i<array.length;i++){
			array[i].checked = judge(0);
		}
		i=0;
		number=0;
		switc();
	}else if(ts==true){
		number=10;
		for(i;i<array.length;i++){
			array[i].checked = judge(1);
		}
		i=0;
		switc();
	}
	
}
function add(){  //计数
	var num=0;
	i = 0;
	for(i;i<array.length;i++){
		if(array[i].checked==judge(1))num++;
	}
//	alert(num);
	number=num;
	switc();
}
function ReverseSelection(){  //反选
	number=10-number;
	i = 0;
	for(i;i<array.length;i++){
		if(array[i].checked==true){
		array[i].checked = false;
	}else array[i].checked = true;
	}
	switc();
}

function switc(){//切换状态
	var sele = document.getElementsByClassName("sele")[0];
	var seletwo = document.getElementsByClassName("seletwo")[0];
	if(number<=5){
		sele.setAttribute("style","display: inline");
		seletwo.setAttribute("style",'display: none');
	}else if(number>5){
//		alert(typeof sele);
		sele.setAttribute("style","opacity: 0");
		seletwo.setAttribute("style",'display: inline');
	}
}








// function btnClick() {
//  var isChecked = document.getElementById("checkbox1").checked;
//  alert(isChecked);
//  } 

//function Selectall(){
//	var ts = document.getElementById("seleattress").checked;
//	if(ts==false){
//		array[0].checked = judge();
//		two.checked = judge();
//		three.checked = judge();
//		four.checked = judge();
//		five.checked = judge();
//		six.checked = judge();
//		seven.checked = judge();
//		eight.checked = judge();
//		night.checked = judge();
//		ten.checked = judge();
//		number=0;
//		switc();
//	}else if(ts==true){
//		number=10;
//		document.getElementById("one").checked = true;
//		document.getElementById("two").checked = true;
//		document.getElementById("three").checked = true;
//		document.getElementById("four").checked = true;
//		document.getElementById("five").checked = true;
//		document.getElementById("six").checked = true;
//		document.getElementById("seven").checked = true;
//		document.getElementById("eight").checked = true;
//		document.getElementById("night").checked = true;
//		document.getElementById("ten").checked = true;
//		switc();
//	}
//	
//}
////function changeOpen(){
////	open=1;
////}
//function add(){  //计数
//	var num=0;
//	if(document.getElementById("one").checked==true)num++;
//	if(document.getElementById("two").checked==true)num++;
//	if(document.getElementById("three").checked==true)num++;
//	if(document.getElementById("four").checked==true)num++;
//	if(document.getElementById("five").checked==true)num++;
//	if(document.getElementById("six").checked==true)num++;
//	if(document.getElementById("seven").checked==true)num++;
//	if(document.getElementById("eight").checked==true)num++;
//	if(document.getElementById("night").checked==true)num++;
//	if(document.getElementById("ten").checked==true)num++;
//	number=num;
//	switc();
//}
//function ReverseSelection(){  //反选
//	number=10-number;
//	if(document.getElementById("one").checked==true){
//		document.getElementById("one").checked = false;
//	}else document.getElementById("one").checked = true;
//	if(document.getElementById("two").checked==true){
//		document.getElementById("two").checked = false;
//	}else document.getElementById("two").checked = true;
//	if(document.getElementById("three").checked==true){
//		document.getElementById("three").checked = false;
//	}else document.getElementById("three").checked = true;
//	if(document.getElementById("four").checked==true){
//		document.getElementById("four").checked = false;
//	}else document.getElementById("four").checked = true;
//	if(document.getElementById("five").checked==true){
//		document.getElementById("five").checked = false;
//	}else document.getElementById("five").checked = true;
//	if(document.getElementById("six").checked==true){
//		document.getElementById("six").checked = false;
//	}else document.getElementById("six").checked = true;
//	if(document.getElementById("seven").checked==true){
//		document.getElementById("seven").checked = false;
//	}else document.getElementById("seven").checked = true;
//	if(document.getElementById("eight").checked==true){
//		document.getElementById("eight").checked = false;
//	}else document.getElementById("eight").checked = true;
//	if(document.getElementById("night").checked==true){
//		document.getElementById("night").checked = false;
//	}else document.getElementById("night").checked = true;
//	if(document.getElementById("ten").checked==true){
//		document.getElementById("ten").checked = false;
//	}else document.getElementById("ten").checked = true;
//	switc();
//}
//
//function switc(){//切换状态
//	var sele = document.getElementsByClassName("sele")[0];
//	var seletwo = document.getElementsByClassName("seletwo")[0];
//	if(number<=5){
//		sele.setAttribute("style","display: inline");
//		seletwo.setAttribute("style",'display: none');
//	}else if(number>5){
////		alert(typeof sele);
//		sele.setAttribute("style","opacity: 0");
//		seletwo.setAttribute("style",'display: inline');
//	}
//
