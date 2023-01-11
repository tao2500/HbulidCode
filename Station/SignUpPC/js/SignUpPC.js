/**
 * Created by lin on 2019/3/7.
 */
window.onload=function(){
    //isIE();
    //判断是否ie
    function isIE() {
        if (!!window.ActiveXObject || "ActiveXObject" in window){
            alert("为了填写更为准确的信息，请更换浏览器或用手机打开此页面进行报名哦！");
            window.opener=null;
            window.open('','_self');
            window.close();
        }
        if(window.external&&window.external.twGetRunPath&&window.external.twGetRunPath().toLowerCase().indexOf("360se")>-1){
            alert("为了填写更为准确的信息，请更换浏览器或用手机打开此页面进行报名哦！");
            window.opener=null;
            window.open('','_self');
            window.close();
        }
    }
        //全局变量得到验证码路径
    var getVerification_imgUrl;

    //上传头像
    var errorMessage = "网络传输有问题，请检查网络连接或刷新页面再次进行操作";
    var PhotoInput=document.getElementById("PhotoInput");
    var img=document.getElementById("Photo");
    Orientation = null;
    PhotoInput.onchange = function () {
        var file = PhotoInput.files[0],
            reader = new FileReader(),
            image = new Image();

        if (file) {
            EXIF.getData(file, function () {
                Orientation = EXIF.getTag(this, 'Orientation');
            });
            reader.onload = function (ev) {
                image.src = ev.target.result;
                image.onload = function () {
                    var imgWidth = this.width,
                        imgHeight = this.height;
                    // 控制上传图片的宽高
                    if (imgWidth > imgHeight && imgWidth > 750) {
                        imgWidth = 750;
                        imgHeight = Math.ceil(750 * this.height / this.width);
                    } else if (imgWidth < imgHeight && imgHeight > 1334) {
                        imgWidth = Math.ceil(1334 * this.width / this.height);
                        imgHeight = 1334;
                    }

                    var canvas = document.createElement("canvas"),
                        ctx = canvas.getContext('2d');
                    canvas.width = imgWidth;
                    canvas.height = imgHeight;
                    if (Orientation && Orientation != 1) {
                        switch (Orientation) {
                            case 6:     // 旋转90度
                                canvas.width = imgHeight;
                                canvas.height = imgWidth;
                                ctx.rotate(Math.PI / 2);
                                // (0,-imgHeight) 从旋转原理图那里获得的起始点
                                ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight);
                                break;
                            case 3:     // 旋转180度
                                ctx.rotate(Math.PI);
                                ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight);
                                break;
                            case 8:     // 旋转-90度
                                canvas.width = imgHeight;
                                canvas.height = imgWidth;
                                ctx.rotate(3 * Math.PI / 2);
                                ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
                                break;
                        }
                    } else {
                        ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
                    }
                    img.src = canvas.toDataURL("image/jpeg", 0.8);
                }
            }
            reader.readAsDataURL(file);
        }
    }
    //从本地获取到图片上传头像
    //PhotoInput.onchange=function() {
    //        var docObj=this;
    //    var imgObjPreview=document.getElementById("Photo");
    //    if(docObj.files &&  docObj.files[0]){
    //        //火狐下，直接设img属性
    //        imgObjPreview.style.display = 'block';
    //        var url=window.URL.createObjectURL(docObj.files[0]); // 得到bolb对象路径，可当成普通的文件路径一样使用，赋值给src;
    //        imgObjPreview.src=url;
    //    }else{
    //        //IE下，使用滤镜
    //        docObj.select();
    //        var imgSrc = document.selection.createRange().text;
    //        imgObjPreview.src=imgSrc;
    //        document.selection.empty();
    //        //图片异常的捕捉，防止用户修改后缀来伪造图片
    //        try{
    //            imgObjPreview.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
    //            imgObjPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
    //        }catch(e){
    //            alert("您上传的图片格式不正确，请重新选择!");
    //            return false;
    //        }
    //        imgObjPreview.style.display = 'block';
    //    }
    //    return true;
    //
    //    //翻转图片并实现压缩
    //
    //    }
    //后台返回的值
    var returnPhotoValue;
    //返回图片到后台
    function UploadImg(){
        $.ajaxFileUpload({
            url:'uploadImg',
            type:'POST',
            secureuri:false,
            fileElementId:'PhotoInput',
            dataType:'string',
            success:function(s) {
                returnPhotoValue = s;
                UploadData();
            },
            error:function() {
                alert("数据接收失败");
            }

        })
    }
    //点击next，转到下一页
    var next=document.getElementById("next");
    next.onclick=function(){
        //姓名
        var Name=document.getElementById("Name");
        NameValue=Name.value;
        //年级
        var Grade=document.getElementById("Grade");
        GradeValue=Grade.value;
        //专业年级
        var MajorClass=document.getElementById("MajorClass");
        MajorClassValue=MajorClass.value;
        //出生年月
        var Born=document.getElementById("Born");
        returnBornValue=Born.value;
        //兴趣爱好
        var Interest=document.getElementById("Interest");
        InterestValue=Interest.value;
        //联系方式
        var PhoneNumber=document.getElementById("PhoneNumber");
        returnPhoneNumberValue=PhoneNumber.value;

        var Photo=document.getElementById("Photo");
        if (Photo.src.split('/').pop()=="box_photo_new.png"){
            alert("  你的美美生活照尚未上传哦！");
        }
        else if(NameValue==""){
            alert("你的尊姓大名尚未填写哦!");
        }
        else if (MajorClassValue==""){
            alert(" 你的专业班级尚未填写哦！");
        }
        else if (returnBornValue =="例：1990.11.13"){
            alert("你的破蛋日尚未填写哦！");
        }
        else if(InterestValue==""){
            alert("你的兴趣爱好尚未填写哦！");
        }
        else if( returnPhoneNumberValue == "手机号码"){
            alert(" 你的手机号码格式错误啦！");
        }
        else if(!(/^1(3|4|5|7|8)\d{9}$/.test(returnPhoneNumberValue))){
         alert("请输入手机号码或确认号码是否正确！");
        }
        else {
            var PageOne = document.getElementById("PageOne");
            var PageTwo = document.getElementById("PageTwo");
            PageOne.style.display = "none";
            PageTwo.style.display = "block";
        }
    }
    //点击返回到开始页面
    var returnPage=document.getElementById("returnPage");
    returnPage.onclick=function () {
        var PageOne=document.getElementById("PageOne");
        var PageTwo=document.getElementById("PageTwo");
        PageOne.style.display="block";
        PageTwo.style.display="none";
    }
    //选择技术意向
var Down = document.getElementById("Down");
var Up = document.getElementById("Up");
var ChooseDirection = document.getElementById("ChooseDirection");
Down.onclick = function () {
    if (Up.style.display == "none" || Up.style.display == "") {
        var ChooseKinds = document.getElementById("ChooseKinds");
        var KindsBg = document.getElementById("KindsBg");
        Down.style.display = "none";
        Up.style.display = "block";
        ChooseKinds.style.display = "block";
        KindsBg.style.display = "block";
    }
    var ChooseKindsLis = ChooseKinds.getElementsByTagName("li");
    for (var i = 0; i < ChooseKindsLis.length; i++) {
        ChooseKindsLis[i].index = i;
        //当选择种类时，鼠标滑过，添加背景图片
        ChooseKindsLis[i].onmouseover = function () {
            var s = this.index;
            ChooseKindsLis[s].style.backgroundImage = "url('../img/message_bg_choose_pre.png')";
        }
        ChooseKindsLis[i].onmouseout = function () {
            var s = this.index;
            ChooseKindsLis[s].style.backgroundImage = "";
        }
        //点击添加选择到input
            ChooseKindsLis[i].onclick = function () {
                var s = this.index;
                ChooseDirection.value = ChooseKindsLis[s].innerHTML;
                Down.style.display = "block";
                Up.style.display = "none";
                ChooseKinds.style.display = "none";
                KindsBg.style.display = "none";
            }
        }
    }
    Up.onclick = function () {
        Down.style.display = "block";
        Up.style.display = "none";
        ChooseKinds.style.display = "none";
        KindsBg.style.display = "none";
    }
    //点击输入input也能实现相同效果
    var ChooseDirection=document.getElementById("ChooseDirection");
    ChooseDirection.onclick=function(){
        if (Up.style.display == "none" || Up.style.display == "") {
            var ChooseKinds = document.getElementById("ChooseKinds");
            var KindsBg = document.getElementById("KindsBg");
            Down.style.display = "none";
            Up.style.display = "block";
            ChooseKinds.style.display = "block";
            KindsBg.style.display = "block";
        }
        else{
            var ChooseKinds = document.getElementById("ChooseKinds");
            var KindsBg = document.getElementById("KindsBg");
            Down.style.display = "block";
            Up.style.display = "none";
            ChooseKinds.style.display = "none";
            KindsBg.style.display = "none";
        }
        var ChooseKindsLis = ChooseKinds.getElementsByTagName("li");
        for (var i = 0; i < ChooseKindsLis.length; i++) {
            ChooseKindsLis[i].index = i;
            //当选择种类时，鼠标滑过，添加背景图片
            ChooseKindsLis[i].onmouseover = function () {
                var s = this.index;
                ChooseKindsLis[s].style.backgroundImage = "url('../img/message_bg_choose_pre.png')";
            }
            ChooseKindsLis[i].onmouseout = function () {
                var s = this.index;
                ChooseKindsLis[s].style.backgroundImage = "";
            }
            //点击添加选择到input
            ChooseKindsLis[i].onclick = function () {
                var s = this.index;
                ChooseDirection.value = ChooseKindsLis[s].innerHTML;
                Down.style.display = "block";
                Up.style.display = "none";
                ChooseKinds.style.display = "none";
                KindsBg.style.display = "none";
            }
        }
    }
    //实现html的placeholder属性效果
    function Placeholder(NoClick,example){
        NoClick.onfocus=function(){
            var NoClickValue=NoClick.value;
            if(NoClickValue==example){
                NoClick.value="";
            }
        }
        NoClick.onblur=function(){
            var NoClickValue=NoClick.value;
            if(NoClickValue.length<=0){
                NoClick.value=example;
            }
        }
    }
     //实现textarea的placeholder属性效果
    function TextareaPlaceholder(NoClick,Disappear){
        //alert("sf");
        NoClick.onfocus=function(){
            var NoClickValue=NoClick.value;
            //alert(NoClickValue.length);
            if(NoClickValue.length>=0){
                Disappear.style.display="none";
            }
        }
        NoClick.onblur=function(){
            var NoClickValue=NoClick.value;
            if(NoClickValue.length<=0){
                Disappear.style.display="block";
            }
        }
    }
    ////出生年月的处理
    var Born=document.getElementById("Born");
    var BornValue="例：1990.11.13";
    Placeholder(Born,BornValue);
    ////联系方式的处理
    var PhoneNumber=document.getElementById("PhoneNumber");
    var PhoneNumberValue="手机号码";
    Placeholder(PhoneNumber,PhoneNumberValue);

    //文本输入的字数限制提醒
    function LimitText(num,val){
        var len=val.value.toString();
        val.onkeyup = function(){
            console.log(len);
            num.innerHTML=len.length;
           //alert(num.innerHTML);
        }
    }
    //个人介绍
    var NumberLimit=document.getElementById("NumberLimit");
    var Introduction=document.getElementById("Introduction");
    Introduction.onkeyup = function(){
        var len=Introduction.value.toString();
        NumberLimit.innerHTML=len.length;
    }
    //校园经历
    var SkillLimit=document.getElementById("SkillLimit");
    var Skill=document.getElementById("Skill");
    Skill.onkeyup = function(){
        var len=Skill.value.toString();
        SkillLimit.innerHTML=len.length;
    }
    //未来规划
    var PlanLimit=document.getElementById("PlanLimit");
    var Plan=document.getElementById("Plan");
    Plan.onkeyup = function(){
        var len=Plan.value.toString();
        PlanLimit.innerHTML=len.length;
    }

    //点击提交
    var submit=document.getElementById("submit");
    submit.onclick=function(){
        //技术意向
        var ChooseDirection=document.getElementById("ChooseDirection");
        ChooseDirectionValue=ChooseDirection.value;
        //个人介绍&技能
        var Introduction=document.getElementById("Introduction");
        IntroductionValue=Introduction.value;
        //项目&工作经历
        var Skill=document.getElementById("Skill");
        SkillValue=Skill.value;
        //未来规划
        var Plan=document.getElementById("Plan");
        PlanValue=Plan.value;

        var Photo=document.getElementById("Photo");
        if (ChooseDirectionValue=="技术意向"){
            alert(" 你的技术意向尚未选择哦");
        }
        else if (IntroductionValue.length==0){
            alert("你的个人介绍及特长尚未填写哦 ");
        }
        else if (SkillValue.length==0){
            alert("你的项目及校园经历尚未填写哦!");
        }
        else if (PlanValue.length==0){
            alert("你的未来规划尚未填写哦！");
        }
        else {
            //跳转到验证码
            UploadVerificationImg();//加载出验证码图片
            var verification_shade = document.getElementById("verification_shade");
            var resultButtom=document.getElementById("resultButtom");
            verification_shade.style.display = "block";
            resultButtom.onclick=function(){
                ////调用传递验证码
                UploadVerification_Result();
            }
        }
    }
    //传递数据的函数
    function UploadData(){
        //姓名
        var Name=document.getElementById("Name");
        NameValue=Name.value;
        //年级
        var Grade=document.getElementById("Grade");
        GradeValue=Grade.value;
        //专业年级
        var MajorClass=document.getElementById("MajorClass");
        MajorClassValue=MajorClass.value;
        //出生年月
        var Born=document.getElementById("Born");
        returnBornValue=Born.value;
        //兴趣爱好
        var Interest=document.getElementById("Interest");
        InterestValue=Interest.value;
        //联系方式
        var PhoneNumber=document.getElementById("PhoneNumber");
        returnPhoneNumberValue=PhoneNumber.value;
        //技术意向
        var ChooseDirection=document.getElementById("ChooseDirection");
        ChooseDirectionValue=ChooseDirection.value;
        //个人介绍&技能
        var Introduction=document.getElementById("Introduction");
        IntroductionValue=Introduction.value;
        //项目&工作经历
        var Skill=document.getElementById("Skill");
        SkillValue=Skill.value;
        //未来规划
        var Plan=document.getElementById("Plan");
        PlanValue=Plan.value;

        var Photo=document.getElementById("Photo");
        //传送数据
        getValue(returnPhotoValue, NameValue, GradeValue, MajorClassValue, returnBornValue, InterestValue, returnPhoneNumberValue, ChooseDirectionValue, IntroductionValue, SkillValue, PlanValue);
    }
    /*验证码刷新页面*/
    var refresh=document.getElementById("refresh");
    refresh.onclick=function(){
        UploadVerificationImg();
    }
    //返回数据给后端
    function  getValue(returnPhotoValue,NameValue,GradeValue,MajorClassValue,returnBornValue,InterestValue,returnPhoneNumberValue,ChooseDirectionValue,IntroductionValue,SkillValue,PlanValue){
    	//alert(returnPhotoValue);
        $.ajax({
            url:'enterForm',   //路径
            type:'POST',               //方法
            cache:false,               //是否缓存
            dataType:'json',           //返回值类型
            data:{                     //传给后端的数据
                "picId":returnPhotoValue,
                "name":NameValue,
                "className":GradeValue,
                "grade":MajorClassValue,
                "birthday":returnBornValue,
                "hobby":InterestValue,
                "phone":returnPhoneNumberValue,
                "intent":ChooseDirectionValue,
                "resume":IntroductionValue,
                "experience":SkillValue,
                "plan":PlanValue
            },
            success:function(getStatus){      //成功时
                if(getStatus.status=="success"){
                    var PageTwo=document.getElementById("PageTwo");
                    var SuccessOut=document.getElementById("SuccessOut");
                    PageTwo.style.display="none";
                    SuccessOut.style.display="block";
                }
                else if(getStatus.status=="error"){
                    alert(getStatus.message);
                }
            },
            error:function(){                //失败
                alert(errorMessage);
            }
        })
    }
    //打开验证码页面
    function UploadVerificationImg(){
        var width="120";
        var height="30";
        $.ajaxFileUpload({
            url:'getVerify',   //路径
            type:'POST',               //方法
            cache:false,               //是否缓存
            dataType:'json',           //返回值类型
            data: {                     //传给后端的数据
                'width':width,
                'height':height
            },
            success:function(getStatus) {
                if(getStatus.status=="error"){
                    alert(getStatus.message);
                }
                else {
                    var verificationImg = document.getElementById("verificationImg");
                    var getImgUrl=verificationImg.src+getStatus.imgURL;
                    //得到验证码图片路径
                    verificationImg.src=getImgUrl;
                }
            },
            error:function() {
                alert("验证码获取失败，请重新尝试！");
                var SuccessOut=document.getElementById("SuccessOut");
                SuccessOut.style.display="block";
            }

        })
    }
    //提交验证码
    function UploadVerification_Result(){
        var verification_shade = document.getElementById("verification_shade");
        var verificationImg=document.getElementById("verificationImg");
        var verificationResult=document.getElementById("verificationResult");
        $.ajaxFileUpload({
            url:'checkVerifyCode',   //路径
            type:'POST',               //方法
            cache:false,               //是否缓存
            dataType:'json',           //返回值类型
            data: {                     //传给后端的数据
                'value':verificationResult.value,
                'imgURL':getVerification_imgUrl
            },
            success:function(getStatus) {
                if(getStatus.status=="success") {
                    ////先调用获取图片接口,后传递数据
                    UploadImg();
                    //显示成功提示
                    var verification_shade=document.getElementById("verification_shade");
                    var PageTwo=document.getElementById("PageTwo");
                    var SuccessOut=document.getElementById("SuccessOut");
                    verification_shade.style.display="none";
                    PageTwo.style.display="none";
                    SuccessOut.style.display="block";
                }
                else if (getStatus.status=="Time-Out")
                {
                    alert(getStatus.message);
                }
                else
                    alert(getStatus.message);
            },
            error:function() {
                alert("数据接收失败");
            }

        })
    }

}