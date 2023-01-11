

function zhaolin(){
	var n = document.getElementById("number");
	var content=document.getElementById("content");
	var clear=document.getElementById("clear");
	
	var number = n.value;
	while(number!=0){
		if(number>0&&number<100){	 
			switch(number!=0){
			case number>=50: 
				var para=document.createElement("p");
				var text=document.createTextNode("50元  1张");
				para.appendChild(text);
				content.appendChild(para); 
				number = number-50;
				break;
			case number>=20:
				var two=Math.floor(number/20);
				var para=document.createElement("p");
				var text=document.createTextNode("20元"+two+"  张");
				para.appendChild(text);
				content.appendChild(para);
				number=number%20; 
				break;
			case number>=10:
				var one=Math.floor(number/10);
				var para=document.createElement("p");
				var text=document.createTextNode("10元  "+one+" 张");
				para.appendChild(text);
				content.appendChild(para);
				number=number%10;
				break; 
			case number>=5:
				var five=Math.floor(number/5);
				var para=document.createElement("p"); 
				var text=document.createTextNode("5元 "+five+"张");
				para.appendChild(text);
				content.appendChild(para);
				number=number%5;
				break;
			case number>=1:
				var oone=number;
				var para=document.createElement("p");
				var text=document.createTextNode("1元  "+oone+" 张");
				para.appendChild(text);
				content.appendChild(para);
				number=number-oone;
				break;
		}
	}else {
		var para=document.createElement("p");
		var text=document.createTextNode("输入有误，请重新输入！");
		para.appendChild(text);
		content.appendChild(para);
		number=0;
		}
}
n.outerHTML=n.outerHTML;
}
	var array=new Array();
	var num=0;
function adddata(){
	var data=document.getElementById("confirm");
	array[array.length]=data.value;
	num+=1; 
	data.outerHTML=data.outerHTML;//清空输入框
	var add=document.createElement("span");
	add.innerHTML=data.value+"    /";
	var charu=document.getElementById("2");
	charu.appendChild(add);//在元素的右边添加元素
	//若添加在左边使用 插入位置元素.insertBefore(要插入的元素，插入位置元素.childNode[0])
}
function ok(){
	var average=0;
	var total=0; 
	var max=array[0];
	var min=array[0];
	total=eval(array.join("+"));
	for(var a=0;a<array.length;a++){
		average=total/num; 
		if(array[a]>max){
			max=array[a];
		}
		if(array[a]<min){
			min=array[a];
		}
	}
	var content=document.getElementById("2");
	var para=document.createElement("p");
	var text1=document.createTextNode("这"+num+"件商品的最高价为："+ max+" 元;");
	var text2=document.createTextNode("  这"+num+"件商品的最低价为："+ min+" 元;");
	var text3=document.createTextNode("  这"+num+"件商品的平均价为："+ average+" 元;");
	para.appendChild(text1);
	para.appendChild(text2);
	para.appendChild(text3);
	content.appendChild(para);
}
