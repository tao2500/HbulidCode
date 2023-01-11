var v_id_div_count = document.getElementById("id-div-count");
var sum=0,quantity=0;
for(var i=1000;i<=9999;i++){
    if(i%13==0&&i%17==0){
        quantity+=1;
        sum+=i;
        document.write(i+"&nbsp;&nbsp;");
        if(quantity%10==0){
            document.write("<br>");
        }
    }
}
document.write("<br>"+"区间中符合条件的数共有"+quantity+"个");
document.write("<br>"+"区间中符合条件的数的累加和为"+sum);