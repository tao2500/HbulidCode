				window.onload=initialization();
				var inputOne;
				var inputTwo;
				var frequency=1; //输入one还是two的开关
				var operato;//运算符
				var massagr;
				var mass;
				var character=1;//控制多个连续输入的运算符
				var AfterCalculation=0; //判断是否是计算后的输入
				function initialization(){  //格式化计算机
					inputOne='';
					inputTwo='';
					frequency=1;
					operato=0;
					massagr='';
					mass = document.getElementById("text");
					mass.setAttribute("value",massagr);
					var v = document.getElementById("result"); //清除结果框内容
					v.setAttribute("value",massagr);
				}
				function recode(x){
					if(AfterCalculation!=0){
//						alert("重置one成功！此时one="+inputOne); 
						AfterCalculation=0;//格式化 ，保证输出结果后还能连续输入
						initialization();
					}
					if(frequency==1){
						if(x==11){
							inputOne+=".";
							massagr=massagr+".";
						}else{
							inputOne+=x.toString();
							massagr=massagr+x.toString();
						}
					} else if(frequency==2){ 
						if(x==11){
							inputTwo+=".";
							massagr=massagr+".";
						}else{
						inputTwo+=x.toString();
						massagr=massagr+x.toString();
						}
					}
					mass.setAttribute("value",massagr);
//					alert(x);
//					alert(inputOne);
				}
				function operator(y){
					if(frequency==1){
						frequency++;
					} else if(frequency==2){
						frequency--;
					}
					operato=y;
					switch (y){//显示运算符
						case 1:
							mass.setAttribute("value",massagr=massagr+"%");
							break;
						case 2:
						    mass.setAttribute("value",massagr=massagr+"/");
						    break;
						case 3:
						    mass.setAttribute("value",massagr=massagr+"*");
						    break;
						case 4:
						    mass.setAttribute("value",massagr=massagr+"-");
						    break;
						case 5:
						    mass.setAttribute("value",massagr=massagr+"+");
						    break;
					}
					AfterCalculation=0;  //重置此时openOne的状态
				}
				function calculation(){
					var calcu = 0;
//					var test = parseFloat("3.14");
//					alert(typeof test);
//					alert("one"+inputOne);
//					alert("two"+inputTwo);
					switch (operato){
						case 1:
							calcu = parseFloat(inputOne) % parseFloat(inputTwo);
//							alert("%成功"+ calcu);
							newinitialization(calcu);
							break;
						case 2:
						    calcu = parseFloat(inputOne) / parseFloat(inputTwo);
						    newinitialization(calcu);
							break;
						case 3:
						    calcu = parseFloat(inputOne) * parseFloat(inputTwo);
						    newinitialization(calcu);
							break;
						case 4:
						    calcu = parseFloat(inputOne) - parseFloat(inputTwo);
						    newinitialization(calcu);
							break;
						case 5:
						    calcu = parseFloat(inputOne) + parseFloat(inputTwo);
						    newinitialization(calcu);
							break;
					}
					AfterCalculation=1;// 标记此时inputone的值为结果值
					var output = document.getElementById("result");
					output.setAttribute("value",calcu);
				}
				function newinitialization(z){     //定义inputone格式化计算机
//					alert(z);
					inputOne='';
					inputOne=z.toString();
					inputTwo='';
					frequency=1;
					operato=0;
					massagr=z.toString();
				}
				

//				function receive(){
//					var table = document.getElementById("myGrid"); 
//					var content = table.rows[4].cells[2].innerHTML;
//					alert(content);
//				}
//				function test(){
//					var v = document.getElementById("0");     //P40
//					var vv = document.getElementsByTagName("td");
//					alert(vv.length);
//					alert(vv[0].innerHTML); 
//				}