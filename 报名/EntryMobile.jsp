<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/res/css/phone.css"/>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/res/css/HomePage.css"/>-->
    <link type="text/css" rel="stylesheet" href="phone.css" />
    <link type="text/css" rel="stylesheet" href="HomePage.css" />
    <title>报名页面</title>
    <style>
    	/*.a{
    		background-color: #67B9F7;
    	}*/ 
    	.c{
    		background-color: #B3B3B3;
    	}
    	.c:hover{ 
    		cursor: hand;
    	}
    	 
    </style>
    
</head>
<body>
   <!--  <div style="width:100%;height:10%;background: white;"></div>-->
    <div id="Picture">
	        <label for="upload">
	            <img src="${pageContext.request.contextPath }/res/img/Btn_picture_nor@2x.png" alt="上传照片"/>
	            <!-- <input type="button" id="fileBtn" value="上传头像" /> -->
	            <span>点击上传你的美照👆</span>
	            <!--有些手机浏览器在点击的时候，会弹出键盘选择，我用onfocus="this.blur()"，来强制失去焦点-->
	            <input class="c" accept="image/*" type="file" id="upload" name="upload" onfocus="this.blur()"/>
	        </label>
    </div>
    <div class="info">
        <label>姓名<input type="text" placeholder="请输入你的姓名" id="name" maxlength="4"/></label>
        <label>年级<input type="text" value="2021级" id="grade" maxlength="8" readonly="readonly"/></label>
        <label>专业班级<input type="text" placeholder="请输入你的专业班级" id="majorClass" maxlength="12"/></label>
        <label>出生年月<input type="text" placeholder="例如：2002.5.20" id="born" maxlength="12"/></label>
        <label>兴趣爱好<input type="text" placeholder="请输入你的兴趣爱好" id="hobby" maxlength="12"/></label>
        <label style="border:none">手机号码<input type="text" placeholder="请输入你的手机号码" id="contact" maxlength="11"/></label>
    </div>
    <div id="choose">
        <span>技术意向</span>
        <img src="${pageContext.request.contextPath }/res/img/Btn_select_righ_nor@2x.png" alt="选择技术方向"/>
    </div>
    <div class="resume">
        <span>个人简介及特长</span><span class="resume_num">0/500</span>
        <textarea maxlength="500" placeholder="请介绍你的个人简历和特长"></textarea>
        
    </div>
    <div class="experience">
        <span>校园或项目经历</span><span class="experience_num">0/500</span>
        <textarea maxlength="1000" placeholder="请描述你的校园或项目经历"></textarea>
        
    </div>
    <div class="futurePlan">
        <span>未来规划</span><span class="futurePlan_num">0/500</span>
        <textarea maxlength="1000" placeholder="请谈谈你的未来规划"></textarea>
    </div>
    <div class="submit">
        <input type="button" value="提交" id="submitBtn"/>
    </div>

    <div id="shade">
        <div>

            <ul class="pp">
            	<li>产品&项目管理</li>
                <li>UI设计</li>
                <li>Web前端</li>
                <li>移动端</li>
                <li>后端</li>
            </ul>
        </div>
    </div>
    
     <div id="test">
        <div>
            <div class="Img">
            	<img src=" " alt="" class="testImg">
            	<img src="${pageContext.request.contextPath }/res/img/Btn_refresh@2x.png" alt="" class="update">
            </div>
            <input type="number" placeholder="请输入验证码答案" id="answer" />
            <input type="button" value="提交" id="answerBtn"/>
        </div>
    </div>
    <script src="${pageContext.request.contextPath }/res/js/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/res/js/small-exif.js"></script>
    <script src="${pageContext.request.contextPath }/res/js/ajaxfileupload.js"></script>
    <script src="${pageContext.request.contextPath }/res/js/HomePage.js"></script>
</body>
</html>