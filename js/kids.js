setTimeout(wait, 2000)
function wait(){
    document.getElementById("wait").remove();
}
  window.onscroll = function() {myFunction()};
  function myFunction() {
if(document.documentElement.scrollTop > 0){
document.getElementById("up1").style.display="block";
}
else{
    document.getElementById("up1").style.display="none";
}
  }
 
function up1(){
  document.documentElement.scrollTop = 0;
}

function cs1() {
document.getElementById("ss1").style.display="block";
document.getElementById("ss2").style.display="none";
document.getElementById("ss3").style.display="none";
document.getElementById("ss4").style.display="none";
document.getElementById("c1").style.display="block";
document.getElementById("c2").style.display="none";
document.getElementById("c3").style.display="none";
document.getElementById("c4").style.display="none";
}
function cs2(){
    document.getElementById("ss1").style.display="none";
    document.getElementById("ss2").style.display="block";
    document.getElementById("ss3").style.display="none";
    document.getElementById("ss4").style.display="none";
    document.getElementById("c1").style.display="none";
    document.getElementById("c2").style.display="block";
    document.getElementById("c3").style.display="none";
    document.getElementById("c4").style.display="none";
}
function cs3(){
    document.getElementById("ss1").style.display="none";
    document.getElementById("ss2").style.display="none";
    document.getElementById("ss3").style.display="block";
    document.getElementById("ss4").style.display="none";
    document.getElementById("c1").style.display="none";
    document.getElementById("c2").style.display="none";
    document.getElementById("c3").style.display="block";
    document.getElementById("c4").style.display="none";
}
function cs4(){
    document.getElementById("ss1").style.display="none";
    document.getElementById("ss2").style.display="none";
    document.getElementById("ss3").style.display="none";
    document.getElementById("ss4").style.display="block";
    document.getElementById("c1").style.display="none";
    document.getElementById("c2").style.display="none";
    document.getElementById("c3").style.display="none";
    document.getElementById("c4").style.display="block";
}


        