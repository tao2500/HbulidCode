
function displayCitations(){
	var quote=document.getElementsByTagName("blockquote");
	for(var i=0;i<quote.length;i++){
		if(!quote[i].getAttribute("cite")) continue;
		var url=quote[i].getAttribute("city");
		var quoteChildren=quote[i].getElementsByClassName('*');
		if(quoteChildren.length<1) continue;
		var elem=quoteChildren[quoteChildren.length-1];
		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("herf",url);
		var superscript=document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
		alert("加载完成");
	}
}
addLoadEvent(displayCitations());
function addLoadEvent(func){//P83
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