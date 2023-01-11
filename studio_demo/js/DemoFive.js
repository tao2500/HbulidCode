var one = document.getElementsByClassName("one")[0];
var two = document.getElementsByClassName("two")[0];
var three = document.getElementsByClassName("three")[0];
var operation = 0;
function changeOperation(){
	operation = 1;
}
function reduction(){
	if(operation==0){
		one.setAttribute("style",'display: inline');
		two.setAttribute("style",'display: none');
		three.setAttribute("style",'display: none');
	}
	operation=0;
}
function shouwone(){
	one.setAttribute("style","display: inline");
	two.setAttribute("style","display: none");
	three.setAttribute("style",'display: none');
}
function shouwTwo(){
	one.setAttribute("style","display: none");
	two.setAttribute("style","display: inline");
	three.setAttribute("style",'display: none');
}
function shouwthree(){
	one.setAttribute("style","display: none");
	two.setAttribute("style",'display: none');
	three.setAttribute("style","display: inline");
}
