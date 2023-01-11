<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>天高报名表</title>
			<style>
			.info{
				position:relative;
				width: 1050px;
				/*border: 1px solid red;*/
				margin: 0 auto;
			}
			.basic_info{
				display: block;
				margin: 10px 0;
				font-size:46px;
				font-weight: bold;
				text-align: center;
			}
			img{
				position:absolute;
				right:10%;
				display: block;
				width: 140px;
				height: 200px;
				margin: 0 auto;
				/*border:1px solid blue;*/
			}
			.info>div{
				margin-top: 10px;
			}
			.short{
				display: inline-block;
				width: 280px;
				height:40px;
				line-height:10px;
				font-size: 22px;
				font-weight: bold;
				text-align: left;
			}
			.shorttwo{
				display: inline-block;
				width: 280px;
				height:40px;
				line-height:30px;
				font-size: 22px;
				font-weight: bold;
				text-align: left;
				position: relative;
				left: 450px;
				top: -38px;
			}
			:nth-child{
				display: inline-block;
				width: 180px;
				height:40px;
				line-height:40px;
				font-size: 22px;
				font-weight: bold;
				text-align: right;
			}
			.name, .grade, .majorClass, .born, .hobby, .phone, .choose{
				display: inline-block;
				height:30px;
				font-size: 22px;
			}
			.resume,.experience,.futurePlan{
				display: inline-block;
				width:850px;
				padding-top:6px;
				line-height:32px;
				vertical-align: top;
				word-break: break-all;
				font-size: 22px;
			}
			input{
				position:absolute;
				right:10%;
				bottom: 10px;
				width:100px;
			}
			#p{
				position: relative;
				left: 1150px;
				top: 87px;
			}
			.info{
				width: 100%;
				height: 600px;
				/*background-color: #AAAAAA;*/
			}
			
		</style>
	</head>
	<body>
		<div class="info">
			<h1 class="basic_info">天高报名表</h1>
			<img src="${pageContext.request.contextPath }/res/img/Btn_picture_nor@2x.png" alt="">
			<div class="short">
				<p>姓名：</p><span class="name">testttt</span>
				
				<p>专业班级：</p><span class="majorClass">aaaaaaaaaaaaaaaa</span>
				
				<p>兴趣爱好：</p><span class="hobby">aaaaaaaaaaaaaaaa</span>
				<p>技术意向：</p><span class="choose">aaaaaaaaaaaaaaaa</span>
			</div>
			<div class="shorttwo">
				<p>年级：</p><span class="grade">aaaaaaaaaaaaaaaa</span>
				<p>出生年月：</p><span class="born">aaaaaaaaaaaaaaaa</span>
				<p>手机号码：</p><span class="phone">aaaaaaaaaaaaaaaa</span>
			</div>
			<div>
				<span class="short">个人简介&技能：</span>
				<span class="resume"></span></div>
			<div>
				<span class="short">项目&工作经历：</span>
				<span class="experience"></span></div>
			<div>
				<span class="short">未来规划：</span>
				<span class="futurePlan"></span></div>
			</div>
			<div class="butto">
				<input type="button" value="Print" id="p">
				<input type="button" value="下一个" id="btn">
		</div>
			
		<script src="${pageContext.request.contextPath }/res/js/jquery-1.8.0.min.js"></script>
		<script>
			window.onload = function(){
				
				var page = 0;
				var img = document.getElementsByTagName("img")[0];
				var name = document.getElementsByClassName("name")[0];
				var grade = document.getElementsByClassName("grade")[0];
				var majorClass = document.getElementsByClassName("majorClass")[0];
				var born = document.getElementsByClassName("born")[0];
				var hobby = document.getElementsByClassName("hobby")[0];
				var phone = document.getElementsByClassName("phone")[0];
				var choose = document.getElementsByClassName("choose")[0];
				var resume = document.getElementsByClassName("resume")[0];
				var experience = document.getElementsByClassName("experience")[0];
				var futurePlan = document.getElementsByClassName("futurePlan")[0];
				var btn = document.getElementById("btn");
				
				createInfo(page);
				
				btn.onclick=function(){
					page++;
					//调用接口
					createInfo(page);
				}
					
				
				function createInfo(page){
					$.ajax({
						url:'getEntryInfo',
						type:'post',
						cache:false,
						dataType:'json',
						data:{
							'num':page
						},
						success:function(result){
							if(result.status=="success"){
								img.src="photo/"+result.info.imgURL;
								name.innerHTML=result.info.name,
								grade.innerHTML=result.info.grade,
								majorClass.innerHTML=result.info.className,
								born.innerHTML=result.info.birthday,
								hobby.innerHTML=result.info.hobby,
								phone.innerHTML=result.info.phone,
								choose.innerHTML=result.info.intent,
								resume.innerHTML=result.info.resume,
								experience.innerHTML=result.info.experience,
								futurePlan.innerHTML=result.info.plan
							}else if(result.status=="resultNull")
								alert(result.message);
							else
								alert(result.message);
						},
						error:function(){
							alert("网络传输有问题，请检查网络连接或刷新页面再次进行操作");
						}
					})
					
				}
			}
			
		</script>
		
	</body>
</html>
