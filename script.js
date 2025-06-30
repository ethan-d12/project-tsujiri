// nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var divs = ["Home", "Menu", "About", "Contact"];
var visibleDivId = null;
function divVisibility(divId) {
    if (visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
    document.getElementById("myNav").style.width = "0%";
}

function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {

            document.title = "TSUJIRI | " + divId;
            document.getElementsByTagName("title").innerHTML = document.title;

            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

// home
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// logo slide down
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("logo_tm").style.top = "-75px";
    } else {
        document.getElementById("logo_tm").style.top = "-235px";
    }
}

// menu
//#### tabs
function openCity(evt, tabNum) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabNum).style.display = "block";
    evt.currentTarget.className += " active";
}
//#### #### tab1
function iceB_item1() {
    if (document.getElementById("iceB_item1_qty2").value === "") {
        var iceB_item1_qty2 = 0;
        document.getElementById("iceB_item1_qty2").placeholder = "Enter Quantity";
    } else {
        var iceB_item1_qty2 = parseInt(document.getElementById("iceB_item1_qty2").value) * 155;
    }

    if (document.getElementById("iceB_item1_qty3").value === "") {
        var iceB_item1_qty3 = 0;
        document.getElementById("iceB_item1_qty3").value = "0";
    } else {
        var iceB_item1_qty3 = parseInt(document.getElementById("iceB_item1_qty3").value) * 170;
    }

    if (document.getElementById("iceB_item1_topping1").checked) {
        var iceB_item1_toppings1 = 20;
    } else {
        var iceB_item1_toppings1 = 0;
    }
    if (document.getElementById("iceB_item1_topping2").checked) {
        var iceB_item1_toppings2 = 25;
    } else {
        var iceB_item1_toppings2 = 0;
    }

    var iceB_item1_ttl = document.getElementById("iceB_item1_ttl");
    iceB_item1_ttl.value = iceB_item1_qty2 + iceB_item1_qty3 + iceB_item1_toppings1 + iceB_item1_toppings2;
    iceB_ttl_cost()
}
function iceB_item2() {
    if (document.getElementById("iceB_item2_qty2").value === "") {
        var iceB_item2_qty2 = 0;
        document.getElementById("iceB_item2_qty2").value = "0";
    } else {
        var iceB_item2_qty2 = parseInt(document.getElementById("iceB_item2_qty2").value) * 170;
    }

    if (document.getElementById("iceB_item2_qty3").value === "") {
        var iceB_item2_qty3 = 0;
        document.getElementById("iceB_item2_qty3").value = "0";
    } else {
        var iceB_item2_qty3 = parseInt(document.getElementById("iceB_item2_qty3").value) * 185;
    }

    if (document.getElementById("iceB_item2_topping1").checked) {
        var iceB_item2_toppings1 = 20;
    } else {
        var iceB_item2_toppings1 = 0;
    }
    if (document.getElementById("iceB_item2_topping2").checked) {
        var iceB_item2_toppings2 = 25;
    } else {
        var iceB_item2_toppings2 = 0;
    }

    var iceB_item2_ttl = document.getElementById("iceB_item2_ttl");
    iceB_item2_ttl.value = iceB_item2_qty2 + iceB_item2_qty3 + iceB_item2_toppings1 + iceB_item2_toppings2;
    iceB_ttl_cost()
}
function iceB_item3() {
    if (document.getElementById("iceB_item3_qty2").value === "") {
        var iceB_item3_qty2 = 0;
        document.getElementById("iceB_item3_qty2").value = "0";
    } else {
        var iceB_item3_qty2 = parseInt(document.getElementById("iceB_item3_qty2").value) * 150;
    }

    if (document.getElementById("iceB_item3_qty3").value === "") {
        var iceB_item3_qty3 = 0;
        document.getElementById("iceB_item3_qty3").value = "0";
    } else {
        var iceB_item3_qty3 = parseInt(document.getElementById("iceB_item3_qty3").value) * 165;
    }

    if (document.getElementById("iceB_item3_topping1").checked) {
        var iceB_item3_toppings1 = 20;
    } else {
        var iceB_item3_toppings1 = 0;
    }
    if (document.getElementById("iceB_item3_topping2").checked) {
        var iceB_item3_toppings2 = 25;
    } else {
        var iceB_item3_toppings2 = 0;
    }

    var iceB_item3_ttl = document.getElementById("iceB_item3_ttl");
    iceB_item3_ttl.value = iceB_item3_qty2 + iceB_item3_qty3 + iceB_item3_toppings1 + iceB_item3_toppings2;
    iceB_ttl_cost()
}
function iceB_item4() {
    if (document.getElementById("iceB_item4_qty2").value === "") {
        var iceB_item4_qty2 = 0;
        document.getElementById("iceB_item4_qty2").value = "0";
    } else {
        var iceB_item4_qty2 = parseInt(document.getElementById("iceB_item4_qty2").value) * 165;
    }

    if (document.getElementById("iceB_item4_qty3").value === "") {
        var iceB_item4_qty3 = 0;
        document.getElementById("iceB_item4_qty3").value = "0";
    } else {
        var iceB_item4_qty3 = parseInt(document.getElementById("iceB_item4_qty3").value) * 180;
    }

    if (document.getElementById("iceB_item4_topping1").checked) {
        var iceB_item4_toppings1 = 20;
    } else {
        var iceB_item4_toppings1 = 0;
    }
    if (document.getElementById("iceB_item4_topping2").checked) {
        var iceB_item4_toppings2 = 25;
    } else {
        var iceB_item4_toppings2 = 0;
    }

    var iceB_item4_ttl = document.getElementById("iceB_item4_ttl");
    iceB_item4_ttl.value = iceB_item4_qty2 + iceB_item4_qty3 + iceB_item4_toppings1 + iceB_item4_toppings2;
    iceB_ttl_cost()
}
function iceB_item5() {
    if (document.getElementById("iceB_item5_qty2").value === "") {
        var iceB_item5_qty2 = 0;
        document.getElementById("iceB_item5_qty2").value = "0";
    } else {
        var iceB_item5_qty2 = parseInt(document.getElementById("iceB_item5_qty2").value) * 165;
    }

    if (document.getElementById("iceB_item5_qty3").value === "") {
        var iceB_item5_qty3 = 0;
        document.getElementById("iceB_item5_qty3").value = "0";
    } else {
        var iceB_item5_qty3 = parseInt(document.getElementById("iceB_item5_qty3").value) * 180;
    }

    if (document.getElementById("iceB_item5_topping1").checked) {
        var iceB_item5_toppings1 = 20;
    } else {
        var iceB_item5_toppings1 = 0;
    }
    if (document.getElementById("iceB_item5_topping2").checked) {
        var iceB_item5_toppings2 = 25;
    } else {
        var iceB_item5_toppings2 = 0;
    }

    var iceB_item5_ttl = document.getElementById("iceB_item5_ttl");
    iceB_item5_ttl.value = iceB_item5_qty2 + iceB_item5_qty3 + iceB_item5_toppings1 + iceB_item5_toppings2;
    iceB_ttl_cost()
}
function iceB_item6() {
    if (document.getElementById("iceB_item6_qty2").value === "") {
        var iceB_item6_qty2 = 0;
        document.getElementById("iceB_item6_qty2").value = "0";
    } else {
        var iceB_item6_qty2 = parseInt(document.getElementById("iceB_item6_qty2").value) * 160;
    }

    if (document.getElementById("iceB_item6_qty3").value === "") {
        var iceB_item6_qty3 = 0;
        document.getElementById("iceB_item6_qty3").value = "0";
    } else {
        var iceB_item6_qty3 = parseInt(document.getElementById("iceB_item6_qty3").value) * 175;
    }

    if (document.getElementById("iceB_item6_topping1").checked) {
        var iceB_item6_toppings1 = 20;
    } else {
        var iceB_item6_toppings1 = 0;
    }
    if (document.getElementById("iceB_item6_topping2").checked) {
        var iceB_item6_toppings2 = 25;
    } else {
        var iceB_item6_toppings2 = 0;
    }

    var iceB_item6_ttl = document.getElementById("iceB_item6_ttl");
    iceB_item6_ttl.value = iceB_item6_qty2 + iceB_item6_qty3 + iceB_item6_toppings1 + iceB_item6_toppings2;
    iceB_ttl_cost()
}
function iceB_item7() {
    if (document.getElementById("iceB_item7_qty2").value === "") {
        var iceB_item7_qty2 = 0;
        document.getElementById("iceB_item7_qty2").value = "0";
    } else {
        var iceB_item7_qty2 = parseInt(document.getElementById("iceB_item7_qty2").value) * 160;
    }

    if (document.getElementById("iceB_item7_qty3").value === "") {
        var iceB_item7_qty3 = 0;
        document.getElementById("iceB_item7_qty3").value = "0";
    } else {
        var iceB_item7_qty3 = parseInt(document.getElementById("iceB_item7_qty3").value) * 175;
    }

    if (document.getElementById("iceB_item7_topping1").checked) {
        var iceB_item7_toppings1 = 20;
    } else {
        var iceB_item7_toppings1 = 0;
    }
    if (document.getElementById("iceB_item7_topping2").checked) {
        var iceB_item7_toppings2 = 25;
    } else {
        var iceB_item7_toppings2 = 0;
    }

    var iceB_item7_ttl = document.getElementById("iceB_item7_ttl");
    iceB_item7_ttl.value = iceB_item7_qty2 + iceB_item7_qty3 + iceB_item7_toppings1 + iceB_item7_toppings2;
    iceB_ttl_cost()
}
function iceB_ttl_cost() {
    var iceB_item1_ttl = parseInt(document.getElementById("iceB_item1_ttl").value);
    var iceB_item2_ttl = parseInt(document.getElementById("iceB_item2_ttl").value);
    var iceB_item3_ttl = parseInt(document.getElementById("iceB_item3_ttl").value);
    var iceB_item4_ttl = parseInt(document.getElementById("iceB_item4_ttl").value);
    var iceB_item5_ttl = parseInt(document.getElementById("iceB_item5_ttl").value);
    var iceB_item6_ttl = parseInt(document.getElementById("iceB_item6_ttl").value);
    var iceB_item7_ttl = parseInt(document.getElementById("iceB_item7_ttl").value);

    var iceB_ttl_cost = document.getElementById("iceB_ttl_cost");
    iceB_ttl_cost.value = iceB_item1_ttl + iceB_item2_ttl + iceB_item3_ttl + iceB_item4_ttl + iceB_item5_ttl + iceB_item6_ttl + iceB_item7_ttl;
    iceB_csh_rndrd()
}
function iceB_csh_rndrd() {
    if (document.getElementById("iceB_csh_rndrd").value === "") {
        var iceB_csh_rndrd = 0;
        document.getElementById("iceB_csh_rndrd").value = "0";
    } else {
        var iceB_csh_rndrd = parseInt(document.getElementById("iceB_csh_rndrd").value);
    }

    var iceB_ttl_cost = parseInt(document.getElementById("iceB_ttl_cost").value);

    var iceB_chg = document.getElementById("iceB_chg");
    iceB_chg.value = iceB_csh_rndrd - iceB_ttl_cost;
}
//#### #### tab2
function Flt_item1() {
    if (document.getElementById("Flt_item1_qty2").value === "") {
        var Flt_item1_qty2 = 0;
        document.getElementById("Flt_item1_qty2").value = "0";
    } else {
        var Flt_item1_qty2 = parseInt(document.getElementById("Flt_item1_qty2").value) * 155;
    }

    if (document.getElementById("Flt_item1_qty3").value === "") {
        var Flt_item1_qty3 = 0;
        document.getElementById("Flt_item1_qty3").value = "0";
    } else {
        var Flt_item1_qty3 = parseInt(document.getElementById("Flt_item1_qty3").value) * 170;
    }

    if (document.getElementById("Flt_item1_topping1").checked) {
        var Flt_item1_toppings1 = 20;
    } else {
        var Flt_item1_toppings1 = 0;
    }
    if (document.getElementById("Flt_item1_topping2").checked) {
        var Flt_item1_toppings2 = 25;
    } else {
        var Flt_item1_toppings2 = 0;
    }

    var Flt_item1_ttl = document.getElementById("Flt_item1_ttl");
    Flt_item1_ttl.value = Flt_item1_qty2 + Flt_item1_qty3 + Flt_item1_toppings1 + Flt_item1_toppings2;
    Flt_ttl_cost()
}
function Flt_item2() {
    if (document.getElementById("Flt_item2_qty2").value === "") {
        var Flt_item2_qty2 = 0;
        document.getElementById("Flt_item2_qty2").value = "0";
    } else {
        var Flt_item2_qty2 = parseInt(document.getElementById("Flt_item2_qty2").value) * 170;
    }

    if (document.getElementById("Flt_item2_qty3").value === "") {
        var Flt_item2_qty3 = 0;
        document.getElementById("Flt_item2_qty3").value = "0";
    } else {
        var Flt_item2_qty3 = parseInt(document.getElementById("Flt_item2_qty3").value) * 185;
    }

    if (document.getElementById("Flt_item2_topping1").checked) {
        var Flt_item2_toppings1 = 20;
    } else {
        var Flt_item2_toppings1 = 0;
    }
    if (document.getElementById("Flt_item2_topping2").checked) {
        var Flt_item2_toppings2 = 25;
    } else {
        var Flt_item2_toppings2 = 0;
    }

    var Flt_item2_ttl = document.getElementById("Flt_item2_ttl");
    Flt_item2_ttl.value = Flt_item2_qty2 + Flt_item2_qty3 + Flt_item2_toppings1 + Flt_item2_toppings2;
    Flt_ttl_cost()
}
function Flt_item3() {
    if (document.getElementById("Flt_item3_qty2").value === "") {
        var Flt_item3_qty2 = 0;
        document.getElementById("Flt_item3_qty2").value = "0";
    } else {
        var Flt_item3_qty2 = parseInt(document.getElementById("Flt_item3_qty2").value) * 150;
    }

    if (document.getElementById("Flt_item3_qty3").value === "") {
        var Flt_item3_qty3 = 0;
        document.getElementById("Flt_item3_qty3").value = "0";
    } else {
        var Flt_item3_qty3 = parseInt(document.getElementById("Flt_item3_qty3").value) * 165;
    }

    if (document.getElementById("Flt_item3_topping1").checked) {
        var Flt_item3_toppings1 = 20;
    } else {
        var Flt_item3_toppings1 = 0;
    }
    if (document.getElementById("Flt_item3_topping2").checked) {
        var Flt_item3_toppings2 = 25;
    } else {
        var Flt_item3_toppings2 = 0;
    }

    var Flt_item3_ttl = document.getElementById("Flt_item3_ttl");
    Flt_item3_ttl.value = Flt_item3_qty2 + Flt_item3_qty3 + Flt_item3_toppings1 + Flt_item3_toppings2;
    Flt_ttl_cost()
}
function Flt_item4() {
    if (document.getElementById("Flt_item4_qty2").value === "") {
        var Flt_item4_qty2 = 0;
        document.getElementById("Flt_item4_qty2").value = "0";
    } else {
        var Flt_item4_qty2 = parseInt(document.getElementById("Flt_item4_qty2").value) * 165;
    }

    if (document.getElementById("Flt_item4_qty3").value === "") {
        var Flt_item4_qty3 = 0;
        document.getElementById("Flt_item4_qty3").value = "0";
    } else {
        var Flt_item4_qty3 = parseInt(document.getElementById("Flt_item4_qty3").value) * 180;
    }

    if (document.getElementById("Flt_item4_topping1").checked) {
        var Flt_item4_toppings1 = 20;
    } else {
        var Flt_item4_toppings1 = 0;
    }
    if (document.getElementById("Flt_item4_topping2").checked) {
        var Flt_item4_toppings2 = 25;
    } else {
        var Flt_item4_toppings2 = 0;
    }

    var Flt_item4_ttl = document.getElementById("Flt_item4_ttl");
    Flt_item4_ttl.value = Flt_item4_qty2 + Flt_item4_qty3 + Flt_item4_toppings1 + Flt_item4_toppings2;
    Flt_ttl_cost()
}
function Flt_item5() {
    if (document.getElementById("Flt_item5_qty2").value === "") {
        var Flt_item5_qty2 = 0;
        document.getElementById("Flt_item5_qty2").value = "0";
    } else {
        var Flt_item5_qty2 = parseInt(document.getElementById("Flt_item5_qty2").value) * 165;
    }

    if (document.getElementById("Flt_item5_qty3").value === "") {
        var Flt_item5_qty3 = 0;
        document.getElementById("Flt_item5_qty3").value = "0";
    } else {
        var Flt_item5_qty3 = parseInt(document.getElementById("Flt_item5_qty3").value) * 180;
    }

    if (document.getElementById("Flt_item5_topping1").checked) {
        var Flt_item5_toppings1 = 20;
    } else {
        var Flt_item5_toppings1 = 0;
    }
    if (document.getElementById("Flt_item5_topping2").checked) {
        var Flt_item5_toppings2 = 25;
    } else {
        var Flt_item5_toppings2 = 0;
    }

    var Flt_item5_ttl = document.getElementById("Flt_item5_ttl");
    Flt_item5_ttl.value = Flt_item5_qty2 + Flt_item5_qty3 + Flt_item5_toppings1 + Flt_item5_toppings2;
    Flt_ttl_cost()
}
function Flt_item6() {
    if (document.getElementById("Flt_item6_qty2").value === "") {
        var Flt_item6_qty2 = 0;
        document.getElementById("Flt_item6_qty2").value = "0";
    } else {
        var Flt_item6_qty2 = parseInt(document.getElementById("Flt_item6_qty2").value) * 160;
    }

    if (document.getElementById("Flt_item6_qty3").value === "") {
        var Flt_item6_qty3 = 0;
        document.getElementById("Flt_item6_qty3").value = "0";
    } else {
        var Flt_item6_qty3 = parseInt(document.getElementById("Flt_item6_qty3").value) * 175;
    }

    if (document.getElementById("Flt_item6_topping1").checked) {
        var Flt_item6_toppings1 = 20;
    } else {
        var Flt_item6_toppings1 = 0;
    }
    if (document.getElementById("Flt_item6_topping2").checked) {
        var Flt_item6_toppings2 = 25;
    } else {
        var Flt_item6_toppings2 = 0;
    }

    var Flt_item6_ttl = document.getElementById("Flt_item6_ttl");
    Flt_item6_ttl.value = Flt_item6_qty2 + Flt_item6_qty3 + Flt_item6_toppings1 + Flt_item6_toppings2;
    Flt_ttl_cost()
}
function Flt_item7() {
    if (document.getElementById("Flt_item7_qty2").value === "") {
        var Flt_item7_qty2 = 0;
        document.getElementById("Flt_item7_qty2").value = "0";
    } else {
        var Flt_item7_qty2 = parseInt(document.getElementById("Flt_item7_qty2").value) * 160;
    }

    if (document.getElementById("Flt_item7_qty3").value === "") {
        var Flt_item7_qty3 = 0;
        document.getElementById("Flt_item7_qty3").value = "0";
    } else {
        var Flt_item7_qty3 = parseInt(document.getElementById("Flt_item7_qty3").value) * 175;
    }

    if (document.getElementById("Flt_item7_topping1").checked) {
        var Flt_item7_toppings1 = 20;
    } else {
        var Flt_item7_toppings1 = 0;
    }
    if (document.getElementById("Flt_item7_topping2").checked) {
        var Flt_item7_toppings2 = 25;
    } else {
        var Flt_item7_toppings2 = 0;
    }

    var Flt_item7_ttl = document.getElementById("Flt_item7_ttl");
    Flt_item7_ttl.value = Flt_item7_qty2 + Flt_item7_qty3 + Flt_item7_toppings1 + Flt_item7_toppings2;
    Flt_ttl_cost()
}

function Flt_ttl_cost() {
    var Flt_item1_ttl = parseInt(document.getElementById("Flt_item1_ttl").value);
    var Flt_item2_ttl = parseInt(document.getElementById("Flt_item2_ttl").value);
    var Flt_item3_ttl = parseInt(document.getElementById("Flt_item3_ttl").value);
    var Flt_item4_ttl = parseInt(document.getElementById("Flt_item4_ttl").value);
    var Flt_item5_ttl = parseInt(document.getElementById("Flt_item5_ttl").value);
    var Flt_item6_ttl = parseInt(document.getElementById("Flt_item6_ttl").value);
    var Flt_item7_ttl = parseInt(document.getElementById("Flt_item7_ttl").value);

    var Flt_ttl_cost = document.getElementById("Flt_ttl_cost");
    Flt_ttl_cost.value = Flt_item1_ttl + Flt_item2_ttl + Flt_item3_ttl + Flt_item4_ttl + Flt_item5_ttl + Flt_item6_ttl + Flt_item7_ttl;
    Flt_csh_rndrd()
}
function Flt_csh_rndrd() {
    if (document.getElementById("Flt_csh_rndrd").value === "") {
        var Flt_csh_rndrd = 0;
        document.getElementById("Flt_csh_rndrd").value = "0";
    } else {
        var Flt_csh_rndrd = parseInt(document.getElementById("Flt_csh_rndrd").value);
    }

    var Flt_ttl_cost = parseInt(document.getElementById("Flt_ttl_cost").value);

    var Flt_chg = document.getElementById("Flt_chg");
    Flt_chg.value = Flt_csh_rndrd - Flt_ttl_cost;
}
//#### #### tab3
function SIC_item1() {
    if (document.getElementById("SIC_item1_flavor1").checked) {
        var SIC_item1_flavor1 = 130;
    } else {
        var SIC_item1_flavor1 = 0;
    }
    if (document.getElementById("SIC_item1_flavor2").checked) {
        var SIC_item1_flavor2 = 110;
    } else {
        var SIC_item1_flavor2 = 0;
    }
    if (document.getElementById("SIC_item1_toppings1").checked) {
        var SIC_item1_toppings1 = 10;
    } else {
        var SIC_item1_toppings1 = 0;
    }
    if (document.getElementById("SIC_item1_toppings2").checked) {
        var SIC_item1_toppings2 = 10;
    } else {
        var SIC_item1_toppings2 = 0;
    }
    if (document.getElementById("SIC_item1_toppings3").checked) {
        var SIC_item1_toppings3 = 15;
    } else {
        var SIC_item1_toppings3 = 0;
    }
    if (document.getElementById("SIC_item1_toppings4").checked) {
        var SIC_item1_toppings4 = 15;
    } else {
        var SIC_item1_toppings4 = 0;
    }
    if (document.getElementById("SIC_item1_toppings5").checked) {
        var SIC_item1_toppings5 = 20;
    } else {
        var SIC_item1_toppings5 = 0;
    }

    
    if (document.getElementById("SIC_item1_qty1").value === "") {
        var SIC_item1_qty1 = 0;
        document.getElementById("SIC_item1_qty1").value = "0";
    } else {
        var SIC_item1_qty1 = parseInt(document.getElementById("SIC_item1_qty1").value);
    }

    
    var SIC_item1_ttl = document.getElementById("SIC_item1_ttl");
    SIC_item1_ttl.value = (SIC_item1_flavor1 + SIC_item1_flavor2 + SIC_item1_toppings1 + SIC_item1_toppings2 + SIC_item1_toppings3 + SIC_item1_toppings4 + SIC_item1_toppings5) *  SIC_item1_qty1;
    SIC_ttl_cost()
}
function SIC_item2() {
    if (document.getElementById("SIC_item2_qty2").value === "") {
        var SIC_item2_qty2 = 0;
        document.getElementById("SIC_item2_qty2").value = "0";
    } else {
        var SIC_item2_qty2 = parseInt(document.getElementById("SIC_item2_qty2").value) * 155;
    }

    if (document.getElementById("SIC_item2_qty3").value === "") {
        var SIC_item2_qty3 = 0;
        document.getElementById("SIC_item2_qty3").value = "0";
    } else {
        var SIC_item2_qty3 = parseInt(document.getElementById("SIC_item2_qty3").value) * 170;
    }

    if (document.getElementById("SIC_item2_topping1").checked) {
        var SIC_item2_toppings1 = 20;
    } else {
        var SIC_item2_toppings1 = 0;
    }
    if (document.getElementById("SIC_item2_topping2").checked) {
        var SIC_item2_toppings2 = 25;
    } else {
        var SIC_item2_toppings2 = 0;
    }

    var SIC_item2_ttl = document.getElementById("SIC_item2_ttl");
    SIC_item2_ttl.value = SIC_item2_qty2 + SIC_item2_qty3 + SIC_item2_toppings1 + SIC_item2_toppings2;
    SIC_ttl_cost()
}
function SIC_ttl_cost() {
    var SIC_item1_ttl = parseInt(document.getElementById("SIC_item1_ttl").value);
    // var SIC_item2_ttl = parseInt(document.getElementById("SIC_item2_ttl").value);

    var SIC_ttl_cost = document.getElementById("SIC_ttl_cost");
    SIC_ttl_cost.value = SIC_item1_ttl;
    SIC_csh_rndrd()
}
function SIC_csh_rndrd() {
    if (document.getElementById("SIC_csh_rndrd").value === "") {
        var SIC_csh_rndrd = 0;
        document.getElementById("SIC_csh_rndrd").value = "0";
    } else {
        var SIC_csh_rndrd = parseInt(document.getElementById("SIC_csh_rndrd").value);
    }

    var SIC_ttl_cost = parseInt(document.getElementById("SIC_ttl_cost").value);

    var SIC_chg = document.getElementById("SIC_chg");
    SIC_chg.value = SIC_csh_rndrd - SIC_ttl_cost;
}


// about

// contact

