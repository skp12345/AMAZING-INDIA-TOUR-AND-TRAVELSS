var loaderLimit=350;
var ck_name = /^[A-Za-z0-9_ ]{3,45}$/;
function loginValidate() {
    $("#sign_alert").html("");
    var userEmail = $("#userEmail").val();
    userEmail = $.trim(userEmail);
    var userPassword = $("#userPassword").val();
    userPassword = $.trim(userPassword);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (userEmail == "") {
        $("#userEmailError").html("Please enter your email address").show();
        $("#userEmail").focus();
        return false;
    }
    else if (reg.test(userEmail) == false) {
        $("#userEmailError").html("Please enter valid email address").show();
        $("#userEmail").focus();
        return false;
    }
    else if (userPassword == "") {
        $("#userPwdError").html("Please enter your password").show();
        $("#userPassword").focus();
        return false;
    }
    else {
        userEmail = encodeComponent(userEmail);
        userPassword = encodeComponent(userPassword);
        var parms1 = "user.userEmail=" + userEmail + "&user.userPassword=" + userPassword;
        $("#userLogin").val("Processing..").attr("disabled", true);
        $.ajax({
            type: "POST",
            url: "UserLogin.action",
            dataType: "json",
            data: parms1,
            success: function(html) {
                if (html != undefined && html.status != undefined) {
                    if (html.status == "success") {
                        window.location = "Home";
                    }
//                    else if (html.status == "updatepassword") {
//                        window.location = "NotifyUpdatePwd";
//                    }
                    else if (html.status == "failed") {
                        if (html.msg != undefined && html.msg != "")
                            $("#loginError").html(html.msg).show();
                        $("#userPassword").val("");
                        $("#userLogin").val("Signin").attr("disabled", false);
                    }
                }
            }
        });
    }
}
function encodeComponent(val) {
    if (val != undefined) {
        val = encodeURI(val);
        val = val.replace(/&/g, '%26').replace(/\+/g, '%2B').replace(/\?/g, "%3F");
    }
    return val;
}
function userRegister() {
    
    
    clearErrorMsg();
    $("#register_alert").html("");
    var userName = $("#regUserName").val();
    userName = $.trim(userName);
    var userEmail = $("#regUserEmail").val();
    userEmail = $.trim(userEmail);
    var userPassword = $("#regPassword").val();
    userPassword = $.trim(userPassword);
    var userCpassword = $("#regcPassword").val();
    userCpassword = $.trim(userCpassword);
    var userMobile = $("#userMobile").val();
    userMobile = $.trim(userMobile);
    var userGender = $('input[name="userGender"]:checked').val();
    userGender = $.trim(userGender);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var mobileRegxp = /^([0-9]+)$/;
    if (userName == "") {
        $("#regUserNameError").html("Please enter your name").show();
        $("#regUserName").focus();
        return false;
    }
    else if (ck_name.test(userName) == false) {
        $("#regUserNameError").html("Please enter valid name").show();
        $("#regUserName").focus();
        return false;
    }         
    else if (userEmail == "") {
        $("#regUserEmailError").html("Please enter your email address").show();
        $("#regUserEmail").focus();
        return false;
    }
    else if (reg.test(userEmail) == false) {
        $("#regUserEmailError").html("Please enter valid email address").show();
        $("#regUserEmail").focus();
        return false;
    }
    else if (userPassword == "") {
        $("#regPasswordError").html("Please enter you password").show();
        $("#regPassword").focus();
        return false;
    }

    else if (userPassword.length < 6) {
        $("#regPasswordError").html("Password should be minimum 6 characters length").show();
        $("#regPassword").focus();
        return false;
    }

    else if (userCpassword == "") {
        $("#regcPasswordError").html("Please enter confirm password").show();
        $("#regcPassword").focus();
        return false;
    }
    else if (userCpassword.length < 6) {
        $("#regcPasswordError").html("Confirm Password should be minimum 6 characters length").show();
        $("#regcPassword").focus();
        return false;
    }
    else if (userPassword != userCpassword) {
        $("#regcPasswordError").html("Please enter password and confirm password should be same").show();
        $('#regcPassword').val("");
        $("#regcPassword").focus();
        return false;
    }
    else if (userMobile == "" || userMobile == null) {
        $("#userMobileError").html("Please enter mobile number").show();
        $("#userMobile").focus();
        return false;
    }
    else if (!mobileRegxp.test(userMobile)) {
        $("#userMobileError").html("Please enter valid mobile number").show();
        $("#userMobile").focus();
        return false;
    }
    else if ((userMobile.charAt(0) != 9) && (userMobile.charAt(0) != 8) && (userMobile.charAt(0) != 7))
    {
        $("#userMobileError").html("Please check mobile number should start with either 9 or 8 or 7").show();
        $("#userMobile").focus();
        return false;
    }
    else if (userMobile.length != 10)
    {
        $("#userMobileError").html("Please check your mobile number").show();
        $("#userMobile").focus();
        return false;
    }
    else if (userGender=='' || userGender == null || userGender==undefined) {
        $("#userGenderError").html("Please select gender").show();
        return false;
    }
    else {
        userEmail = encodeComponent(userEmail);
        userName = encodeComponent(userName);
        userPassword = encodeComponent(userPassword);
        userCpassword = encodeComponent(userCpassword);
        var parms1 = "user.userEmail=" + userEmail + "&user.userName=" + userName + "&user.userPassword=" + userPassword + "&user.userCpassword=" + userCpassword + "&user.userMobile=" + userMobile + "&user.userGender=" + userGender;
        $("#regBtn").val("Processing...").attr("disabled", true);
        $.ajax({
            type: "POST",
            url: "UserRegister.action",
            dataType: "json",
            data: parms1,
            success: function(html) {
                $("#regBtn").val("Register").attr("disabled", false);
                if (html != undefined) {
                    if (html.status == "success") {
                        window.location = "Home.action";
                    }
                    else if (html.status == "failed") {
                        if (html.msg != undefined && html.msg != "")
                            $(".errorMsg").html(html.msg).css("color", "red").show();
                        $("#regPassword,#regcPassword").val("");
                    }
                }
            }
        });
    }
}
function clearErrorMsg() {
    $(".error,.errorMsg,.success,.error1").html("").hide();
}
function clearErrorMsg1() {
    $(".error,.errorMsg,.success,.error1").html("").hide();
    $('#servDiv').hide();
}
function clearErrorMsg2() {
    $(".error,.errorMsg,.success,.error1").html("").hide();
    $('#servDiv1').hide();
}
String.prototype.count=function(s1) { 
	return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
}
function trim(str) {
   return str.replace(/^\s+|\s+$/g,"");
}
function countChars() {
    var l = 200;
    var len = $("#userFeedBack").val().length;
    var commas;
    var str = $("#userFeedBack").val();
    var dsr = navigator.userAgent.split("MSIE");
    
    if (dsr[1] != undefined) {
        commas = trim($("#userFeedBack").val()).count('\n');
    }
    else {
        commas = $("#userFeedBack").val().count('\n')
        len = len + commas;
    }
    if (len <= l) {
        $("#txtLen").val((l - len));
    }
    else {
        $("#userFeedBack").val(str.substr(0, 200));
       // $("#userFeedBack").val(str.substr(0,str.length-1));
    }
}
function forgotPassword() {
    $(".errorMsg, .success").html("").hide();
    var userEmail = $("#forgetPwdEmail").val();
    userEmail = $.trim(userEmail);
    var captcha = $("#forgetPwdCaptcha").val();
    captcha = $.trim(captcha);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (userEmail == "") {
        $("#forgetPwdEmailError").html("Please enter your email address").show();
        $("#forgetPwdEmail").focus();
        return false;
    }
    else if (reg.test(userEmail) == false) {
        $("#forgetPwdEmailError").html("Please enter valid email address").show();
        $("#forgetPwdEmail").focus();
        return false;
    }
    else if (!(isValidEmail(userEmail))) {
        $("#forgetPwdEmailError").html("Please enter valid email address").show();
        $("#forgetPwdEmail").focus();
        return false;
    }
    else if (captcha == "") {
        $("#forgetPwdCaptchaError").html("Please enter above characters").show();
        $("#forgetPwdCaptcha").focus();
        return false;
    }
    else {
        userEmail = encodeComponent(userEmail);
        captcha = encodeComponent(captcha);
        var parms = "user.userEmail=" + userEmail + "&user.captcha=" + captcha;
        $("#frgBtn").val("Processing...").attr("disabled", true);
        $.ajax({
            type: "POST",
            url: "PasswordRecovery",
            dataType: "json",
            data: parms,
            success: function(html) {
                $("#frgBtn").val("Forgot Password").attr("disabled", false);
                if (html != undefined && html.status != undefined) {
                    if (html.status == "success") {
                        //alert("Password has been sent to your email address");
                        $(".errorMsg").html("").hide();
                        $("#forgot_pass_suc").html("Password reset link has been sent to your email address").show();
                        refreshCaptcha();
                        clearValues();
                    }
                    else if (html.status == "failed") {
                        refreshCaptcha();
                        if (html.msg != undefined && html.msg != "")
                            $("#forgot_pass").html(html.msg).show();
                    }
                }
            }
        });
    }
}
function refreshCaptcha() {
    $("#img_captcha").attr("src", "./CaptchaServlet?str=" + new Date().getTime() + "&capLen=6");
}
function isValidEmail(str) {
    var arrayEmail = str.split("@");
    var beforeText = arrayEmail[0].charAt(arrayEmail[0].length - 1);
    var txtPattern = /[a-zA-Z0-9]/;
    var strRegExp = /[a-zA-z]/;
    if (arrayEmail[0].length < 4 || arrayEmail[0].length > 32) {
        return false;
    } else if (!txtPattern.test(beforeText)) {
        //alert("Please provide a valid email address ");
        return false;
    } else if (!strRegExp.test(arrayEmail[0])) {
        return false;
    } else {
        var pattern = /^[a-zA-Z0-9]+([\w0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
        //var pattern1 =/^[a-zA-Z]+([\w0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
        //var pattern =/^[a-zA-z]+([\.]?\w+)@\w+([\.]?\w+)(\.\w{2,3})+$/;
        if (!pattern.test(str)) {
            return false;
        }
        return true;
    }
}
function clearValues() {
    $('.txtfield,.rtxtfield').val("");
    $('#servDiv').hide();
}
function emailSubscription() {
    $(".errorMsg, .success").html("").hide();
    var userEmail = $("#subscribeEmail").val();
    userEmail = $.trim(userEmail);
    if (userEmail == "Enter Your Email Address" || userEmail == "") {
        $("#subscribeEmailError").html("Please enter your email address").show();
        $("#subscribeEmail").focus();
        return false;
    }
    else if (!(isValidEmail(userEmail))) {
        $("#subscribeEmailError").html("Please enter valid email address").show();
        $("#subscribeEmail").focus();
        return false;
    }
    else {
        var parms1 = "user.userEmail=" + userEmail;
        $("#subscribe").val("Processing...").attr("disabled", true);
        $.ajax({
            type: "POST",
            url: "EmailSubscribe",
            dataType: "json",
            data: parms1,
            success: function(data) {
                $("#subscribe").val("Subscribe").attr("disabled", false);
                if (data != undefined) {
                    if (data.status != undefined) {
                        if (data.status == "success") {
                            $('#subscribe_alert_success').html("Your email subscribed Successfully").show();
                        }
                        else if (data.status == "exists") {
                            $('#subscribe_alert').html("Your email already subscribed").show();
                        }
                    }
                }
                $("#txt_email").val("Enter Your Email Address");
            }
        });
    }
}
function checkPinService() {
    $(".errorMsg").html("").hide();
    var pinRegxp = /^([0-9]+)$/;
    var pincode = $("#servicePin").val();
    pincode = $.trim(pincode);
    if (pincode == "") {
        $("#servicePinError").html("Please enter pincode").show();
        $("#servicePin").focus();
        return false;
    }
    else if (pincode.length != 6) {
        $("#servicePinError").html("Pincode should be 6 characters length").show();
        $("#servicePin").focus();
        return false;
    }
    else if (!pinRegxp.test(pincode)) {
        $("#servicePinError").html("Please enter numbers only for pincode").show();
        $("#servicePin").focus();
        return false;
    }
    else {
        var parms = "pincode=" + pincode;
        $("#servBtn").val("Processing...").attr("disabled", true);
        $.ajax({
            type: 'POST',
            url: 'CheckPinServiceability',
            data: parms,
            dataType: "json",
            success: function(json) {
                $("#servBtn").val("Check Pincode").attr("disabled", false);

                if (json != undefined && json != null) {
                    if (json.status != undefined && json.status != "") {
                        if (json.status == "success") {
                            var data = json.data;
                            if (data != null && data != undefined) {
                                $('#servDiv').show();
                                var json = data[0];
                                var json2 = data[1];
                                if (json != null && json != undefined && json2 != null && json2 != undefined) {
                                    var cod = json.cod;
                                    var online = json2.online;
                                    if (cod != undefined && cod == 'yes') {
                                        $('#sercod').removeClass().addClass('rightmark').html("COD serviceable");
                                    }
                                    else {
                                        $('#sercod').removeClass().addClass('wrongmark').html("COD not serviceable");
                                    }
                                    if (online != undefined && online == 'yes') {
                                        $('#seronline').removeClass().addClass('rightmark').html("Online serviceable");
                                    }
                                    else {
                                        $('#seronline').removeClass().addClass('wrongmark').html("Online not serviceable");
                                    }
                                }
                            }
                        }
                        else {
                            $('#sercod').removeClass().addClass('wrongmark').html("COD not serviceable");
                            $('#seronline').removeClass().addClass('wrongmark').html("Online not serviceable");
                        }
                    }
                }
            }
        });

    }
}
function sendFeedBack() {
    $(".errorMsg").html("").hide();
    var userEmail = $("#userFeedBackEmail").val();
    var reason = $("#reason").val();

    userEmail = $.trim(userEmail);
    var userFeedBack = $("#userFeedBack").val();
    userFeedBack = $.trim(userFeedBack);
    if (userEmail == "") {
        $("#userFeedBackEmailError").html("Please enter your email address").show();
        $("#userFeedBackEmail").focus();
        return false;
    }
    else if (!(isValidEmail(userEmail))) {
        $("#userFeedBackEmailError").html("Please enter valid email address").show();
        $("#userFeedBackEmail").focus();
        return false;
    }
    else if(reason==null || reason=='' ){
        
        $("#reasonError").html("Please select reason").show();
        $("#reason").focus();
        return false;
    }
    else if (userFeedBack == "" || userFeedBack.length == 0) {
        $("#userFeedBackError").html("Please enter your feedback").show();
        $("#userFeedBack").focus();
        return false;
    }
    else if (userFeedBack.length > 400) {
        $("#userFeedBackError").html("Your feedback should not exceed 400 characters").css("color", "red").show();
        $("#userFeedBack").focus();
        return false;
    }
    else {
        $("#feebackBtn").attr("disabled", true).val("Please...Wait...");
        var params = "feedBackDTO.userEmail=" + userEmail + "&feedBackDTO.userFeedBack=" + userFeedBack+"&feedBackDTO.reason="+reason;
        $.ajax({
            type: "POST",
            url: "SubmitFeedBack",
            dataType: "json",
            data: params,
            success: function(html) {

                $("#feebackBtn").attr("disabled", false).val("Submit");
                if (html != undefined && html.status != undefined) {

                    if (html.status == "success") {
                        $("#feedback_alert_success").html("Thank you for providing your feedback").show();
                        $("#feedback_alert").html("").hide();
                        $("#reason").val("");
                        $("#userFeedBack").val("");
                        $("#txtLen").val("200");

                    }
                    else if (html.status == "failed") {
                        if (html.msg != "")
                            $("#feedback_alert").html(html.msg).show();
                        else
                            $("#feedback_alert").html("Some error occrred...Please try again").show();
                    }
                    else {
                    }
                }
            }
        });
    }
}
String.prototype.count = function(s1) {
    return (this.length - this.replace(new RegExp(s1, "g"), '').length) / s1.length;
}
function  getordertrack()
{

    var mobileNo = $("#mobileNo").val();
    mobileNo = $.trim(mobileNo);
    var orderno = $("#orderId").val();
    orderno = $.trim(orderno);
    var mobileRegxp = /^([0-9]+)$/;
    if (orderno == "" || orderno == null) {
        $("#orderIdError").html("Please enter order number").show();
        $("#orderId").focus();
        return false;
    }
    else if (mobileNo == "" || mobileNo == null) {
        $("#mobileNoError").html("Please enter mobile number").show();
        $("#mobileNo").focus();
        return false;
    }
    else if (!mobileRegxp.test(mobileNo)) {
        $("#mobileNoError").html("Please enter valid mobile number").show();
        $("#mobileNo").focus();
        return false;
    }
    else if ((mobileNo.charAt(0) != 9) && (mobileNo.charAt(0) != 8) && (mobileNo.charAt(0) != 7))
    {
        $("#mobileNoError").html("Please check mobile number should start with either 9 or 8 or 7").show();
        $("#mobileNo").focus();
        return false;
    }
    else if (mobileNo.length != 10)
    {
        $("#mobileNoError").html("Please check your mobile number").show();
        $("#mobileNo").focus();
        return false;
    }
    document.trackOrder.action = 'TrackUserOrder';
    document.trackOrder.submit();
}
function inactDivs() {
    $("#tab1,#tab2,#tab3,#tab4,#tab5").removeClass("current");
    $("#div1,#div2,#div3,#div4,#div5").hide();
}

function openDiv(tab,type) {
    $(".errorMsg, .success,.error").html("").hide();
    if(type==''){
    if (tab != undefined && tab != null) {
        inactDivs();
        $("#" + tab).addClass("current");
        if (tab == "tab1")
            $("#div1").show();
        else if (tab == "tab2")
            $("#div2").show();
        else if (tab == "tab3")
            window.location="OrderHistory"
        else if (tab == "tab4")
            $("#div4").show();
        else if (tab == "tab5")
            $("#div5").show();
        $("#divid1").html("");
        $("#divid2").html("");
        $("#show_mes").html("");
    }
}else{
    if(type=='orderHistory'){
        window.location="OrderHistory"
    }else{
    $('#pageType').val(type);
    document.orderForm.action='MyAccount';
    document.orderForm.submit();
    }
}
}
function saveDetails() {
    $(".errorMsg, .success").html("").hide();
    var userName = $("#myaccName").val();
    var tempuserNamee = userName;
    var userMobile = $("#myaccMobNo").val();
    var userDob = $("#datepicker").val();
    var userGender = $('input[name="userGender"]:checked').val();
    userGender = $.trim(userGender);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var phoneRegxp = /^([0-9]+)$/;
    if (userName == "") {
        $("#myaccNameError").html("Please enter name").show();
        $("#myaccName").focus();
        return false;
    }
    else if (ck_name.test(userName) == false) {
        $("#myaccNameError").html("Please enter valid name").show();
        $("#myaccName").focus();
        return false;
    }  
    else if (userName.length > 45) {
        $("#myaccNameError").html("Name should be 45 characters or less").show();
        $("#myaccName").focus();
        return false;
    }else if (userGender=='' || userGender == null || userGender==undefined) {
        $("#userGenderError1").html("Please select gender").show();
        return false;
    } 
    else if (userMobile == "") {
        $("#myaccMobNoError").html("Please enter your mobile number").show();
        $("#myaccMobNo").focus();
        return false;
    }
    else if ((userMobile.charAt(0) != 9) && (userMobile.charAt(0) != 8) && (userMobile.charAt(0) != 7))
    {
        $("#myaccMobNoError").html("Mobile number should start with either 9 or 8 or 7").show();
        $("#myaccMobNo").focus();
        return false;
    }
    else if (userMobile.length != 10)
    {
        $("#myaccMobNoError").html("Mobile number should be 10 characters length").show();
        $("#myaccMobNo").focus();
        return false;
    }
    else if (phoneRegxp.test(userMobile) != true)
    {
        $("#myaccMobNoError").html("Please enter only numeric values for mobile number").show();
        $("#myaccMobNo").focus();
        return false;
    }else if(userDob==""){
        $("#datepickerError").html("Please enter date of birth").show();
       // $("#datepicker").focus();
        return false;
    }
    else {
        userName = encodeComponent(userName);
        userGender = encodeComponent(userGender);
        userMobile = encodeComponent(userMobile);
        var parms1 = "user.userName=" + userName + "&user.userGender=" + userGender + "&user.userMobile=" + userMobile+"&user.userDob="+userDob;
       // $("#genBtn").val("Processing...").attr("disable", true);
        openLoader();
        $.ajax({
            type: "POST",
            url: "SaveGeneral.action",
            dataType: "json",
            data: parms1,
            success: function(html) {
                setTimeout(function(){
                    closeLoader();
                if (html != null && html != undefined) {

                    if (html.status != undefined) {
                        if (html.status == "success") {
                            $(".errorMsg").html("").hide();
                            $("#divid1_suc").html("Your information has been updated successfully").show();
                            //setTimeout('addDot()',3000);
                            if (tempuserNamee.length > 30)
                                tempuserNamee = tempuserNamee.substring(0, 29) + "...";
                            $("#uname").html(tempuserNamee);
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "")
                                $("#divid1").html(html.msg).show();
                            else
                                $("#divid1").html("Your information updating failed").show();
                        }
                        else if (html.status == "logout") {
                            window.location = "Home.action";
                        }
                    }
                }
               // $("#genBtn").val("Save").attr("disable", false);
               },loaderLimit);
            }
        });
    }
}
function saveShippingDetails() {
    $(".errorMsg,.success").html("").hide();
    var userAddress = $("#shipAddress").val();
    var userState = $("#shipState").val();
    var userCity = $("#shipCity").val();
    var userPin = $("#shipPin").val();
    var phoneRegxp = /^([0-9]+)$/;

    if (userAddress == "") {
        $("#shipAddressError").html("Please enter address").show();
        $("#shipAddress").focus();
        return false;
    }
    else if (userAddress.length > 200) {
        $("#shipAddressError").html("Please enter address should be 200 characters or less").show();
        $("#shipAddress").focus();
        return false;
    }
    else if (userState == "" || userState == "0") {
        $("#shipStateError").html("Please select state").show();
        $("#shipState").focus();
        return false;
    }
    else if (userState.length > 50) {
        $("#shipStateError").html("Please enter state should be 50 characters or less").show();
        $("#shipState").focus();
        return false;
    }
    else if (userCity == "" || userCity == "Select city") {
        $("#shipCityError").html("Please Select city").show();
        $("#shipCity").focus();
        return false;
    }
    else if (userCity.length > 50) {
        $("#shipCityError").html("Please enter city should be 50 characters or less").show();
        $("#shipCity").focus();
        return false;
    }
    else if (userPin == "") {
        $("#shipPinError").html("Please enter pincode").show();
        $("#shipPin").focus();
        return false;
    }
    else if (userPin.length != 6) {
        $("#shipPinError").html("Please enter pincode should be 6 characters length").show();
        $("#shipPin").focus();
        return false;
    }
    else if (phoneRegxp.test(userPin) != true)
    {
        $("#shipPinError").html("Please enter only numeric values for pincode").show();
        $("#shipPin").focus();
        return false;
    }
    else {

        userAddress = encodeComponent(userAddress);
        userState = encodeComponent(userState);
        userCity = encodeComponent(userCity);
        userPin = encodeComponent(userPin);
        //$("#shipBtn").val("Processing...").attr("disabled", true);
        var parms1 = "user.userAddress=" + userAddress + "&user.userState=" + userState + "&user.userCity=" + userCity + "&user.userPin=" + userPin;
        openLoader();
        $.ajax({
            type: "POST",
            url: "SaveShippingDetails",
            dataType: "json",
            data: parms1,
            success: function(html) {
                setTimeout(function(){
                    closeLoader();
                if (html != null && html != undefined) {
                    if (html.status != undefined) {
                        if (html.status == "success") {
                            $(".errorMsg").html("").hide();
                            $("#shipping_success").html("Shipping details has been updated successfully").show();
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "")
                                $("#shippingErrorMsg").html(html.msg).show();
                            else
                                $("#shippingErrorMsg").html("Shipping details updating failed..Please try again").show();
                        }
                        else if (html.status == "logout") {
                            window.location = "Home";
                        }
                    }
                }
               // $("#shipBtn").val("Save").attr("disabled", false);
                },loaderLimit);
            }
        });
    }
}
function changeEamilAddress() {

    $(".errorMsg,.success").html("").hide();
    var userEmail = $("#userCurrentEmail").val();
    userEmail = $.trim(userEmail);
    var userNewEmail = $("#userNewEmail").val();
    userNewEmail = $.trim(userNewEmail);
    var userCEmail = $("#userConfirmEmail").val();
    userCEmail = $.trim(userCEmail);
    var encode = $("#encodedId").val();
    if (userEmail == "") {
        $("#userCurrentEmailError").html("Please enter current email address").show();
        $("#userCurrentEmail").focus();
        return false;
    }
    else if (!(isValidEmail(userEmail))) {
        $("#userCurrentEmailError").html("Please enter valid email address").show();
        $("#userCurrentEmail").focus();
        return false;
    }
    else if (userNewEmail == "") {
        $("#userNewEmailError").html("Please enter new email address").show();
        $("#userNewEmail").focus();
        return false;
    }
    else if (!(isValidEmail(userNewEmail))) {
        $("#userNewEmailError").html("Please enter valid email address").show();
        $("#userNewEmail").focus();
        return false;
    }
    else if (userCEmail == "") {
        $("#userConfirmEmailError").html("Please enter confirm email address").show();
        $("#userConfirmEmail").focus();
        return false;
    }
    else if (userCEmail != userNewEmail) {
        $("#userConfirmEmailError").html("New email address and confirm email adresses should be same").show();
        $("#userConfirmEmail").focus();
        return false;
    }
    else {

        // $("#emailBtn").val("Processing...").attr("disabled", true);
        var parms = "user.userEmail=" + userEmail + "&user.userCEmail=" + userCEmail + "&user.userNewEmail=" + userNewEmail + "&user.encodedId=" + encode;
        openLoader();
        $.ajax({
            type: "POST",
            url: "ChangeEmail",
            dataType: "json",
            data: parms,
            success: function(html) {
                setTimeout(function (){
                    closeLoader();
                if (html != null && html != undefined) {
                    if (html.status != undefined) {
                        if (html.status == "success") {
                            $(".errorMsg").html("").hide();
                            $("#emailErrorDiv_suc").html("We have sent an email to new email address for re-confirmation").show();
                            $("#userConfirmEmail, #userNewEmail").val("");
                            $("#emailBtn").val("Change Email Address").attr("disabled", false);
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "")
                                $("#emailErrorDiv").html(html.msg).show();
                            else
                                $("#emailErrorDiv").html("Some error occured...Please try again").show();
                            $("#userConfirmEmail, #userNewEmail").val("");
                            $("#emailBtn").val("Change Email Address").attr("disabled", false);
                        }
                        else if (html.status == "logout") {
                            window.location = "Home";
                        }
                    }
                }
                },loaderLimit);
            }
        });
    }
}
function changePassword() {

    $("#show_mes_suc,#show_mes").html("").hide();
    var uid = $("#encode").val();
    var pass = $("#myaccUserPassword").val();
    pass = $.trim(pass);
    var newpass = $("#myaccUserNewPassword").val();
    newpass = $.trim(newpass);
    var cpass = $("#myaccUserCPassword").val();
    cpass = $.trim(cpass);
    if (pass == '') {

        $("#myaccUserPasswordError").html("Please enter your password").show();
        $("#myaccUserPassword").focus();


        return false;
    }
//    else if (pass.length < 6) {
//        $("#myaccUserPasswordError").html("Password should be minimum 6 characters length").show();
//        $("#myaccUserPassword").focus();
//        return false;
//    }
    else if (newpass == '') {
        $("#myaccUserNewPasswordError").html("Please enter new password").show();
        $("#myaccUserNewPassword").focus();
        return false;
    }
     else if (newpass.length < 6) {
        $("#myaccUserNewPasswordError").html("Password should be minimum 6 characters length").show();
        $("#myaccUserNewPassword").focus();
        return false;
    }
    else if (newpass == pass) {

        $("#myaccUserNewPasswordError").html("Current password and new passwords should not be same").show();
        $("#myaccUserNewPassword").focus();
        return false;
    }
    else if (cpass == '') {
        $("#myaccUserCPasswordError").html("Please enter confirm passwords").show();
        $("#myaccUserCPassword").focus();
        return false;
    }
    else if (cpass.length < 6) {
        $("#myaccUserCPasswordError").html("Password should be minimum 6 characters length").show();
        $("#myaccUserCPassword").focus();
        return false;
    }
    else if (newpass != cpass) {
        $("#myaccUserCPasswordError").html("New password and confirm password should be same").show();
        $("#myaccUserCPassword").focus();
        return false;
    }
   // $("#pwdBtn").val("Processing...").attr("disabled", true);
    var parms1 = "user.encodedId=" + uid + "&user.userPassword=" + pass + "&user.userNewPassword=" + newpass + "&user.userCpassword=" + cpass;
    openLoader();
    $.ajax({
        type: "POST",
        url: "ChangePassword",
        dataType: "json",
        data: parms1,
        success: function(html) {
            setTimeout(function (){
                closeLoader()
            if (html != null && html != undefined) {
                if (html.status != undefined) {
                    if (html.status == "success") {

                        $("#show_mes_suc").html("Password updated successfully").show();

                        $("#myaccUserPassword").val("");
                        $("#myaccUserNewPassword").val("");
                        $("#myaccUserCPassword").val("");
                        // alert("Password updated successfully");

                    }
                    else if (html.status == "failed") {

                        if (html.msg != undefined && html.msg != "")
                            $("#show_mes").html("Incorrect current password entered, please try again").css("color", "red").show();
                        else {
                            alert("Password updating failed...Please try again");
                        }

                        $("#myaccUserPassword").focus();
                    }
                }
            }
            //$("#pwdBtn").val("Change Password").attr("disabled", false);
            },loaderLimit);
        }
    });

}






function updateUserEmailAddress() {

    $(".error, .errorMsg").hide();
    var data = $("#data").val();
    var userEmail = $("#oldUserEmail").val();
    userEmail = $.trim(userEmail);
    var userPassword = $("#oldUserPassword").val();
    userPassword = $.trim(userPassword);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (userEmail == "") {
        $("#oldUserEmailError").html("Please enter old email address").show();
        $("#oldUserEmail").focus();
        return false;
    }
    else if (reg.test(userEmail) == false) {
        $("#oldUserEmailError").html("Please enter valid email address").show();
        $("#oldUserEmail").focus();
        return false;
    }
    else if (!(isValidEmail(userEmail))) {
        $("#oldUserEmailError").html("Please enter valid email address").show();
        $("#oldUserEmail").focus();
        return false;
    }
    else if (userPassword == "") {
        $("#oldUserPasswordError").html("Please enter old account password").show();
        $("#oldUserPassword").focus();
        return false;
    }
    $("#pwdBtn").val("Processing...").attr("disabled", true);
    var parms = "user.userPassword=" + userPassword + "&user.userEmail=" + userEmail + "&data=" + data;
    $.ajax({
        type: "POST",
        url: "ChangeUserEmailAddress",
        dataType: "json",
        data: parms,
        success: function(html) {
            if (html != null && html != undefined) {
                if (html.status != undefined) {
                    if (html.status == "success") {
                        window.location = "EmailChangeConfirm?msg=" + html.data;
                    }
                    else if (html.status == "failed") {
                        if (html.msg != undefined && html.msg != "")
                            $("#showError").html(html.msg).show();
                        else
                            $("#pwdSucDiv").html("Password updating failed...Please try again").show();
                        $("#oldUserPassword,#userNewPassword, #userCpassword").val("");
                        $("#emailBtn").val("Update Email Address").attr("disabled", false);
                    }
                    else {
                        window.location = "Home";
                    }
                }
            }

        }
    });
}

function updateUserPassword() {

    $(".errorMsg").hide();
    var userEmail = $("#data").val();
    var userNewPassword = $("#userNewPassword").val();
    userNewPassword = $.trim(userNewPassword);
    var userCpassword = $("#userCpassword").val();
    userCpassword = $.trim(userCpassword);
    if (userNewPassword == "") {
        $("#verifyUserNewPasswordError").html("Please enter new password").show();
        $("#userNewPassword").focus();
        return false;
    }
    else if (userNewPassword.length < 6) {
        $("#verifyUserNewPasswordError").html("Password should be minimum 6 characters").show();
        $("#userNewPassword").focus();
        return false;
    }
    else if (userCpassword == "") {
        $("#verifyUserCPasswordError").html("Please enter confirm password").show();
        $("#userCpassword").focus();
        return false;
    }
    else if (userNewPassword != userCpassword) {
        $("#verifyUserCPasswordError").html("New password and confrim passwords should be same").show();
        $("#userCpassword").focus();
        return false;
    }
    $("#pwdBtn").val("Processing...").attr("disabled", true);
    var parms = "user.userNewPassword=" + userNewPassword + "&user.userCpassword=" + userCpassword + "&user.userEmail=" + userEmail;
    $.ajax({
        type: "POST",
        url: "ChangeUserPassword",
        dataType: "json",
        data: parms,
        success: function(html) {
            if (html != null && html != undefined) {
                if (html.status != undefined) {
                    if (html.status == "success") {
                        //$("#pwdSucDiv").html("Password has been updated successfully").show();
                        //$("#userNewPassword, #userCpassword").val("");
                        //$("#pwdBtn").val("Update Password").attr("disabled",false);
                        window.location = "PwdChangeConfirm?msg=" + html.data;
                    }
                    else if (html.status == "failed") {
                        if (html.msg != undefined && html.msg != "")
                            $("#pwdError").html(html.msg).show();
                        else
                            $("#pwdError").html("Password updating failed...Please try again").show();
                        $("#userNewPassword, #userCpassword").val("");
                        $("#pwdBtn").val("Update Password").attr("disabled", false);
                    }
                    else {
                        window.location = "Home";
                    }
                }
            }

        }
    });
}

function updateGuestUserPassword(email) {//UpdateGuestUserPassword

    $(".errorMsg").hide();
    var userEmail = email;
    var userNewPassword = $("#userNewPassword").val();
    userNewPassword = $.trim(userNewPassword);
    var userCpassword = $("#userCpassword").val();
    userCpassword = $.trim(userCpassword);
    if (userNewPassword == "") {
        $("#verifyUserNewPasswordError").html("Please enter new password").show();
        $("#userNewPassword").focus();
        return false;
    }
    else if (userNewPassword.length < 6) {
        $("#verifyUserNewPasswordError").html("Password should be minimum 6 characters").show();
        $("#userNewPassword").focus();
        return false;
    }
    else if (userCpassword == "") {
        $("#verifyUserCPasswordError").html("Please enter confirm password").show();
        $("#userCpassword").focus();
        return false;
    }
    else if (userNewPassword != userCpassword) {
        $("#verifyUserCPasswordError").html("New password and confrim passwords should be same").show();
        $("#userCpassword").focus();
        return false;
    }
    $("#pwdBtn").val("Processing...").attr("disabled", true);
    var parms = "user.userNewPassword=" + userNewPassword + "&user.userCpassword=" + userCpassword + "&user.userEmail=" + userEmail;
    $.ajax({
        type: "POST",
        url: "UpdateGuestUserPassword",
        dataType: "json",
        data: parms,
        success: function(html) {
            if (html != null && html != undefined) {
                if (html.status != undefined) {
                    if (html.status == "success") {
                        //$("#pwdSucDiv").html("Password has been updated successfully").show();
                        //$("#userNewPassword, #userCpassword").val("");
                        //$("#pwdBtn").val("Update Password").attr("disabled",false);
                        window.location = "PwdChangeConfirm?msg=" + html.data;
                    }
                    else if (html.status == "failed") {
                        if (html.msg != undefined && html.msg != "")
                            $("#pwdError").html(html.msg).show();
                        else
                            $("#pwdError").html("Password updating failed...Please try again").show();
                        $("#userNewPassword, #userCpassword").val("");
                        $("#pwdBtn").val("Update Password").attr("disabled", false);
                    }
                    else {
                        window.location = "Home";
                    }
                }
            }

        }
    });
}


function openLoader(){
	$("#loaderDiv").css({
	    "visibility" : "visible",
	    "opacity"  : "1"
    });
	$(".black-frame2").css({
	    "visibility" : "visible"
	});
}
function closeLoader(){
	$("#loaderDiv").css({
	    "visibility" : "hidden",
	    "opacity"  : "0"
    });
	$(".black-frame2").css({
	    "visibility" : "hidden"
	});
}
