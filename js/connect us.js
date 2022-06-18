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
   window.open("https://www.facebook.com/profile.php?id=100012510252975");
 }
 function icuf2(){
   window.open("https://www.facebook.com/profile.php?id=100007271748615");
 }
 function icuf3(){
   window.open("https://www.facebook.com/Mohamed.Ayman72");
 }
 function icuf4(){
   window.open("https://www.facebook.com/Abdo.Uwk07");
 }
 function icuf5(){
   window.open("https://www.facebook.com/profile.php?id=100009303497667");
 }
 function icuf6(){
   window.open("https://www.facebook.com/mohamed.ayman.779642");
 }
 function icuf7(){
   window.open("https://www.facebook.com/profile.php?id=100018411032955");
 }
 function icuf8(){
   window.open("https://www.facebook.com/profile.php?id=100007579565246");
 }
 function icuf9(){
   window.open("https://www.facebook.com/profile.php?id=100008104689914");
 }
 function icuf10(){
   window.open("https://www.facebook.com/elsyed.eldamshety");
 }