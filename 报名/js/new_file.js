function wait(){
	setTimeout(download,5000);
}

function download(){
	
	const a = document.createElement('a');
 
            a.style.display = 'none';
 
            a.href = entryForm/CompressedPacket/thePdfEntry.zip;
 
            a.download = 报名表汇总.zip;
 
            document.body.appendChild(a);
 
            a.click();
 
            document.body.removeChild(a);
}
