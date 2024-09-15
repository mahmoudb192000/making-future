setTimeout(wait, 2000)
function wait() {
   document.getElementById("wait").remove();
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
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
 }
 
 function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
 }
 function icuf1(){
   window.open("https://mahmoudb192000.github.io/my-website");
 }
 