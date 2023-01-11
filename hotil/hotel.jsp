<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>大地酒店管理系统</title>
    </head>
    <body>
    	<h1>欢迎使用酒店管理系统</h1>
    	<div>
    		<form action="contest.jsp" method="post">
    			请选择您的身份:
    			<input name="identity" type="radio" value="Reception" />前台
    			<input name="identity" type="radio" value="waiter" />服务员
    			<input name="identity" type="radio" value="Cleaning" />保洁
    			<input name="identity" type="radio" value="Finance" />财务
    			<br />
    			请输入账号:<input name="id" type="text" />
    			<br />
				请输入密码:<input name="pass" type="password" />
				<br />
				<input type="submit" value="登录"/>
    		</form>
    	</div>
 	</body>
</html>