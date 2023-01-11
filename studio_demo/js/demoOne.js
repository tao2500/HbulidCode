//window.onload=gettime();
//var myBell;
//	function gettime(){
//		var hour = document.getElementById("hour");
//		var minute = document.getElementById("minute");
//		var second = document.getElementById("second");
//		settime();
//	}
//	function settime(){
//		var now = new Date();
//		hour.setAttribute("value",now.getHours());
//		minute.setAttribute("value",now.getMinutes());
//		second.setAttribute("value",now.getSeconds());
//		myBell = window.setInterval(settime(),1000);
//	}
//	function suspend(){
//		window.clearInterval(myBell);
//	}



window.onload=gettime()
var myBell
	function gettime(){
		var hour = document.getElementById("hour")
		var minute = document.getElementById("minute")
		var second = document.getElementById("second")
		myBell = window.setInterval(function(){settime()},1000)
	}
	function settime(){
		var now = new Date()
		hour.setAttribute("value",now.getHours())
		minute.setAttribute("value",now.getMinutes())
		second.setAttribute("value",now.getSeconds())
		
	}
	function suspend(){
		window.clearInterval(myBell)
	}


//window.onload=gettime();
//var myBell;
//	function gettime(){
//		var hour = document.getElementById("hour");
//		var minute = document.getElementById("minute");
//		var second = document.getElementById("second");
//		myBell = window.setInterval("settime()",1000);
//	}
//	function settime(){
//		var now = new Date();
//		hour.setAttribute("value",now.getHours());
//		minute.setAttribute("value",now.getMinutes());
//		second.setAttribute("value",now.getSeconds());
//		
//	}
//	function suspend(){
//		window.clearInterval(myBell);
//	}