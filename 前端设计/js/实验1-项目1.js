var v_id_div_count = document.getElementById("id-div-count");
var i=1,j=1;
for(i=1; i<=9; i++) {
    for(j=1;j<=i;j++){
        document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;");  
    }
    document.write("<br>")
}