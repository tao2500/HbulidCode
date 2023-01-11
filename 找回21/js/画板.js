var myVar;
 
function myFunction() {
    myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
    alert("Hello!");
}