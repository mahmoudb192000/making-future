document.getElementById("er").pause();
document.getElementById("tur").pause();
document.getElementById("cqa1").pause();
document.getElementById("cqa2").pause();
document.getElementById("cqa3").pause();
document.getElementById("cqa4").pause();
document.getElementById("cqa5").pause();
document.getElementById("cqa6").pause();
document.getElementById("cqa7").pause();
document.getElementById("cqa8").pause();
document.getElementById("cqa9").pause();
document.getElementById("cqa10").pause();
document.getElementById("cqa11").pause();
document.getElementById("cqa12").pause();
document.getElementById("cqa13").pause();
document.getElementById("qscl1").pause();
document.getElementById("qscl2").pause();
document.getElementById("qscl3").pause();
document.getElementById("qscl4").pause();
document.getElementById("qscl5").pause();
document.getElementById("qscl6").pause();
document.getElementById("qscl7").pause();
document.getElementById("qscl8").pause();
document.getElementById("qscl9").pause();
document.getElementById("qscl10").pause();
setTimeout(wait, 2000)

function wait() {
   document.getElementById("wait").remove();
}

function openNav() {
   document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = function () {
   myFunction()
};

function myFunction() {
   if (document.documentElement.scrollTop > 0) {
      document.getElementById("up1").style.display = "block";
   } else {
      document.getElementById("up1").style.display = "none";
   }

}

function up1() {
   document.documentElement.scrollTop = 0;
}

function q1nsw() {
   document.getElementById("q1nsw").style.display = "none";
   document.getElementById("q1lsw").style.display = "block";
   document.getElementById("q2nsw").style.display = "block";
   document.getElementById("q2lsw").style.display = "block";
   document.getElementById("contener2").style.display = "none";
   document.getElementById("contener1").style.display = "none";
   document.getElementById("contener3").style.display = "block";
   document.getElementById("contener4").style.display = "none";
   document.getElementById("q1lsw").style.top = "8%";
   document.getElementById("q2lsw").style.top = "8%";
   document.getElementById("q2nsw").style.top = "8%";
   document.getElementById("q1lsw").style.left = "25%";
   document.getElementById("q2lsw").style.left = "50%";
   document.getElementById("q2nsw").style.left = "75%";
   document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
   document.getElementById("vu1").value = "";
   document.getElementById("vu2").value = "";
   document.getElementById("vu3").value = "";
   document.getElementById("vu4").value = "";
   document.getElementById("vu5").value = "";
   document.getElementById("vu6").value = "";
   document.getElementById("vu7").value = "";
   document.getElementById("vu8").value = "";
   document.getElementById("vu9").value = "";
   document.getElementById("vu10").value = "";
   document.getElementById("input").innerHTML = "";
   document.getElementById("er").pause();
   document.getElementById("tur").pause();
   document.getElementById("cqa1").pause();
   document.getElementById("cqa2").pause();
   document.getElementById("cqa3").pause();
   document.getElementById("cqa4").pause();
   document.getElementById("cqa5").pause();
   document.getElementById("cqa6").pause();
   document.getElementById("cqa7").pause();
   document.getElementById("cqa8").pause();
   document.getElementById("cqa9").pause();
   document.getElementById("cqa10").pause();
   document.getElementById("cqa11").pause();
   document.getElementById("cqa12").pause();
   document.getElementById("cqa13").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();


}

function q1lsw() {
   document.getElementById("q1lsw").style.display = "none";
   document.getElementById("q2nsw").style.display = "block";
   document.getElementById("q2lsw").style.display = "block";
   document.getElementById("q1nsw").style.display = "block";
   document.getElementById("contener2").style.display = "none";
   document.getElementById("contener1").style.display = "none";
   document.getElementById("contener3").style.display = "none";
   document.getElementById("contener4").style.display = "block";
   document.getElementById("q1nsw").style.top = "8%";
   document.getElementById("q2lsw").style.top = "8%";
   document.getElementById("q2nsw").style.top = "8%";
   document.getElementById("q2nsw").style.left = "25%";
   document.getElementById("q2lsw").style.left = "50%";
   document.getElementById("q1nsw").style.left = "75%";
   document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
   document.getElementById("sqa1").value = "";
   document.getElementById("sqa2").value = "";
   document.getElementById("sqa3").value = "";
   document.getElementById("sqa4").value = "";
   document.getElementById("sqa5").value = "";
   document.getElementById("sqa6").value = "";
   document.getElementById("sqa7").value = "";
   document.getElementById("sqa8").value = "";
   document.getElementById("sqa9").value = "";
   document.getElementById("sqa10").value = "";
   document.getElementById("er").pause();
   document.getElementById("tur").pause();
   document.getElementById("cqa1").pause();
   document.getElementById("cqa2").pause();
   document.getElementById("cqa3").pause();
   document.getElementById("cqa4").pause();
   document.getElementById("cqa5").pause();
   document.getElementById("cqa6").pause();
   document.getElementById("cqa7").pause();
   document.getElementById("cqa8").pause();
   document.getElementById("cqa9").pause();
   document.getElementById("cqa10").pause();
   document.getElementById("cqa11").pause();
   document.getElementById("cqa12").pause();
   document.getElementById("cqa13").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();
}

function q2lsw() {
   document.getElementById("q2lsw").style.display = "none";
   document.getElementById("q1lsw").style.display = "block";
   document.getElementById("q1nsw").style.display = "block";
   document.getElementById("q2nsw").style.display = "block";
   document.getElementById("contener1").style.display = "block";
   document.getElementById("contener2").style.display = "none";
   document.getElementById("contener3").style.display = "none";
   document.getElementById("contener4").style.display = "none";
   document.getElementById("q1nsw").style.top = "8%";
   document.getElementById("q1lsw").style.top = "8%";
   document.getElementById("q2nsw").style.top = "8%";
   document.getElementById("q1nsw").style.left = "25%";
   document.getElementById("q1lsw").style.left = "50%";
   document.getElementById("q2nsw").style.left = "75%";
   document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
   document.getElementById("o1").style.boxShadow = "none";
   document.getElementById("o2").style.boxShadow = "none";
   document.getElementById("o3").style.boxShadow = "none";
   document.getElementById("o4").style.boxShadow = "none";
   document.getElementById("o5").style.boxShadow = "none";
   document.getElementById("o6").style.boxShadow = "none";
   document.getElementById("o7").style.boxShadow = "none";
   document.getElementById("o8").style.boxShadow = "none";
   document.getElementById("o9").style.boxShadow = "none";
   document.getElementById("o10").style.boxShadow = "none";
   document.getElementById("o11").style.boxShadow = "none";
   document.getElementById("o12").style.boxShadow = "none";
   document.getElementById("o13").style.boxShadow = "none";
   document.getElementById("o14").style.boxShadow = "none";
   document.getElementById("o15").style.boxShadow = "none";
   document.getElementById("o16").style.boxShadow = "none";
   document.getElementById("o17").style.boxShadow = "none";
   document.getElementById("o18").style.boxShadow = "none";
   document.getElementById("o19").style.boxShadow = "none";
   document.getElementById("o20").style.boxShadow = "none";
   document.getElementById("o21").style.boxShadow = "none";
   document.getElementById("o22").style.boxShadow = "none";
   document.getElementById("o23").style.boxShadow = "none";
   document.getElementById("o24").style.boxShadow = "none";
   document.getElementById("o25").style.boxShadow = "none";
   document.getElementById("o26").style.boxShadow = "none";
   document.getElementById("o27").style.boxShadow = "none";
   document.getElementById("o28").style.boxShadow = "none";
   document.getElementById("o29").style.boxShadow = "none";
   document.getElementById("o30").style.boxShadow = "none";
   document.getElementById("o31").style.boxShadow = "none";
   document.getElementById("o32").style.boxShadow = "none";
   document.getElementById("o33").style.boxShadow = "none";
   document.getElementById("o34").style.boxShadow = "none";
   document.getElementById("o35").style.boxShadow = "none";
   document.getElementById("o36").style.boxShadow = "none";
   document.getElementById("o37").style.boxShadow = "none";
   document.getElementById("o38").style.boxShadow = "none";
   document.getElementById("o39").style.boxShadow = "none";

   document.getElementById("er").pause();
   document.getElementById("tur").pause();
   document.getElementById("cqa1").pause();
   document.getElementById("cqa2").pause();
   document.getElementById("cqa3").pause();
   document.getElementById("cqa4").pause();
   document.getElementById("cqa5").pause();
   document.getElementById("cqa6").pause();
   document.getElementById("cqa7").pause();
   document.getElementById("cqa8").pause();
   document.getElementById("cqa9").pause();
   document.getElementById("cqa10").pause();
   document.getElementById("cqa11").pause();
   document.getElementById("cqa12").pause();
   document.getElementById("cqa13").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();


}

function q2nsw() {
   document.getElementById("q2nsw").style.display = "none";
   document.getElementById("q1lsw").style.display = "block";
   document.getElementById("q1nsw").style.display = "block";
   document.getElementById("q2lsw").style.display = "block";
   document.getElementById("contener2").style.display = "block";
   document.getElementById("contener1").style.display = "none";
   document.getElementById("contener3").style.display = "none";
   document.getElementById("contener4").style.display = "none";
   document.getElementById("q1nsw").style.top = "8%";
   document.getElementById("q1lsw").style.top = "8%";
   document.getElementById("q2lsw").style.top = "8%";
   document.getElementById("q1nsw").style.left = "25%";
   document.getElementById("q1lsw").style.left = "50%";
   document.getElementById("q2lsw").style.left = "75%";
   document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
   document.getElementById("numb1").value = "";
   document.getElementById("numb2").value = "";
   document.getElementById("numb3").value = "";
   document.getElementById("numb4").value = "";
   document.getElementById("numb5").value = "";
   document.getElementById("numb6").value = "";
   document.getElementById("numb7").value = "";
   document.getElementById("numb8").value = "";
   document.getElementById("numb9").value = "";
   document.getElementById("numb10").value = "";

   document.getElementById("er").pause();
   document.getElementById("tur").pause();
   document.getElementById("cqa1").pause();
   document.getElementById("cqa2").pause();
   document.getElementById("cqa3").pause();
   document.getElementById("cqa4").pause();
   document.getElementById("cqa5").pause();
   document.getElementById("cqa6").pause();
   document.getElementById("cqa7").pause();
   document.getElementById("cqa8").pause();
   document.getElementById("cqa9").pause();
   document.getElementById("cqa10").pause();
   document.getElementById("cqa11").pause();
   document.getElementById("cqa12").pause();
   document.getElementById("cqa13").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function pcqa1() {
   document.getElementById("cqa1").play();
   document.getElementById("cqa1").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o1() {
   document.getElementById("o1").style.boxShadow = "10px 10px red";
   document.getElementById("o2").style.boxShadow = "none";
   document.getElementById("o3").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa1").pause();
}

function o2() {
   document.getElementById("o2").style.boxShadow = "10px 10px green";
   document.getElementById("o1").style.boxShadow = "none";
   document.getElementById("o3").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa1").pause();
}

function o3() {
   document.getElementById("o3").style.boxShadow = "10px 10px red";
   document.getElementById("o1").style.boxShadow = "none";
   document.getElementById("o2").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa1").pause();
}

function pcqa2() {
   document.getElementById("cqa2").play();
   document.getElementById("cqa2").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o5() {
   document.getElementById("o5").style.boxShadow = "10px 10px red";
   document.getElementById("o4").style.boxShadow = "none";
   document.getElementById("o6").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa2").pause();
}

function o4() {
   document.getElementById("o4").style.boxShadow = "10px 10px green";
   document.getElementById("o5").style.boxShadow = "none";
   document.getElementById("o6").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa2").pause();
}

function o6() {
   document.getElementById("o6").style.boxShadow = "10px 10px red";
   document.getElementById("o5").style.boxShadow = "none";
   document.getElementById("o4").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa2").pause();
}


function pcqa3() {
   document.getElementById("cqa3").play();
   document.getElementById("cqa3").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o7() {
   document.getElementById("o7").style.boxShadow = "10px 10px red";
   document.getElementById("o8").style.boxShadow = "none";
   document.getElementById("o9").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa3").pause();
}

function o9() {
   document.getElementById("o9").style.boxShadow = "10px 10px green";
   document.getElementById("o7").style.boxShadow = "none";
   document.getElementById("o8").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa3").pause();
}

function o8() {
   document.getElementById("o8").style.boxShadow = "10px 10px red";
   document.getElementById("o9").style.boxShadow = "none";
   document.getElementById("o7").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa3").pause();
}


function pcqa4() {
   document.getElementById("cqa4").play();
   document.getElementById("cqa4").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o11() {
   document.getElementById("o11").style.boxShadow = "10px 10px red";
   document.getElementById("o10").style.boxShadow = "none";
   document.getElementById("o12").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa4").pause();
}

function o10() {
   document.getElementById("o10").style.boxShadow = "10px 10px green";
   document.getElementById("o11").style.boxShadow = "none";
   document.getElementById("o12").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa4").pause();
}

function o12() {
   document.getElementById("o12").style.boxShadow = "10px 10px red";
   document.getElementById("o11").style.boxShadow = "none";
   document.getElementById("o10").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa4").pause();
}


function pcqa5() {
   document.getElementById("cqa5").play();
   document.getElementById("cqa5").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o13() {
   document.getElementById("o13").style.boxShadow = "10px 10px red";
   document.getElementById("o14").style.boxShadow = "none";
   document.getElementById("o15").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa5").pause();
}

function o14() {
   document.getElementById("o14").style.boxShadow = "10px 10px green";
   document.getElementById("o15").style.boxShadow = "none";
   document.getElementById("o13").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa5").pause();
}

function o15() {
   document.getElementById("o15").style.boxShadow = "10px 10px red";
   document.getElementById("o14").style.boxShadow = "none";
   document.getElementById("o13").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa5").pause();
}


function pcqa6() {
   document.getElementById("cqa6").play();
   document.getElementById("cqa6").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o17() {
   document.getElementById("o17").style.boxShadow = "10px 10px red";
   document.getElementById("o18").style.boxShadow = "none";
   document.getElementById("o16").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa6").pause();
}

function o16() {
   document.getElementById("o16").style.boxShadow = "10px 10px green";
   document.getElementById("o17").style.boxShadow = "none";
   document.getElementById("o18").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa6").pause();
}

function o18() {
   document.getElementById("o18").style.boxShadow = "10px 10px red";
   document.getElementById("o16").style.boxShadow = "none";
   document.getElementById("o17").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa6").pause();
}


function pcqa7() {
   document.getElementById("cqa7").play();
   document.getElementById("cqa7").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o19() {
   document.getElementById("o19").style.boxShadow = "10px 10px red";
   document.getElementById("o20").style.boxShadow = "none";
   document.getElementById("o21").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa7").pause();
}

function o21() {
   document.getElementById("o21").style.boxShadow = "10px 10px green";
   document.getElementById("o20").style.boxShadow = "none";
   document.getElementById("o19").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa7").pause();
}

function o20() {
   document.getElementById("o20").style.boxShadow = "10px 10px red";
   document.getElementById("o21").style.boxShadow = "none";
   document.getElementById("o19").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa7").pause();
}


function pcqa8() {
   document.getElementById("cqa8").play();
   document.getElementById("cqa8").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o22() {
   document.getElementById("o22").style.boxShadow = "10px 10px red";
   document.getElementById("o23").style.boxShadow = "none";
   document.getElementById("o24").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa8").pause();
}

function o23() {
   document.getElementById("o23").style.boxShadow = "10px 10px green";
   document.getElementById("o22").style.boxShadow = "none";
   document.getElementById("o24").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa8").pause();
}

function o24() {
   document.getElementById("o24").style.boxShadow = "10px 10px red";
   document.getElementById("o22").style.boxShadow = "none";
   document.getElementById("o23").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa8").pause();
}


function pcqa9() {
   document.getElementById("cqa9").play();
   document.getElementById("cqa9").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o26() {
   document.getElementById("o26").style.boxShadow = "10px 10px red";
   document.getElementById("o25").style.boxShadow = "none";
   document.getElementById("o27").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa9").pause();
}

function o25() {
   document.getElementById("o25").style.boxShadow = "10px 10px green";
   document.getElementById("o26").style.boxShadow = "none";
   document.getElementById("o27").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa9").pause();
}

function o27() {
   document.getElementById("o27").style.boxShadow = "10px 10px red";
   document.getElementById("o25").style.boxShadow = "none";
   document.getElementById("o26").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa9").pause();
}


function pcqa10() {
   document.getElementById("cqa10").play();
   document.getElementById("cqa10").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o29() {
   document.getElementById("o29").style.boxShadow = "10px 10px red";
   document.getElementById("o30").style.boxShadow = "none";
   document.getElementById("o28").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa10").pause();
}

function o28() {
   document.getElementById("o28").style.boxShadow = "10px 10px green";
   document.getElementById("o30").style.boxShadow = "none";
   document.getElementById("o29").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa10").pause();

}

function o30() {
   document.getElementById("o30").style.boxShadow = "10px 10px red";
   document.getElementById("o29").style.boxShadow = "none";
   document.getElementById("o28").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa10").pause();

}


function pcqa11() {
   document.getElementById("cqa11").play();
   document.getElementById("cqa11").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o31() {
   document.getElementById("o31").style.boxShadow = "10px 10px red";
   document.getElementById("o32").style.boxShadow = "none";
   document.getElementById("o33").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa11").pause();
}

function o32() {
   document.getElementById("o32").style.boxShadow = "10px 10px green";
   document.getElementById("o31").style.boxShadow = "none";
   document.getElementById("o33").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa11").pause();

}

function o33() {
   document.getElementById("o33").style.boxShadow = "10px 10px red";
   document.getElementById("o32").style.boxShadow = "none";
   document.getElementById("o31").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa11").pause();

}


function pcqa12() {
   document.getElementById("cqa12").play();
   document.getElementById("cqa12").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o34() {
   document.getElementById("o34").style.boxShadow = "10px 10px red";
   document.getElementById("o35").style.boxShadow = "none";
   document.getElementById("o36").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa12").pause();
}

function o35() {
   document.getElementById("o35").style.boxShadow = "10px 10px green";
   document.getElementById("o34").style.boxShadow = "none";
   document.getElementById("o36").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa12").pause();

}

function o36() {
   document.getElementById("o36").style.boxShadow = "10px 10px red";
   document.getElementById("o34").style.boxShadow = "none";
   document.getElementById("o35").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa12").pause();

}


function pcqa13() {
   document.getElementById("cqa13").play();
   document.getElementById("cqa13").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("er").pause();
}

function o37() {
   document.getElementById("o37").style.boxShadow = "10px 10px red";
   document.getElementById("o38").style.boxShadow = "none";
   document.getElementById("o39").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa13").pause();
}

function o38() {
   document.getElementById("o38").style.boxShadow = "10px 10px green";
   document.getElementById("o39").style.boxShadow = "none";
   document.getElementById("o37").style.boxShadow = "none";
   document.getElementById("er").pause();
   document.getElementById("tur").play();
   document.getElementById("tur").currentTime = 0;
   document.getElementById("cqa13").pause();

}

function o39() {
   document.getElementById("o39").style.boxShadow = "10px 10px red";
   document.getElementById("o38").style.boxShadow = "none";
   document.getElementById("o37").style.boxShadow = "none";
   document.getElementById("er").play();
   document.getElementById("er").currentTime = 0;
   document.getElementById("tur").pause();
   document.getElementById("cqa13").pause();

}


function shrus() {
   let x1 = document.getElementById("numb1").value;
   if (x1 == 6) {
      document.getElementById("rus1").innerHTML = "";
      document.getElementById("l1").style.color = "black";
   } else {
      var serru1 = document.getElementById("rus1").innerHTML = "السؤال الاول خطأ";
      document.getElementById("l1").style.color = "red";
   }


   let x2 = document.getElementById("numb2").value;
   if (x2 == 8) {
      document.getElementById("rus2").innerHTML = "";
      document.getElementById("l2").style.color = "black";

   } else {
      var serru2 = document.getElementById("rus2").innerHTML = "السؤال الثانى خطأ";
      document.getElementById("l2").style.color = "red";
   }


   let x3 = document.getElementById("numb3").value;
   if (x3 == 7) {
      document.getElementById("rus3").innerHTML = "";
      document.getElementById("l3").style.color = "black";

   } else {
      var serru3 = document.getElementById("rus3").innerHTML = "السؤال الثالث خطأ";
      document.getElementById("l3").style.color = "red";
   }


   let x4 = document.getElementById("numb4").value;
   if (x4 == 10) {
      document.getElementById("rus4").innerHTML = "";
      document.getElementById("l4").style.color = "black";

   } else {
      var serru4 = document.getElementById("rus4").innerHTML = "السؤال الرابع خطأ";
      document.getElementById("l4").style.color = "red";
   }


   let x5 = document.getElementById("numb5").value;
   if (x5 == 10) {
      document.getElementById("rus5").innerHTML = "";
      document.getElementById("l5").style.color = "black";

   } else {
      var serru5 = document.getElementById("rus5").innerHTML = "السؤال الخامس خطأ";
      document.getElementById("l5").style.color = "red";
   }


   let x6 = document.getElementById("numb6").value;
   if (x6 == 9) {
      document.getElementById("rus6").innerHTML = "";
      document.getElementById("l6").style.color = "black";

   } else {
      var serru6 = document.getElementById("rus6").innerHTML = "السؤال السادس خطأ";
      document.getElementById("l6").style.color = "red";
   }


   let x7 = document.getElementById("numb7").value;
   if (x7 == 15) {
      document.getElementById("rus7").innerHTML = "";
      document.getElementById("l7").style.color = "black";

   } else {
      var serru7 = document.getElementById("rus7").innerHTML = "السؤال السابع خطأ";
      document.getElementById("l7").style.color = "red";
   }


   let x8 = document.getElementById("numb8").value;
   if (x8 == 3) {
      document.getElementById("rus8").innerHTML = "";
      document.getElementById("l8").style.color = "black";

   } else {
      var serru8 = document.getElementById("rus8").innerHTML = "السؤال الثامن خطأ";
      document.getElementById("l8").style.color = "red";
   }


   let x9 = document.getElementById("numb9").value;
   if (x9 == 3) {
      document.getElementById("rus9").innerHTML = "";
      document.getElementById("l9").style.color = "black";

   } else {
      var serru9 = document.getElementById("rus9").innerHTML = "السؤال التاسع خطأ";
      document.getElementById("l9").style.color = "red";
   }


   let x10 = document.getElementById("numb10").value;
   if (x10 == 5) {
      document.getElementById("rus10").innerHTML = "";
      document.getElementById("l10").style.color = "black";

   } else {
      var serru10 = document.getElementById("rus10").innerHTML = "السؤال العاشر خطأ";
      document.getElementById("l10").style.color = "red";
   }

   if (serru1 || serru2 || serru3 || serru4 || serru5 || serru6 || serru7 || serru8 || serru9 || serru10) {
      document.getElementById("er").play();
      document.getElementById("er").currentTime = 0;
      document.getElementById("bo4").style.backgroundImage = "url('./photo/bo4.gif')";
   } else {
      document.getElementById("tur").play();
      document.getElementById("tur").currentTime = 0;
      document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
   }
}

function cho1() {
   document.getElementById("cho1").style.border = "4px solid brown";
   document.getElementById("cho1").style.borderRadius = "10px 5px 20px 10px";
   document.getElementById("cho2").style.border = "none";
}

function cho2() {
   document.getElementById("cho2").style.border = "4px solid brown";
   document.getElementById("cho2").style.borderRadius = "10px 5px 20px 10px";
   document.getElementById("cho1").style.border = "none";
}

function qzrg() {
   var q1 = document.getElementById("vu1").value;
   var q2 = document.getElementById("vu2").value;
   var q3 = document.getElementById("vu3").value;
   var q4 = document.getElementById("vu4").value;
   var q5 = document.getElementById("vu5").value;
   var q6 = document.getElementById("vu6").value;
   var q7 = document.getElementById("vu7").value;
   var q8 = document.getElementById("vu8").value;
   var q9 = document.getElementById("vu9").value;
   var q10 = document.getElementById("vu10").value;
   if (q1 == "65" && q2 == "36" && q3 == "0" && q4 == "161" && q5 == "132" && q6 == "1800" && q7 == "2100" && q8 == "1" && q9 == "2" && q10 == "0") {
      document.getElementById("tur").play();
      document.getElementById("tur").currentTime = 0;
      document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
   } else {
      document.getElementById("er").play();
      document.getElementById("er").currentTime = 0;
      document.getElementById("bo4").style.backgroundImage = "url('./photo/bo4.gif')";
   }
}


function sqa1() {
   document.getElementById("qscl1").play();
   document.getElementById("qscl1").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();
}

function sqa2() {
   document.getElementById("qscl2").play();
   document.getElementById("qscl2").currentTime = 0;
   document.getElementById("qscl1").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();
}


function sqa3() {
   document.getElementById("qscl3").play();
   document.getElementById("qscl3").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function sqa4() {
   document.getElementById("qscl4").play();
   document.getElementById("qscl4").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function sqa5() {
   document.getElementById("qscl5").play();
   document.getElementById("qscl5").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function sqa6() {
   document.getElementById("qscl6").play();
   document.getElementById("qscl6").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function sqa7() {
   document.getElementById("qscl7").play();
   document.getElementById("qscl7").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function sqa8() {
   document.getElementById("qscl8").play();
   document.getElementById("qscl8").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl10").pause();

}


function sqa9() {
   document.getElementById("qscl9").play();
   document.getElementById("qscl9").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl1").pause();
   document.getElementById("qscl10").pause();

}


function sqa10() {
   document.getElementById("qscl10").play();
   document.getElementById("qscl10").currentTime = 0;
   document.getElementById("qscl2").pause();
   document.getElementById("qscl3").pause();
   document.getElementById("qscl4").pause();
   document.getElementById("qscl5").pause();
   document.getElementById("qscl6").pause();
   document.getElementById("qscl7").pause();
   document.getElementById("qscl8").pause();
   document.getElementById("qscl9").pause();
   document.getElementById("qscl1").pause();

}


function ql1r() {
   var l1 = document.getElementById("sqa1").value;
   var l2 = document.getElementById("sqa2").value;
   var l3 = document.getElementById("sqa3").value;
   var l4 = document.getElementById("sqa4").value;
   var l5 = document.getElementById("sqa5").value;
   var l6 = document.getElementById("sqa6").value;
   var l7 = document.getElementById("sqa7").value;
   var l8 = document.getElementById("sqa8").value;
   var l9 = document.getElementById("sqa9").value;
   var l10 = document.getElementById("sqa10").value;
   if (l1 == "lion" && l2 == "جبل" && l3 == "سفينة" && l4 == "fish" && l5 == "كتاب" && l6 == "bed" && l7 == "car" && l8 == "هرم" && l9 == "bus" && l10 == "كرة") {
      document.getElementById("tur").play();
      document.getElementById("tur").currentTime = 0;
      document.getElementById("bo4").style.backgroundImage = "url('./photo/b4.gif')";
      document.getElementById("sqa1").value = "";
      document.getElementById("sqa2").value = "";
      document.getElementById("sqa3").value = "";
      document.getElementById("sqa4").value = "";
      document.getElementById("sqa5").value = "";
      document.getElementById("sqa6").value = "";
      document.getElementById("sqa7").value = "";
      document.getElementById("sqa8").value = "";
      document.getElementById("sqa9").value = "";
      document.getElementById("sqa10").value = "";
   } else {
      document.getElementById("er").play();
      document.getElementById("er").currentTime = 0;
      document.getElementById("bo4").style.backgroundImage = "url('./photo/bo4.gif')";
   }
}


"use strict";

var input = document.getElementById('input'), // input/output button
   number = document.querySelectorAll('.numbers div'), // number buttons
   operator = document.querySelectorAll('.operators div'), // operator buttons
   result = document.getElementById('result'), // equal button
   clear = document.getElementById('clear'), // clear button
   resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
   number[i].addEventListener("click", function (e) {

      // storing current input string and its last character in variables - used later
      var currentString = input.innerHTML;
      var lastChar = currentString[currentString.length - 1];

      // if result is not diplayed, just keep adding
      if (resultDisplayed === false) {
         input.innerHTML += e.target.innerHTML;
      } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
         // if result is currently displayed and user pressed an operator
         // we need to keep on adding to the string for next operation
         resultDisplayed = false;
         input.innerHTML += e.target.innerHTML;
      } else {
         // if result is currently displayed and user pressed a number
         // we need clear the input string and add the new input to start the new opration
         resultDisplayed = false;
         input.innerHTML = "";
         input.innerHTML += e.target.innerHTML;
      }

   });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
   operator[i].addEventListener("click", function (e) {

      // storing current input string and its last character in variables - used later
      var currentString = input.innerHTML;
      var lastChar = currentString[currentString.length - 1];

      // if last character entered is an operator, replace it with the currently pressed one
      if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
         var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
         input.innerHTML = newString;
      } else if (currentString.length == 0) {
         // if first key pressed is an opearator, don't do anything
         console.log("enter a number first");
      } else {
         // else just add the operator pressed to the input
         input.innerHTML += e.target.innerHTML;
      }

   });
}

result.addEventListener("click", function () {

   var inputString = input.innerHTML;

   var numbers = inputString.split(/\+|\-|\×|\÷/g);

   var operators = inputString.replace(/[0-9]|\./g, "").split("");

   var divide = operators.indexOf("÷");
   while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
   }

   var multiply = operators.indexOf("×");
   while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
   }

   var subtract = operators.indexOf("-");
   while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
   }

   var add = operators.indexOf("+");
   while (add != -1) {
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
   }

   input.innerHTML = numbers[0];

   resultDisplayed = true;
});

clear.addEventListener("click", function () {
   input.innerHTML = "";
})