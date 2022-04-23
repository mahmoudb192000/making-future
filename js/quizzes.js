
document.getElementById("er").pause();
document.getElementById("tur").pause();
document.getElementById("cqa1").pause();
/*document.getElementById("cqa2").pause();
document.getElementById("cqa3").pause();
document.getElementById("cqa4").pause();
document.getElementById("cqa5").pause();
document.getElementById("cqa6").pause();
document.getElementById("cqa7").pause();
document.getElementById("cqa8").pause();
document.getElementById("cqa9").pause();
document.getElementById("cqa10").pause();
setTimeout(wait, 2000)
function wait(){
    document.getElementById("wait").remove();
}*/
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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
function q2lsw() {
  document.getElementById("q2lsw").style.display="none";
  document.getElementById("contener1").style.display="block";
  document.getElementById("contener2").style.display="none";
  document.getElementById("q2nsw").style.display="block";
  document.getElementById("q2nsw").style.top="8%";
  document.getElementById("q2nsw").style.left="50%";


}
function q2nsw() {
  document.getElementById("q2nsw").style.display="none";
  document.getElementById("contener2").style.display="block";
  document.getElementById("contener1").style.display="none";
  document.getElementById("q2lsw").style.display="block";
  document.getElementById("q2lsw").style.top="8%";
  document.getElementById("q2lsw").style.left="50%";

}




        function pcqa1(){
            document.getElementById("cqa1").play();
            document.getElementById("cqa1").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o1(){
            document.getElementById("o1").style.boxShadow="10px 10px red";
            document.getElementById("o2").style.boxShadow="none";
            document.getElementById("o3").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("cqa1").pause();
        }
        function o2(){
            document.getElementById("o2").style.boxShadow="10px 10px green";
            document.getElementById("o1").style.boxShadow="none";
            document.getElementById("o3").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
            document.getElementById("cqa1").pause();
        }
        function o3(){
            document.getElementById("o3").style.boxShadow="10px 10px red";
            document.getElementById("o1").style.boxShadow="none";
            document.getElementById("o2").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
            document.getElementById("cqa1").pause();
        }
        
        function pcqa2(){
          //  document.getElementById("cqa2").play();
          //  document.getElementById("cqa2").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o5(){
            document.getElementById("o5").style.boxShadow="10px 10px red";
            document.getElementById("o4").style.boxShadow="none";
            document.getElementById("o6").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
        //    document.getElementById("cqa2").pause();
        }
        function o4(){
            document.getElementById("o4").style.boxShadow="10px 10px green";
            document.getElementById("o5").style.boxShadow="none";
            document.getElementById("o6").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
         //   document.getElementById("cqa2").pause();
        }
        function o6(){
            document.getElementById("o6").style.boxShadow="10px 10px red";
            document.getElementById("o5").style.boxShadow="none";
            document.getElementById("o4").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
           // document.getElementById("cqa2").pause();
        }




        
        function pcqa3(){
          //  document.getElementById("cqa3").play();
          //  document.getElementById("cqa3").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o7(){
            document.getElementById("o7").style.boxShadow="10px 10px red";
            document.getElementById("o8").style.boxShadow="none";
            document.getElementById("o9").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
         //   document.getElementById("cqa3").pause();
        }
        function o9(){
            document.getElementById("o9").style.boxShadow="10px 10px green";
            document.getElementById("o7").style.boxShadow="none";
            document.getElementById("o8").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
          //  document.getElementById("cqa3").pause();
        }
        function o8(){
            document.getElementById("o8").style.boxShadow="10px 10px red";
            document.getElementById("o9").style.boxShadow="none";
            document.getElementById("o7").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
           // document.getElementById("cqa3").pause();
        }


    
     
     
     


        
        function pcqa4(){
          //  document.getElementById("cqa4").play();
          //  document.getElementById("cqa4").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o11(){
            document.getElementById("o11").style.boxShadow="10px 10px red";
            document.getElementById("o10").style.boxShadow="none";
            document.getElementById("o12").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
           // document.getElementById("cqa4").pause();
        }
        function o10(){
            document.getElementById("o10").style.boxShadow="10px 10px green";
            document.getElementById("o11").style.boxShadow="none";
            document.getElementById("o12").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
          //  document.getElementById("cqa4").pause();
        }
        function o12(){
            document.getElementById("o12").style.boxShadow="10px 10px red";
            document.getElementById("o11").style.boxShadow="none";
            document.getElementById("o10").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
          //  document.getElementById("cqa4").pause();
        }




        


        
        function pcqa5(){
           // document.getElementById("cqa5").play();
          //  document.getElementById("cqa5").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o13(){
            document.getElementById("o13").style.boxShadow="10px 10px red";
            document.getElementById("o14").style.boxShadow="none";
            document.getElementById("o15").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
          //  document.getElementById("cqa5").pause();
        }
        function o14(){
            document.getElementById("o14").style.boxShadow="10px 10px green";
            document.getElementById("o15").style.boxShadow="none";
            document.getElementById("o13").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
        //    document.getElementById("cqa5").pause();
        }
        function o15(){
            document.getElementById("o15").style.boxShadow="10px 10px red";
            document.getElementById("o14").style.boxShadow="none";
            document.getElementById("o13").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
         //   document.getElementById("cqa5").pause();
        }



        


        
        function pcqa6(){
           // document.getElementById("cqa6").play();
          //  document.getElementById("cqa6").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o17(){
            document.getElementById("o17").style.boxShadow="10px 10px red";
            document.getElementById("o18").style.boxShadow="none";
            document.getElementById("o16").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
          //  document.getElementById("cqa6").pause();
        }
        function o16(){
            document.getElementById("o16").style.boxShadow="10px 10px green";
            document.getElementById("o17").style.boxShadow="none";
            document.getElementById("o18").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
           /// document.getElementById("cqa6").pause();
        }
        function o18(){
            document.getElementById("o18").style.boxShadow="10px 10px red";
            document.getElementById("o16").style.boxShadow="none";
            document.getElementById("o17").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
           // document.getElementById("cqa6").pause();
        }


        


        
        function pcqa7(){
           // document.getElementById("cqa7").play();
           // document.getElementById("cqa7").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o19(){
            document.getElementById("o19").style.boxShadow="10px 10px red";
            document.getElementById("o20").style.boxShadow="none";
            document.getElementById("o21").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
          //  document.getElementById("cqa7").pause();
        }
        function o21(){
            document.getElementById("o21").style.boxShadow="10px 10px green";
            document.getElementById("o20").style.boxShadow="none";
            document.getElementById("o19").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
          //  document.getElementById("cqa7").pause();
        }
        function o20(){
            document.getElementById("o20").style.boxShadow="10px 10px red";
            document.getElementById("o21").style.boxShadow="none";
            document.getElementById("o19").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
          //  document.getElementById("cqa7").pause();
        }


    


        
        function pcqa8(){
            //document.getElementById("cqa8").play();
           // document.getElementById("cqa8").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o22(){
            document.getElementById("o22").style.boxShadow="10px 10px red";
            document.getElementById("o23").style.boxShadow="none";
            document.getElementById("o24").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
           // document.getElementById("cqa8").pause();
        }
        function o23(){
            document.getElementById("o23").style.boxShadow="10px 10px green";
            document.getElementById("o22").style.boxShadow="none";
            document.getElementById("o24").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
          //  document.getElementById("cqa8").pause();
        }
        function o24(){
            document.getElementById("o24").style.boxShadow="10px 10px red";
            document.getElementById("o22").style.boxShadow="none";
            document.getElementById("o23").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
          //  document.getElementById("cqa8").pause();
        }


    


        
        function pcqa9(){
           // document.getElementById("cqa9").play();
            //document.getElementById("cqa9").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o26(){
            document.getElementById("o26").style.boxShadow="10px 10px red";
            document.getElementById("o25").style.boxShadow="none";
            document.getElementById("o27").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
           // document.getElementById("cqa9").pause();
        }
        function o25(){
            document.getElementById("o25").style.boxShadow="10px 10px green";
            document.getElementById("o26").style.boxShadow="none";
            document.getElementById("o27").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
           // document.getElementById("cqa9").pause();
        }
        function o27(){
            document.getElementById("o27").style.boxShadow="10px 10px red";
            document.getElementById("o25").style.boxShadow="none";
            document.getElementById("o26").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
            //document.getElementById("cqa9").pause();
        }


        
        function pcqa10(){
           // document.getElementById("cqa10").play();
           // document.getElementById("cqa10").currentTime = 0;
            document.getElementById("tur").pause();
            document.getElementById("er").pause();
        }
        function o29(){
            document.getElementById("o29").style.boxShadow="10px 10px red";
            document.getElementById("o30").style.boxShadow="none";
            document.getElementById("o28").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause();
           // document.getElementById("cqa10").pause();
        }
        function o28(){
            document.getElementById("o28").style.boxShadow="10px 10px green";
            document.getElementById("o30").style.boxShadow="none";
            document.getElementById("o29").style.boxShadow="none";
            document.getElementById("er").pause();
            document.getElementById("tur").play();
            document.getElementById("tur").currentTime = 0; 
           // document.getElementById("cqa10").pause();
           
        }
        function o30(){
            document.getElementById("o30").style.boxShadow="10px 10px red";
            document.getElementById("o29").style.boxShadow="none";
            document.getElementById("o28").style.boxShadow="none";
            document.getElementById("er").play();
            document.getElementById("er").currentTime = 0;
            document.getElementById("tur").pause(); 
           // document.getElementById("cqa10").pause();
            
        }
        function shrus(){
          let x1=document.getElementById("numb1").value;
          if (x1==6) {
            document.getElementById("rus1").innerHTML="";
            document.getElementById("l1").style.color="black";
          }
         else{
        var serru1=  document.getElementById("rus1").innerHTML="السؤال الاول خطأ";
          document.getElementById("l1").style.color="red";
         }



         let x2=document.getElementById("numb2").value;
         if (x2==8) {
           document.getElementById("rus2").innerHTML="";
           document.getElementById("l2").style.color="black";

         }
        else{
          var serru2= document.getElementById("rus2").innerHTML="السؤال الثانى خطأ";
         document.getElementById("l2").style.color="red";
        }




        let x3=document.getElementById("numb3").value;
        if (x3==7) {
          document.getElementById("rus3").innerHTML="";
          document.getElementById("l3").style.color="black";

        }
       else{
        var serru3=  document.getElementById("rus3").innerHTML="السؤال الثالث خطأ";
        document.getElementById("l3").style.color="red";
       }


       let x4=document.getElementById("numb4").value;
       if (x4==10) {
         document.getElementById("rus4").innerHTML="";
         document.getElementById("l4").style.color="black";

       }
      else{
        var serru4=  document.getElementById("rus4").innerHTML="السؤال الرابع خطأ";
       document.getElementById("l4").style.color="red";
      }


      let x5=document.getElementById("numb5").value;
      if (x5==10) {
        document.getElementById("rus5").innerHTML="";
        document.getElementById("l5").style.color="black";

      }
     else{
      var serru5= document.getElementById("rus5").innerHTML="السؤال الخامس خطأ";
      document.getElementById("l5").style.color="red";
     }


     let x6=document.getElementById("numb6").value;
     if (x6==9) {
       document.getElementById("rus6").innerHTML="";
       document.getElementById("l6").style.color="black";

     }
    else{
      var serru6=  document.getElementById("rus6").innerHTML="السؤال السادس خطأ";
     document.getElementById("l6").style.color="red";
    }


    let x7=document.getElementById("numb7").value;
    if (x7==15) {
      document.getElementById("rus7").innerHTML="";
      document.getElementById("l7").style.color="black";

    }
   else{
    var serru7=  document.getElementById("rus7").innerHTML="السؤال السابع خطأ";
    document.getElementById("l7").style.color="red";
   }


   let x8=document.getElementById("numb8").value;
   if (x8==3) {
     document.getElementById("rus8").innerHTML="";
     document.getElementById("l8").style.color="black";

   }
  else{
    var serru8= document.getElementById("rus8").innerHTML="السؤال الثامن خطأ";
   document.getElementById("l8").style.color="red";
  }


  let x9=document.getElementById("numb9").value;
         if (x9==3) {
           document.getElementById("rus9").innerHTML="";
           document.getElementById("l9").style.color="black";

         }
        else{
          var serru9=  document.getElementById("rus9").innerHTML="السؤال التاسع خطأ";
         document.getElementById("l9").style.color="red";
        }


        let x10=document.getElementById("numb10").value;
        if (x10==5) {
          document.getElementById("rus10").innerHTML="";
          document.getElementById("l10").style.color="black";

        }
       else{
        var serru10=  document.getElementById("rus10").innerHTML="السؤال العاشر خطأ";
        document.getElementById("l10").style.color="red";
       }

        if (serru1 || serru2 || serru3 || serru4 || serru5 || serru6 || serru7 || serru8 || serru9 || serru10) {
          document.getElementById("er").play();
          document.getElementById("er").currentTime = 0;
          document.getElementById("bo4").style.backgroundImage="url('./photo/bo4.gif')";
        }else{
          document.getElementById("tur").play();
          document.getElementById("tur").currentTime = 0;
          document.getElementById("bo4").style.backgroundImage="url('./photo/b4.gif')";
        }
        }

      
