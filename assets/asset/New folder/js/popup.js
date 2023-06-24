var dlist = new Array();
var showH = true;
var showG = true;
var showV = true;
var vurl = "";
var inBag = new Array();
var cartItems = 0;
var codflag = false;
var onlineflag = false;
var loading = "<img src='../images/loader.gif' alt='Loading...'/>";
var loaderLimit = 150;
function fillBad(data) {
    for (var i = 0; i < data.length; i++) {
        inBag.push(data[i].did);
    }
}
function loadPage(type) {
    if (type != undefined && type != "") {
        var action = "";
        var ex = $("#exflag").val();
        if (type == "home") {
            if (ex == "true")
                loadPage('exclusive');
            else
                action = "Home";
        }
        else if (type == "hot-deals") {
            action = "HotDeals";
        }
        else if (type == "track-order") {
            action = "TrackOrder";
        }
        else if (type == "contact-us") {
            action = "Contact";
        }
        else if (type == "my-accouont") {
            action = "MyAccount";
        }
        else if (type == "logout") {
            logout();
        }
        else if (type == "email-login") {
            if (ex == "true")
                action = "ExRegister";
            else
                action = "Register";
        }
        else if (type == "checkout-shipping") {
            if (ex == "true")
                action = "ExCheckOutShipping";
            else
                action = "CheckOutShipping";
        }
        else if (type == 'combos') {
            action = "Combos";
        }
        else if (type == 'combos') {
            loadExDeals();
        }
        if (action != "") {
            window.location = action;
        }
    }
}
function loadPage1(type, paramVal) {
    if (type == 'exclusive') {
        window.location = "WhaakyClub?u=" + paramVal;
    }
}
function loadExDeals() {
    window.location = "WhaakyClub?u=s";
}
function loadPopUp(type) {
    closePopUp();

    if (type != undefined && type != "") {
        if (type == "login") {
            $("#loginDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "40%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }
        else if (type == "register") {
            $("input:radio").removeAttr("checked");
            $("#registerDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "50%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }
        else if (type == "forgotPwd") {
            $("#forgotPwdDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "40%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }
        else if (type == "subscribe") {
            $("#subscribeDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "40%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }
        else if (type == "feedback") {
            $("#txtLen").val("200");
            $("#feedbackDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "40%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }
        else if (type == "checkpin") {
            $("#checkpinDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "40%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }
        else if (type == "exclusive-deals") {
            $("#exclusiveDiv").css({
                "visibility": "visible",
                "opacity": "1",
                "top": "40%"
            });
            $(".black-frame").css({
                "visibility": "visible"
            });
        }

    }

}
function enlargeImage(imagePath) {

    closePopUp();

    if (imagePath != undefined && imagePath != "") {
        $("#feedbackImageDiv").css({
            "visibility": "visible",
            "opacity": "1",
            "top": "40%"
        });
        $(".black-frame").css({
            "visibility": "visible"
        });
        var newImg = "<img class='imgclass' style='width: 550px;' src='" + imagePath + "'></img>";

        $('.imagediv').html(newImg).show();
        $(".imagediv").animate({
            left: '350px',
            height: '400px',
            width: '820px'
        });
        $(".imgclass").animate({
            //opacity:'0.5',
            left: '350px',
            height: '400px',
            width: '830px'
        });
    }
}
function closePopUp() {
    $("#codBtn").attr("disabled", false).val("Place Order");
    $(".black-frame").css({"visibility": "hidden"});
    $(".black-frame2").css({"visibility": "hidden"});
    $(".errorMsg,.error,.success,.error1").html("").hide();
    $("#loginDiv,#registerDiv,#forgotPwdDiv,#subscribeDiv,#feedbackDiv,#checkpinDiv,#chkPinServMsgDiv,#paymentAlertDiv,#exclusiveDiv,#feedbackImageDiv").css({
        "visibility": "hidden",
        "opacity": "0",
        "top": "20%"
    });
    clearValues();
}
function addToCart(did, cstype, stock) {

    if (stock != undefined && stock > 0) {
        var parms1 = "did=" + did + "&type=" + cstype;
        openLoader();
        $.ajax({
            type: "POST",
            url: "AddToCart",
            data: parms1,
            dataType: "json",
            success: function(html) {
                setTimeout(function() {
                    closeLoader();
                    if (html != "" && html != undefined) {
                        var data = html.data;
                        inBag.push(did);
                        if (cstype == 'cart') {
                            if (html.status == "exist") {
                                //alert("Deal already added to the cart.");
                            } else {
                                if (html.count != undefined && html.count != "")
                                    $("#cartList").html("(" + html.count + ")");
                                else
                                    $("#cartList").html("(0)");
                            }
                        }
                        else if (cstype == 'buy') {
                            if (html.status != "exist") {
                                if (html.data != "" && html.data != undefined) {
                                    if (html.count != undefined && html.count != "")
                                        $("#cartList").html("(" + html.count + ")");
                                    else
                                        $("#cartList").html("(0)");
                                    var html1 = html.data.split("<-s->");
                                    var windowWidth = document.documentElement.clientWidth;
                                    var windowHeight = document.documentElement.clientHeight;
                                    var popupHeight = $("#add_tocart_pop").height();
                                    var popupWidth = $("#add_tocart_pop").width();
                                    //document.getElementById("add_tocart_pop").style.display="block";
                                    $('#add_tocart_pop').html(html1[0]);
                                    $("#add_tocart_pop").fadeIn("slow");
                                    dlist = new Array();
                                    dlist = html1[1].split(",");
                                    $(".black-frame").css({
                                        "visibility": "visible"
                                    });
                                    $("html, body").animate({scrollTop: 0}, "slow");
                                    if (html.data2 != undefined)
                                        $("body").append(html.data2);

                                } else {
                                    document.location = "Home";
                                }

                            }
                        }
                    }
                }, loaderLimit);
            }
        });

    }
    else {
        alert("Stock not available for this deal.");
    }
}

function getCart(type) {
    var parms1 = "type=" + type;
    $.ajax({
        type: "POST",
        url: "GetCart",
        data: parms1,
        dataType: "json",
        success: function(html) {
            if (html != undefined && html != "") {
                if (html.status != undefined) {
                    if (html.status == "success") {
                        var html1 = html.data.split("<-s->");
                        var windowWidth = document.documentElement.clientWidth;
                        var windowHeight = document.documentElement.clientHeight;
                        var popupHeight = $("#add_tocart_pop").height();
                        var popupWidth = $("#add_tocart_pop").width();
                        $('#add_tocart_pop').html(html1[0]);
                        $("#add_tocart_pop").fadeIn("slow");
                        $(".black-frame").css({
                            "visibility": "visible"
                        });
                        $("html, body").animate({scrollTop: 0}, "slow");
                        dlist = new Array();
                        dlist = html1[1].split(",");
                        if (html.data2 != undefined)
                            $("body").append(html.data2);
                    }
                    else if (html.status == "no-data") {
                        var html1 = html.data.split("<-s->");
                        var windowWidth = document.documentElement.clientWidth;
                        var windowHeight = document.documentElement.clientHeight;
                        var popupHeight = $("#add_tocart_pop").height();
                        var popupWidth = $("#add_tocart_pop").width();
                        //document.getElementById("add_tocart_pop").style.display="block";
                        $('#add_tocart_pop').html(html1[0]);
                        $("#add_tocart_pop").fadeIn("slow");
                        $(".black-frame").css({
                            "visibility": "visible"
                        });
                        $("html, body").animate({scrollTop: 0}, "slow");
                    } else if (html.status == "session-expired") {
                        var emptyDiv = '<div class="cart-popup"><h1>Cart ( 0 )</h1><table cellpadding="0" cellspacing="0" width="100%" class="cart-table"><tr><th width="20%">ITEM</th><th width="10%">QTY</th><th width="10%">COLOUR/BRAND</th><th width="10%">SIZE</th><th width="15%">PRICE</th><th width="10%">SHIPPING COST</th><th width="15%">SUBTOTAL</th><th width="10%">&nbsp;</th></tr><tr><td colspan="8" class="noitems">There are no items in this cart</td></tr></table><div class="clearfix" style="text-align:right;"><a href="Home.action" class="buy_now ">Continue Shopping</a></div><div class="close" onclick="javascript:closeCart()"></div></div>';
                        $('#add_tocart_pop').html(emptyDiv);
                        $("#add_tocart_pop").fadeIn("slow");
                        $(".black-frame").css({
                            "visibility": "visible"
                        });
                        $("html, body").animate({scrollTop: 0}, "slow");
                    }
                    else
                        document.location = "Home";
                }
                else
                    document.location = "Home";
            }
            else {
                document.location = "Home";
            }
        }
    });

}

function removeCart(did, type) {
    var confirm1 = confirm("Do you want to delete this Item");
    if (confirm1) {
        var hid_val = "deletecart";
        var parms1 = "did=" + did;
        $.ajax({
            type: "POST",
            url: "DeleteCart.action",
            data: parms1,
            dataType: "json",
            success: function(html) {
                if (html != "" && html != undefined) {
                    var count = 0;
                    if (html.count != undefined && html.count != "")
                        count = html.count;
                    cartItems = count;
                    if (type == 'cart') {
                        $("#cartList").html("(" + count + ")");

                        inBag.splice(did);
                        for (var i = 0; i < inBag.length; i++) {
                            if (inBag[i] == did) {
                                delete inBag[i];
                            }
                        }
                        //  delete inBag[inBag.indexOf(did)];
                        if (html == 0) {
                            $('#add_tocart_pop,#add_tocart_box').hide();
                        } else {
                            getCart(type);
                        }
                    } else if (type == 'buy') {

                        var data = html.data;
                        $("#cartList").html("(" + count + ")");
                        for (var i = 0; i < dlist.length; i++) {
                            if (dlist[i] == did) {
                                delete dlist[i];
                            }
                        }
                        //delete dlist[dlist.indexOf(did)];
                        if (data != undefined)
                            $("body").append(data);
                        getCart(type);
                        var loc = window.location;
                        var str = new String(loc);
                        if (str.lastIndexOf("CheckOutPaymentOptions") != -1)
                            window.location.reload();
                        if (str.lastIndexOf("Register") != -1 || str.lastIndexOf("UserLogged") != -1)
                            window.location.reload();
                        if (str.lastIndexOf("CheckOutShipping") != -1)
                            window.location.reload();
                    }
                }
            }
        });
    }

}
function deal_detail(did) {
    var ex = $("#exflag").val();
    if (ex == "true")
        window.location = "ProductDesc?did=" + did;
    else
        window.location = "Product?did=" + did;
}
function getDealProdDescPage(did) {
    var params = "dealId=" + did;
    $.ajax({
        type: "POST",
        url: "GetDealType",
        dataType: "json",
        data: params,
        success: function(json) {
            if (json != undefined && json != "" && json.status != undefined) {
                if (json.status == "success") {
                    if (json.data != null && json.data != '' && json.data == 'exclusive') {
                        window.location = "ProductDesc?did=" + did;
                    } else {
                        window.location = "Product?did=" + did;
                    }
                }
            }
        }
    });
}
function show_popup(sh, id, subid)
{
    document.getElementById(id).style.display = 'none';
    document.getElementById(subid).style.display = 'none';
    if (sh == 1)
    {
        document.getElementById(id).style.display = 'block';
        document.getElementById(subid).style.display = 'block';
    }
    else if (sh == 2)
    {
        document.getElementById(id).style.display = 'none';
        document.getElementById(subid).style.display = 'none';
    }
}
function checkOutNew() {
    var proceed = true;
    var elements = $(".tdAttr");
    if (elements != null && elements != undefined) {
        for (var i = 0; i < elements.length; i++) {
            var tdId = elements[i].id;
            if (tdId != undefined && tdId != null) {
                var pattr = $(".pattr");
                if (pattr != null && pattr != undefined && pattr.length != 0) {
                    for (var j = 0; j < pattr.length; j++) {
                        var arrId = pattr[j].id;
                        var lable = $("#" + arrId).html();
                        var selectedVal = $("#" + arrId).next().val();
                        if (selectedVal == null || selectedVal == "" || selectedVal.length == 0) {
                            alert("Please select size for " + lable);
                            proceed = false;
                            return;
                        }
                    }
                }
            }
        }
    }
    if (proceed) {
        if ($("#exflag").val() == "true") {
            $("#cartForm").attr('action', 'ProceedToPayment');
            $('#cartForm').submit();
        }
        else {
            $("#cartForm").attr('action', 'BuyAction');
            $('#cartForm').submit();
        }
    }
}
function checkOut(dids) {
    var proceed = false;
    var arr = new Array();
    var arr2 = new Array();
    if (dids != undefined && dids != "") {
        arr2 = dids.split(",");
        if (arr2 != undefined && arr2.length > 0) {
            var count = 0;
            for (var j = 0; j < arr2.length; j++) {
                if (arr2[j] != "") {
                    arr[count] = arr2[j];
                    count++;
                }
            }
        }
        if (arr != undefined && arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != "") {
                    var sizeFlag1 = $("#sizeFlag1" + arr[i]).val();
                    var sizeFlag2 = $("#sizeFlag2" + arr[i]).val();
                    var colorFlag = $("#colorFlag" + arr[i]).val();
                    var dealColor = $("#dealColor" + arr[i]).val();
                    var dealSize1 = $("#dealSize1" + arr[i]).val();
                    var dealSize2 = $("#dealSize2" + arr[i]).val();
                    var dealSizeName1 = $("#dealSizeName1" + arr[i]).val();
                    var dealSizeName2 = $("#dealSizeName2" + arr[i]).val();
                    if (sizeFlag1 == "true" && (dealSize1 == "")) {
                        if (arr.length > 1)
                            alert("Please select size for " + dealSizeName1 + " in deal " + (i + 1));
                        else
                            alert("Please select size for " + dealSizeName1);
                        return;
                    }
                    else if (sizeFlag2 == "true" && dealSize2 == "") {
                        if (arr.length > 1)
                            alert("Please select size for " + dealSizeName2 + " in deal " + (i + 1));
                        else
                            alert("Please select size for " + dealSizeName2);
                        return;
                    }
                    else if (colorFlag == "true" && dealColor == "") {
                        if (arr.length > 1)
                            alert("Please select colour/brand for deal " + (i + 1));
                        else
                            alert("Please select colour/brand for deal");
                        return;
                    }
                    else {
                        proceed = true;
                    }
                    sizeFlag1 = "", sizeFlag2 = "", colorFlag = "", dealColor = "", dealSize1 = "", dealSize2 = "", dealSizeName = "", dealSizeName2 = "";
                }
            }
        }
    }
    if (proceed) {
        if ($("#exflag").val() == "true") {
            $("#cartForm").attr('action', 'ProceedToPayment');
            $('#cartForm').submit();
        }
        else {
            $("#cartForm").attr('action', 'BuyAction');
            $('#cartForm').submit();
        }
    }
}
function changeDealAttr(type, val, did) {
    if (type != undefined && val != undefined) {
        if (type == "dealColor") {
            $("#dealColor" + did).val(val);
        }
        else if (type == "dealSize1") {
            $("#dealSize1" + did).val(val);
        }
        else if (type == "dealSize2") {
            $("#dealSize2" + did).val(val);
        }

    }
}
function logout() {
    $.ajax({
        type: "POST",
        url: "UserLogout",
        dataType: "json",
        data: "",
        success: function(json) {
            if (json != undefined && json != "" && json.status != undefined) {
                if (json.status == "success") {
                    if ($("#exflag").val() == "true")
                        loadExDeals();
                    else
                        window.location = "Home";
                }
            }
        }
    });
}
function checkOutLogout() {
    $.ajax({
        type: "POST",
        url: "UserCheckOutLogout",
        dataType: "json",
        data: "",
        success: function(json) {
            if (json != undefined && json != "" && json.status != undefined) {
                if (json.status == "success") {
                    if ($("#exflag").val() == "true")
                        loadExDeals();
                    else
                        window.location = "Register";
                }
            }
        }
    });
}
function clearDivs() {
    $("#tab1Div,#tab2Div,#tab3Div").hide();
    $("#tab1,#tab2,tab3").removeClass();
    clearErrorMsg();
}
function loadNav(id) {
    clearDivs();
    if (id != undefined && id != "") {
        var idd = id + "Div";
        $("#" + id).addClass("current");
        $("#" + idd).show();
    }
}
function clearErrorMsg() {
    $(".error,.errorMsg,.error1").html("").hide();
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
function checkOutLogin() {
    clearErrorMsg();
    var userCheckOutEmail = $("#userCheckOutEmail").val();
    userCheckOutEmail = $.trim(userCheckOutEmail);
    var userCheckOutPassword = $("#userCheckOutPassword").val();
    userCheckOutPassword = $.trim(userCheckOutPassword);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (userCheckOutEmail == "") {
        $("#userCheckOutEmailError").html("Please enter your email address").show();
        $("#userCheckOutEmail").focus();
        return false;
    }
    else if (reg.test(userCheckOutEmail) == false) {
        $("#userCheckOutEmailError").html("Please enter valid email address").show();
        $("#userCheckOutEmail").focus();
        return false;
    }
    else if (userCheckOutPassword == "") {
        $("#userCheckOutPasswordError").html("Please enter your password").show();
        $("#userCheckOutPassword").focus();
        return false;
    }
    else {
        userCheckOutEmail = encodeComponent(userCheckOutEmail);
        userCheckOutPassword = encodeComponent(userCheckOutPassword);
        var parms1 = "user.userEmail=" + userCheckOutEmail + "&user.userPassword=" + userCheckOutPassword;
        //$("#userLogin").val("Processing..").attr("disabled",true);
        openLoader();
        $.ajax({
            type: "POST",
            url: "CheckOutUserLogin",
            dataType: "json",
            data: parms1,
            success: function(html) {
                setTimeout(function() {
                    closeLoader();
                    if (html != undefined && html.status != undefined) {
                        if (html.status == "success") {
                            if ($("#exflag").val() == "true")
                                window.location = "ExCheckOutShipping";
                            else
                                window.location = "CheckOutShipping";
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "") {
                                $("#checkOutLoginError").html(html.msg).show();
                            }
                            else
                                $("#checkOutLoginError").html("Entered Wrong Email Id or Password").show();
                            $("#userCheckOutPassword").val("");
                        }
                    }
                }, loaderLimit);
            }
        });
    }
}

function checkOutRegistration() {
    clearErrorMsg();
    var checkOutRegUserName = $("#checkOutRegUserName").val();
    checkOutRegUserName = $.trim(checkOutRegUserName);
    var checkOutRegUserEmail = $("#checkOutRegUserEmail").val();
    checkOutRegUserEmail = $.trim(checkOutRegUserEmail);
    var checkOutRegUserPassword = $("#checkOutRegUserPassword").val();
    checkOutRegUserPassword = $.trim(checkOutRegUserPassword);
    var checkOutRegUserCPassword = $("#checkOutRegUserCPassword").val();
    checkOutRegUserCPassword = $.trim(checkOutRegUserCPassword);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (checkOutRegUserName == "") {
        $("#checkOutRegUserNameError").html("Please enter your name").show();
        $("#checkOutRegUserName").focus();
        return false;
    } else if (ck_name.test(checkOutRegUserName) == false) {
        $("#checkOutRegUserNameError").html("Please enter valid name").show();
        $("#checkOutRegUserName").focus();
        return false;
    } else if (checkOutRegUserEmail == "") {
        $("#checkOutRegUserEmailError").html("Please enter your email address").show();
        $("#checkOutRegUserEmail").focus();
        return false;
    }
    else if (reg.test(checkOutRegUserEmail) == false) {
        $("#checkOutRegUserEmailError").html("Please enter valid email address").show();
        $("#checkOutRegUserEmail").focus();
        return false;
    }
    else if (!(isValidEmail(checkOutRegUserEmail))) {
        $("#checkOutRegUserEmailError").html("Please enter valid email address").show();
        $("#checkOutRegUserEmail").focus();
        return false;
    }
    else if (checkOutRegUserPassword == "") {
        $("#checkOutRegUserPasswordError").html("Please enter your password").show();
        $("#checkOutRegUserPassword").focus();
        return false;
    }
    else if (checkOutRegUserPassword.length < 6) {
        $("#checkOutRegUserPasswordError").html("Please enter password should be minimum 6 characters length").show();
        $("#checkOutRegUserPassword").focus();
        return false;
    }
    else if (checkOutRegUserCPassword == "") {
        $("#checkOutRegUserCPasswordError").html("Please enter confirm password").show();
        $("#checkOutRegUserCPassword").focus();
        return false;
    }
    else if (checkOutRegUserPassword != checkOutRegUserCPassword) {
        $("#checkOutRegError").html("Please enter password and confirm password should be same").show();
        return false;
    }
    else {
        checkOutRegUserEmail = encodeComponent(checkOutRegUserEmail);
        checkOutRegUserName = encodeComponent(checkOutRegUserName);
        checkOutRegUserPassword = encodeComponent(checkOutRegUserPassword);
        checkOutRegUserCPassword = encodeComponent(checkOutRegUserCPassword);
        var parms1 = "user.userEmail=" + checkOutRegUserEmail + "&user.userName=" + checkOutRegUserName + "&user.userPassword=" + checkOutRegUserPassword + "&user.userCpassword=" + checkOutRegUserCPassword;
        //$("#regBtn").html("Processing...").attr("disabled",true);
        openLoader();

        $.ajax({
            type: "POST",
            url: "CheckOutRegister",
            dataType: "json",
            data: parms1,
            success: function(html) {
                setTimeout(function() {
                    closeLoader();
                    if (html != undefined) {
                        if (html.status == "success") {
                            if ($("#exflag").val() == "true")
                                window.location = "ExCheckOutShipping";
                            else
                                window.location = "CheckOutShipping";
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "") {
                                $("#checkOutRegError").html(html.msg).show();
                            }
                            $("#checkOutRegUserCPassword,#checkOutRegUserPassword").val("");
                        }
                    }
                    //  $("#regBtn").html("Register").attr("disabled",false);
                }, loaderLimit);
            }
        });
    }
}
function checkOutEmailContinue() {
    var exflag = $("#exflag").val();
    openLoader();
    setTimeout(function() {
        closeLoader();
        if (exflag) {
            document.checkOutEmailLoginForm.action = "ExCheckOutEmailContinue";
        } else {
            document.checkOutEmailLoginForm.action = "CheckOutEmailContinue";
        }
        document.checkOutEmailLoginForm.submit();
    }, loaderLimit);
}
function checkOutGuest() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var checkOutGuestUserEmail = $("#checkOutGuestUserEmail").val();
    checkOutGuestUserEmail = $.trim(checkOutGuestUserEmail);
    if (checkOutGuestUserEmail == "") {
        $("#checkOutGuestUserEmailError").html("Please enter email address").show();
        $("#checkOutGuestUserEmail").focus();
        return false;
    }
    else if (reg.test(checkOutGuestUserEmail) == false) {
        $("#checkOutGuestUserEmailError").html("Please enter valid email address").show();
        $("#checkOutGuestUserEmail").focus();
        return false;
    }
    else if (!(isValidEmail(checkOutGuestUserEmail))) {
        $("#checkOutGuestUserEmailError").html("Please enter valid email address").show();
        $("#checkOutGuestUserEmail").focus();
        return false;
    }
    else {
        $("#chkGuest").html("Processing...").attr("disabled", true);
        var parms = "user.userEmail=" + checkOutGuestUserEmail;
        openLoader();
        $.ajax({
            type: "POST",
            url: "CheckOutGuest",
            dataType: "json",
            data: parms,
            success: function(html) {
                setTimeout(function() {
                    closeLoader();
                    if (html != undefined) {
                        if (html.status == "success") {
                            if ($("#exflag").val() == "true")
                                window.location = "ExCheckOutShipping";
                            else
                                window.location = "CheckOutShipping";
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "") {
                                $("#checkOutGuestError").html(html.msg).show();
                            }
                        }
                        else if (html.status == "home") {
                            if ($("#exflag").val() == "true")
                                loadExDeals();
                            else
                                window.location = "Home";
                        }
                    }
                    $("#chkGuest").html("Submit").attr("disabled", false);
                }, loaderLimit);
            }
        });
    }
}
function checkOutGuest() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var checkOutGuestUserEmail = $("#checkOutGuestUserEmail").val();
    checkOutGuestUserEmail = $.trim(checkOutGuestUserEmail);
    if (checkOutGuestUserEmail == "") {
        $("#checkOutGuestUserEmailError").html("Please enter email address").show();
        $("#checkOutGuestUserEmail").focus();
        return false;
    }
    else if (reg.test(checkOutGuestUserEmail) == false) {
        $("#checkOutGuestUserEmailError").html("Please enter valid email address").show();
        $("#checkOutGuestUserEmail").focus();
        return false;
    }
    else if (!(isValidEmail(checkOutGuestUserEmail))) {
        $("#checkOutGuestUserEmailError").html("Please enter valid email address").show();
        $("#checkOutGuestUserEmail").focus();
        return false;
    }
    else {
        $("#chkGuest").html("Processing...").attr("disabled", true);
        var parms = "user.userEmail=" + checkOutGuestUserEmail;
        openLoader();
        $.ajax({
            type: "POST",
            url: "CheckOutGuest",
            dataType: "json",
            data: parms,
            success: function(html) {
                setTimeout(function() {
                    closeLoader();
                    if (html != undefined) {
                        if (html.status == "success") {
                            if ($("#exflag").val() == "true")
                                window.location = "ExCheckOutShipping";
                            else
                                window.location = "CheckOutShipping";
                        }
                        else if (html.status == "failed") {
                            if (html.msg != undefined && html.msg != "") {
                                $("#checkOutGuestError").html(html.msg).show();
                            }
                        }
                        else if (html.status == "home") {
                            if ($("#exflag").val() == "true")
                                loadExDeals();
                            else
                                window.location = "Home";
                        }
                    }
                    $("#chkGuest").html("Submit").attr("disabled", false);
                }, loaderLimit);
            }
        });
    }
}
function checkOutToPayment() {
    clearErrorMsg();

    var userEmail = $("#shippingEmail").val();
    userEmail = $.trim(userEmail);
    var userName = $("#shippingName").val();
    userName = $.trim(userName);
    var userMobile = $("#shippingMobile").val();
    userMobile = $.trim(userMobile);
    var userAddress = $("#shippingAddress").val();
    userAddress = $.trim(userAddress);
    var userCity = $("#shippingCity").val();
    userCity = $.trim(userCity);
    var userState = $("#shippingState").val();
    userState = $.trim(userState);
    var userPin = $("#sPin").val();
    userPin = $.trim(userPin);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var phoneRegxp = /^([0-9]+)$/;
    if (userEmail == "" || userEmail.toUpperCase() == "NULL") {
        $("#shippingEmailError").html("Plese enter email address").show();
        $("#shippingEmail").focus();
        return false;
    }
    else if (reg.test(userEmail) == false) {
        $("#shippingEmailError").html('Please enter valid email address').show();
        $("#shippingEmail").focus();
        return false;
    }
    else if (userName == "" || userName.toUpperCase() == "NULL") {
        $("#shippingNameError").html("Please enter name").show();
        $("#shippingName").focus();
        return false;
    }
    else if (ck_name.test(userName) == false) {
        $("#shippingNameError").html("Please enter valid name").show();
        $("#shippingName").focus();
        return false;
    }
    else if (userName.length > 45) {
        $("#shippingNameError").html("Name should be 45 character or less").show();
        $("#shippingName").focus();
        return;
    }
    else if (userMobile == "" || userMobile.toUpperCase() == "NULL")
    {
        $("#shippingMobileError").html("Please enter mobile number").show();
        $("#shippingMobile").focus();
        return false;
    }
    else if ((userMobile.charAt(0) != 9) && (userMobile.charAt(0) != 8) && (userMobile.charAt(0) != 7))
    {
        $("#shippingMobileError").html("Mobile number should start with either 9 or 8 or 7 ").show();
        $("#shippingMobile").focus();
        return false;
    }
    else if (userMobile.length != 10)
    {
        $("#shippingMobileError").html("Check your mobile number").show();
        $("#shippingMobile").focus();
        return false;
    }
    else if (phoneRegxp.test(userMobile) != true)
    {
        $("#shippingMobileError").html("Enter only numeric values for mobile number").show();
        $("#shippingMobile").focus();
        return false;
    }
    else if (userAddress == "" || userAddress.toUpperCase() == "NULL") {
        $("#shippingAddressError").html("Please enter shipping address").show();
        $("#shippingAddress").focus();
        return false;
    }
    else if (userAddress.length > 200) {
        $("#shippingAddressError").html("Address should be 200 character or less").show();
        $("#shippingAddress").focus();
        return false;
    } else if (userPin == "" || userPin.toUpperCase() == "NULL") {
        $('#sPinError').html("Please enter pin code").show();
        $("#sPin").focus();
        return false;
    }
    else if (userPin.length != 6) {
        $('#sPinError').html("Pin code should be 6 characters").show();
        $("#sPin").focus();
        return false;
    }
    else if (phoneRegxp.test(userPin) != true) {
        $('#sPinError').html("Enter only numeric values for pin code").show();
        $("#sPin").focus();
        return false;
    } else if (userState == "" || userState == "0") {
        $('#shippingStateError').html("Please select state").show();
        $("#shippingState").focus();
        return false;
    }
    else if (userCity == "" || userCity.toUpperCase() == "NULL" || userCity == "Select City") {
        $('#shippingCityError').html("Please enter city").show();
        $("#shippingCity").focus();
        return false;
    }
    else if (userCity.length > 50) {
        $('#shippingCityError').html("City should be 50 characters or less").show();
        $("#shippingCity").focus();
        return false;
    } else if (codflag != true && onlineflag != true) {
        $("#chkPinServMsg").html("Oops!!! The pincode you have entered is under non-serviceable location, please try another pincode");
        $("#chkPinServMsgDiv").css({
            "visibility": "visible",
            "opacity": "1",
            "top": "40%"
        });
        //$(".black-frame").show();
        $(".black-frame").css({
            "visibility": "visible"
        });
        return false;
    }
    else {
        var parms = "user.userEmail=" + userEmail + "&user.userName=" + userName + "&user.userMobile=" + userMobile + "&user.userAddress=" + userAddress + "&user.userCity=" + userCity + "&user.userState=" + userState + "&user.userPin=" + userPin;
        $("#chkPayBtn").val("Processing...").attr("disabled", true);
        openLoader();
        $.ajax({
            type: "POST",
            url: "CheckOutToPayment",
            dataType: "json",
            data: parms,
            success: function(json) {
                setTimeout(function() {
                    closeLoader();
                    if (json != undefined) {
                        if (json.status == "success") {
                            $('#var1').val(codflag);
                            $('#var2').val(onlineflag);
                            if ($("#exflag").val() == "true")
                                document.shippingForm.action = "ExCheckOutPaymentOptions?req=" + new Date().getTime();
                            else
                                document.shippingForm.action = "CheckOutPaymentOptions?req=" + new Date().getTime();
                            document.shippingForm.submit();
                        }
                        else if (json.status == "home") {
                            if ($("#exflag").val() == "true")
                                loadExDeals();
                            else
                                window.location = "Home";
                        }
                        else if (json.status == "failed") {
                            if (json.msg != undefined && json.msg != "")
                                $("#checkOutShipError").html(json.msg).show();
                        }
                    }
                    $("#chkPayBtn").val("Continue").atttr("disabled", false);
                }, loaderLimit);
            }
        });
    }
}
function shippingcheckPinService() {
    $('#servDiv1').hide();
    var pinRegxp = /^([0-9]+)$/;
    var pincode = $("#sPin").val();
    pincode = $.trim(pincode);

    if (pincode.length != 6) {
        return false;
    }
    else if (!pinRegxp.test(pincode)) {
        return false;
    }
    else {
        var parms = "pincode=" + pincode;
        $.ajax({
            type: 'POST',
            url: 'CheckPinServiceability',
            data: parms,
            dataType: "json",
            success: function(json) {
                if (json != undefined && json != null) {
                    if (json.status != undefined && json.status != "") {
                        if (json.status == "success") {
                            var data = json.data;
                            if (data != null && data != undefined) {
                                $('#servDiv1').show();
                                var json = data[0];
                                var json2 = data[1];
                                if (json != null && json != undefined && json2 != null && json2 != undefined) {
                                    var cod = json.cod;
                                    var online = json2.online;
                                    if (cod != undefined && cod == 'yes') {
                                        $('#sercod1').removeClass().addClass('rightmark').html("COD serviceable");
                                        codflag = true;
                                    }
                                    else {
                                        $('#sercod1').removeClass().addClass('wrongmark').html("COD not serviceable");
                                        codflag = false;
                                    }
                                    if (online != undefined && online == 'yes') {
                                        $('#seronline1').removeClass().addClass('rightmark').html("Online serviceable");
                                        onlineflag = true;
                                    }
                                    else {
                                        $('#seronline1').removeClass().addClass('wrongmark').html("Online not serviceable");
                                        onlineflag = false;
                                    }
                                }
                            }
                        }
                        else {
                            $('#sercod1').removeClass().addClass('wrongmark').html("COD not serviceable");
                            $('#seronline1').removeClass().addClass('wrongmark').html("Online not serviceable");
                        }
                    }
                }
            }
        });
    }
}


function continueWithCod() {

    closePopUp();
    
    $(".black-frame2").css({
        "visibility": "hidden"
    });
     makePayment('cod');

}

function checkCodRequest() {
    if (cartItems != 0 && cartItems != undefined) {
        if (cartItems > 1) {
            alert("Currently we are not supporting multiple items dispatch using COD. Please use other payment option. Regret for inconvenience");
        }
        else {
            var codCaptchCode = $("#codCaptchCode").val();
            if (codCaptchCode == "" || codCaptchCode.length == 0) {
                alert("Please enter the code given");
                $("#codCaptchCode").focus();
            }
            else {
                var codCaptchCode = $("#codCaptchCode").val();
                $("#codBtn").attr("disabled", true).val("Processing...");
                var parms = "userRequest.reqCaptch=" + codCaptchCode;
                $.ajax({
                    type: "POST",
                    url: "CheckCODRequest",
                    dataType: "json",
                    data: parms,
                    success: function(html) {
                        if (html != undefined && html.status != undefined) {
                            
                            if (html.status == "success") {
                                $("#paymentAlertDiv").css({
                                    "visibility": "visible",
                                    "opacity": "1",
                                    "top": "40%"
                                });
                                $(".black-frame2").css({
                                    "visibility": "visible"
                                });
                               
                            }
                            else {
                                alert("Entered code doesn't match. Please try again.");
                                $("#codBtn").attr("disabled", false).val("Place Order");
                            }
                        }
                    }
                });


            }
        }
    }
}
function regenImage() {
    document.getElementById("capImg").src = "./CaptchaServlet?str=" + new Date().getTime() + "&capLen=6";
}
function makePayment(type) {
    var codVal = $('#var1').val();
    var onlineVal = $('#var2').val();
    var ex = $("#exflag").val();
    var action = "";
    var flag = true;
    if (type == 'cod') {
        if (codVal != '' && codVal == 'false') {
            $("#chkPinServMsg").html("Oops!!! The pincode you have entered is under non-serviceable location for cod, you please proceed with online or try with another pincode");
            $("#codBtn").attr("disabled", false).val("Place Order");
            flag = false;
        }
    } else if (type == 'debit' || type == 'credit' || type == 'net') {
        if (onlineVal != '' && onlineVal == 'false') {
            $("#chkPinServMsg").html("Oops!!! The pincode you have entered is under non-serviceable location for online payment, you please proceed with cod or try with another pincode");
            flag = false;
        }
    }
    if (flag == false) {
        $("#chkPinServMsgDiv").css({
            "visibility": "visible",
            "opacity": "1",
            "top": "40%"
        });
        $(".black-frame").css({
            "visibility": "visible"
        });
        return false;
    }

    if (type != undefined && type != "" && flag) {
        if (type == "cod") {
            if (ex == "true")
                action = "MakeExCODTransaction";
            else
                action = "MakeCODTransaction";
        }
        else if (type == "debit") {
            if ($('#a_debitcard').val() == "0") {
                alert("Choose your card type ");
                return false;
            }
            else {
                if (ex == "true")
                    action = "MakeExCardPayment";
                else
                    action = "MakeCardPayment";
            }
        }
        else if (type == "credit") {
            if ($('#a_creditcard').val() == "0") {
                alert("Choose your card type ");
                return false;
            }
            else {
                if (ex == "true")
                    action = "MakeExCardPayment";
                else
                    action = "MakeCardPayment";
            }
        }
        else if (type = "net") {
            if (ex == "true")
                action = "MakeExNetBankTransaction";
            else
                action = "MakeNetBankTransaction";
        }
        if (action != "") {
            document.checkOutPaymentForm.action = action;
            document.checkOutPaymentForm.submit();
        }
    }
}
function closeCart() {
    $("#add_tocart_pop").hide();
    $(".black-frame").css({
        "visibility": "hidden"
    });
}
function openLoader() {
    $("#loaderDiv").css({
        "visibility": "visible",
        "opacity": "1"
    });
    $(".black-frame2").css({
        "visibility": "visible"
    });
}
function closeLoader() {
    $("#loaderDiv").css({
        "visibility": "hidden",
        "opacity": "0"
    });
    $(".black-frame2").css({
        "visibility": "hidden"
    });
}
function changeAddr() {
    openLoader();
    setTimeout(function() {
        closeLoader();
        loadPage('checkout-shipping');
    }, loaderLimit);
}
function loadCheckoutPage(type) {
    if (type != undefined && type != "") {
        openLoader();
        setTimeout(function() {
            closeLoader();
            loadPage(type);
        }, loaderLimit);
    }
}
function preload() {
    var aimg = (document.getElementById("aimg").value).split("<,>");
    var img = new Image();
    for (var i = 0; i < aimg.length; i++) {
        img = new Image();
        img.src = aimg[i];
    }
}
function getBigImg(iurl) {
    document.getElementById("mainimg").src = iurl;
}
function getPBigImage() {
    var aimg = (document.getElementById("aimg").value).split("<,>");
    if (aimg != null && aimg.length > 0) {
        var index = $("#index").val();
        index = parseInt(index);
        if (aimg[index] != undefined && aimg[index] != '') {
            $("#mainimg").fadeOut(200, function() {
                $(this).attr("src", aimg[index]).fadeIn();
            });
            if (index == 0)
                index = aimg.length - 1;
            else
                index--;
            $("#index").val(index);
        }
    }
}
function getNBigImage() {
    var aimg = (document.getElementById("aimg").value).split("<,>");
    if (aimg != null && aimg.length > 0) {
        var index = $("#index").val();
        index = parseInt(index);
        if (aimg[index] != undefined && aimg[index] != '') {
            $("#mainimg").fadeOut(200, function() {
                $(this).attr("src", aimg[index]).fadeIn();
            });
            if (index == aimg.length - 1)
                index = 0;
            else
                index++;
            $("#index").val(index);
        }
    }
}
function displayProductDesDiv(flag) {
    if (flag != null && flag == 'hide') {
        $('#moreview').show();
        $('.productDesc').hide('slow');
        $('#lessview').hide();
    } else if (flag != null && flag == 'show') {
        $('#lessview').show();
        $('.productDesc').show('slow');
        $('#moreview').hide();
    }

}
function singleTotal(price, obj, val, shiptot) {
    var stotal = obj.value * price;
    var stotal1 = obj.value * price + shiptot;
    if (document.getElementById("stot" + val) != null) {
        document.getElementById("stot" + val).innerHTML = stotal;
    }
    if (document.getElementById("st1" + val) != null) {
        document.getElementById("st1" + val).value = stotal1;
    }
    var subt = 0;
    for (var i = 0; i < dlist.length - 1; i++) {
        if (dlist[i] != undefined) {
            if (document.getElementById("st1" + dlist[i]) != null) {
                var stot = document.getElementById("st1" + dlist[i]).value;
                subt += parseFloat(stot);
            }
        }
    }
    document.getElementById("hgtotal").value = subt;
    document.getElementById("gtotal").innerHTML = subt;
}
function singleTotal2(price, objId, val, shiptot) {
    var quantity = $("#" + objId).val();
    var stotal = parseFloat(quantity * price);
    var stotal1 = parseFloat(quantity * price) + parseFloat(shiptot);
    if (document.getElementById("stot" + val) != null) {
        document.getElementById("stot" + val).innerHTML = stotal;
    }
    if (document.getElementById("st1" + val) != null) {
        document.getElementById("st1" + val).value = stotal1;
    }
    var subt = 0;
    for (var i = 0; i < dlist.length - 1; i++) {
        if (dlist[i] != undefined) {
            if (document.getElementById("st1" + dlist[i]) != null) {
                var stot = document.getElementById("st1" + dlist[i]).value;
                subt += parseFloat(stot);
            }
        }
    }
    document.getElementById("hgtotal").value = subt;
    document.getElementById("gtotal").innerHTML = subt;
}
function setDeals() {
    if (dlist == null || dlist == "" || dlist.length == 0) {
        dlist = new Array();
        var deal = $("#marker").val();
        dlist = deal.split(",");
    }

}
function insertVisitorInfo() {
    var device = "";
    var browserInfo = getBroserInfo();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        device = "mobile";
    }
    else {
        device = "desktop";
    }

    $.ajax({
        type: "POST",
        url: "VisitorInfo",
        dataType: "json",
        data: "browserInfo=" + browserInfo + "&device=" + device,
        success: function(html) {

        }
    });
}
function getBroserInfo() {
    var userAgent = navigator.userAgent.toLowerCase(),
            browser = '',
            version = 0;
    $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

    // Is this a version of IE?
    if ($.browser.msie) {
        userAgent = $.browser.version;
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        browser = "Internet Explorer";
    }

    // Is this a version of Chrome?
    if ($.browser.chrome) {
        userAgent = userAgent.substring(userAgent.indexOf('chrome/') + 7);
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        // If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
        $.browser.safari = false;
        browser = "Chrome";
    }

    // Is this a version of Safari?
    if ($.browser.safari) {
        userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7);
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        browser = "Safari";
    }

    // Is this a version of Mozilla?
    if ($.browser.mozilla) {
        //Is it Firefox?
        if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
            userAgent = userAgent.substring(userAgent.indexOf('firefox/') + 8);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = "Firefox"
        }
        // If not then it must be another Mozilla
        else {
            browser = "Mozilla (not Firefox)"
        }
    }

    // Is this a version of Opera?
    if ($.browser.opera) {
        userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
        userAgent = userAgent.substring(0, userAgent.indexOf('.'));
        version = userAgent;
        browser = "Opera";
    }
    return "Browser :" + browser + " - Version :" + version;
}
function loadExlusiveDeals() {
    $.ajax({
        type: "POST",
        url: "ValidateExclusiveAuth",
        dataType: "json",
        success: function(json) {
            if (json != undefined && json != null) {
                if (json.status == "exists") {
                    window.location = "WhaakyClub?u=s";
                }
                else if (json.status == "not-exists") {
                    loadPopUp('exclusive-deals');
                }
            }
        }
    });
}
function authExclusive() {
    var userMobile = $("#exMobileNo").val();
    var promotionCode = $("#exPromotionCode").val();
    var selectedField = $("#slectedField").val();

    // alert("selectedField.."+selectedField);
    userMobile = $.trim(userMobile);
    promotionCode = $.trim(promotionCode);
    var phoneRegxp = /^([0-9]+)$/;

    if (selectedField != "" && selectedField == 'mobileno') {

        if (userMobile == "" || userMobile.length == 0)
        {
            $("#exMobileNoError").html("Please enter mobile number").show();
            $("#exMobileNo").focus();
            return false;
        }
        else if ((userMobile.charAt(0) != 9) && (userMobile.charAt(0) != 8) && (userMobile.charAt(0) != 7))
        {
            $("#exMobileNoError").html("Mobile number should start with either 9 or 8 or 7 ").show();
            $("#exMobileNo").focus();
            return false;
        }
        else if (userMobile.length != 10)
        {
            $("#exMobileNoError").html("Mobile number lenght should be 10 digits").show();
            $("#exMobileNo").focus();
            return false;
        }
        else if (phoneRegxp.test(userMobile) != true)
        {
            $("#exMobileNoError").html("Enter only numeric values for mobile number").show();
            $("#exMobileNo").focus();
            return false;
        }
    }
    //else {
    var params = "userMobile=" + userMobile + "&promotionCode=" + promotionCode;
    $("#exBtn").attr("disabled", true).val("Processing...");
    $.ajax({
        type: "POST",
        url: "AuthExclusive",
        dataType: "json",
        data: params,
        success: function(json) {
            if (json != undefined && json != null) {
                var flag = "";
                if (json.status == "success") {
                    flag = 's';
                } else if (json.status == "failed") {
                    flag = 'f';
                }
                if (flag == 's') {
                    $("#exclusiveDiv").css({
                        "visibility": "hidden",
                        "opacity": "1",
                        "top": "0%"
                    });
                    $("#exclusiveDivConfirm").css({
                        "visibility": "visible",
                        "opacity": "1",
                        "top": "40%"
                    });
                    $(".black-frame2").css({
                        "visibility": "visible"
                    });
                    //exclusiveDivConfirm
                    setTimeout(function() {
                        $("#exclusiveDivConfirm").css({
                            "visibility": "hidden",
                            "opacity": "1",
                            "top": "0%"
                        });
                        $(".black-frame2").css({
                            "visibility": "hidden"
                        });
                        window.location = "WhaakyClub?u=" + flag;
                    }, 3000);
                } else {
                    //window.location = "WhaakyClub?u=" + flag;
                    window.location = "WhaakyClubError";
                }

            }
            else {
                window.location = "Home";
            }
            $("#exBtn").attr("disabled", false).val("Submit");
        }
    });
    // }
}
function loadExDealDesc(id) {
    if (id != undefined && id != "") {
        window.location = "ProductDesc?did=" + id;
    }
}
function checkPinServ(pincode) {
    var pinRegxp = /^([0-9]+)$/;
    pincode = $.trim(pincode);
    if (pincode.length != 6) {
        return false;
    }
    else if (!pinRegxp.test(pincode)) {
        return false;
    }
    else {
        var parms = "pincode=" + pincode;
        $.ajax({
            type: 'POST',
            url: 'CheckPinServiceability',
            data: parms,
            dataType: "json",
            success: function(json) {
                if (json != undefined && json != null) {
                    if (json.status != undefined && json.status != "") {
                        if (json.status == "success") {
                            var data = json.data;
                            if (data != null && data != undefined) {
                                var json = data[0];
                                var json2 = data[1];
                                if (json != null && json != undefined && json2 != null && json2 != undefined) {
                                    var cod = json.cod;
                                    var online = json2.online;
                                    if (cod != undefined && cod == 'yes') {
                                        $("#var1").val("true");
                                    }
                                    else {
                                        $("#var1").val("false");
                                    }
                                    if (online != undefined && online == 'yes') {
                                        $("#var2").val("true");
                                    }
                                    else {
                                        $("#var2").val("false");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}
function changeDealAttrVals(productId, val, did) {
    if (did != undefined && productId != undefined && val != "") {
        $("#" + productId + did + "size").val(val);
    }
}
function logoutClub() {
    $.ajax({
        type: 'POST',
        url: 'LogoutClub',
        dataType: "json",
        success: function(json) {
            if (json != undefined && json != null) {
                if (json.status == "success") {
                    $("#exclusiveDivLogout").css({
                        "visibility": "visible",
                        "opacity": "1",
                        "top": "40%"
                    });
                    $(".black-frame2").css({
                        "visibility": "visible"
                    });
                    //exclusiveDivConfirm
                    setTimeout(function() {
                        $("#exclusiveDivLogout").css({
                            "visibility": "hidden",
                            "opacity": "1",
                            "top": "0%"
                        });
                        $(".black-frame2").css({
                            "visibility": "hidden"
                        });
                        window.location = "Home";
                    }, 3000);


                }
            }
        }
    });
}
function showWClubEntery(flag) {
    $('#slectedField').val(flag);
    if (flag == 'promocode') {
        $("#promotionCodeDiv").css({
            "display": "block"
        });
        $("#mobileNoDiv").css({
            "display": "none"
        });
    } else {
        $("#promotionCodeDiv").css({
            "display": "none"
        });
        $("#mobileNoDiv").css({
            "display": "block"
        });
    }
}
function getComboDetails(data) {
    window.location = "ComboDesc?data=" + data;
}