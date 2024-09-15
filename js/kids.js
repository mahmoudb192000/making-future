setTimeout(wait, 2000)

function wait() {
   document.getElementById("wait").remove();
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   myFunction()
};

function myFunction() {
   var currentScrollPos = window.pageYOffset;
   if (document.documentElement.scrollTop > 0) {
      document.getElementById("up1").style.display = "block";
   } else {
      document.getElementById("up1").style.display = "none";
   }

   if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
   } else {
      document.getElementById("navbar").style.top = "-50px";
   }
   prevScrollpos = currentScrollPos;
}

function up1() {
   document.documentElement.scrollTop = 0;
}

function openNav() {
   document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}
setInterval(cs1, 3000);
setInterval(cs2, 6000);
setInterval(cs3, 9000);
setInterval(cs4, 12000);

function cs1() {
   document.getElementById("ss1").style.display = "block";
   document.getElementById("ss2").style.display = "none";
   document.getElementById("ss3").style.display = "none";
   document.getElementById("ss4").style.display = "none";
   document.getElementById("c1").style.display = "block";
   document.getElementById("c2").style.display = "none";
   document.getElementById("c3").style.display = "none";
   document.getElementById("c4").style.display = "none";
}

function cs2() {
   document.getElementById("ss1").style.display = "none";
   document.getElementById("ss2").style.display = "block";
   document.getElementById("ss3").style.display = "none";
   document.getElementById("ss4").style.display = "none";
   document.getElementById("c1").style.display = "none";
   document.getElementById("c2").style.display = "block";
   document.getElementById("c3").style.display = "none";
   document.getElementById("c4").style.display = "none";
}

function cs3() {
   document.getElementById("ss1").style.display = "none";
   document.getElementById("ss2").style.display = "none";
   document.getElementById("ss3").style.display = "block";
   document.getElementById("ss4").style.display = "none";
   document.getElementById("c1").style.display = "none";
   document.getElementById("c2").style.display = "none";
   document.getElementById("c3").style.display = "block";
   document.getElementById("c4").style.display = "none";
}

function cs4() {
   document.getElementById("ss1").style.display = "none";
   document.getElementById("ss2").style.display = "none";
   document.getElementById("ss3").style.display = "none";
   document.getElementById("ss4").style.display = "block";
   document.getElementById("c1").style.display = "none";
   document.getElementById("c2").style.display = "none";
   document.getElementById("c3").style.display = "none";
   document.getElementById("c4").style.display = "block";
}