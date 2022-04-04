

var q = [
  "What is the abbreviation for Javascript<br /><br />", 
 "A(n) ____ is a collection of elements of the same type placed in contiguous memory locations that can be individually referenced by using an index to a unique identifier.<br /><br />", 
 "A Java ______ is a sequence of characters that exist as an object of the class java.<br /><br />", 
 " A ____ is a block of code that performs a specific task<br /><br />", 
 "What stores values with two states: true or false ?<br /><br />",
  "The ____ marks the beginning and the end of a block of code.<br /><br />", 
  "Each code statement must end with a ____ .<br /><br />", 
  "What symbol is used to comment out a line in Javascript?<br /><br />", 
  "If Java counts positions from zero, what is the first position in a string?<br /><br />", 
  "The + operator can be used between strings to combine them. This is also called _____ .<br /><br />"];
 
 var a1 = ["<button class= button2 onclick=q1c()> JS </button>",
           "<button class= button2 onclick=q2c()> Array </button>",
           "<button class= button2 onclick=q3c()> string </button>",
           "<button class= button2 onclick=q4i()> script </button>",
           "<button class= button2 onclick=q5i()> Variable </button>",
           "<button class= button2 onclick=q6i()> [ ] </button>",
           "<button class= button2 onclick=q7i()> period </button>",
           "<button class= button2 onclick=q8i()> -- </button>",
           "<button class= button2 onclick=q9i()> 2 </button>",
           "<button class= button2 onclick=q10i()> addition </button>"];
 
 var a2 = ["<button class= button2 onclick=q1i()> JSS </button>",
           "<button class= button2 onclick=q2i()> Object </button>",
           "<button class= button2 onclick=q3i()> method </button>",
           "<button class= button2 onclick=q4c()> method </button>",
           "<button class= button2 onclick=q5c()> Boolean </button>",
           "<button class= button2 onclick=q6c()> { } </button>",
           "<button class= button2 onclick=q7i()> question mark </button>",
           "<button class= button2 onclick=q8i()> * </button>",
           "<button class= button2 onclick=q9i()> 1 </button>",
           "<button class= button2 onclick=q10i()> summation </button>"];
 
 var a3 = ["<button class= button2 onclick=q1i()> JScript </button>",
           "<button class= button2 onclick=q2i()> String </button>",
           "<button class= button2 onclick=q3i()> file </button>",
           "<button class= button2 onclick=q4i()> function </button>",
           "<button class= button2 onclick=q5i()> Function </button>",
           "<button class= button2 onclick=q6i()> ( ) </button>",
           "<button class= button2 onclick=q7c()> semi-colon </button>",
           "<button class= button2 onclick=q8c()> // </button>",
           "<button class= button2 onclick=q9i()> -1 </button>",
           "<button class= button2 onclick=q10i()> Combination </button>"];
 
 var a4 = ["<button class= button2 onclick=q1i()> Java </button>",
           "<button class= button2 onclick=q2i()> Variable </button>",
           "<button class= button2 onclick=q3i()> variable </button>",
           "<button class= button2 onclick=q4i()> object </button>",
           "<button class= button2 onclick=q5i()> integer </button>",
           "<button class= button2 onclick=q6i()> < > </button>",
           "<button class= button2 onclick=q7i()> bracket </button>",
           "<button class= button2 onclick=q8i()> || </button>",
           "<button class= button2 onclick=q9c()> 0 </button>",
           "<button class= button2 onclick=q10c()> concatenation </button>"];
 
 var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
 var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];
 
 var n = 0;
 n++;
 var s = 0;
 s++;
 
 var count = 30;
 
 function end001() {
     message001.innerHTML = "End of Quiz.";
     question001.innerHTML = "";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<div id=text001>" + "<button class=button1 onclick=repeat001()>Repeat</button>" + "</div>";
     answer001.innerHTML = "";}
 
 
 function begin001() {
     disappear001.innerHTML = "";
     message001.innerHTML = "";
     question001.innerHTML = q[0];
     answerbtn1.innerHTML = a1[0];
     answerbtn2.innerHTML = a2[0];
     answerbtn3.innerHTML = a3[0];
     answerbtn4.innerHTML = a4[0];
     number001.innerHTML = n++;
     var count = 30;
     var interval = setInterval(function(){
   document.getElementById('countdown').innerHTML=count;
   count--;
   if (count === 0){
     clearInterval(interval);
     document.getElementById('countdown').innerHTML='Done';
     // or...
     alert("You're out of time!");
   }
 }, 1000);
 
 
 }
 
 function q1c() {
     answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest2()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q1i() {
     answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest2()>Next</button>";
 
 }
 
 function quest2() {
     question001.innerHTML = q[1];
     answerbtn1.innerHTML = a1[1];
     answerbtn2.innerHTML = a2[1];
     answerbtn3.innerHTML = a3[1];
     answerbtn4.innerHTML = a4[1];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q2c() {
     answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest3()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q2i() {
     answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest3()>Next</button>";
     
 }
 
 function quest3() {
     question001.innerHTML = q[2];
     answerbtn1.innerHTML = a1[2];
     answerbtn2.innerHTML = a2[2];
     answerbtn3.innerHTML = a3[2];
     answerbtn4.innerHTML = a4[2];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q3c() {
     answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest4()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q3i() {
     answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest4()>Next</button>";
  
 }
 
 function quest4() {
     question001.innerHTML = q[3];
     answerbtn1.innerHTML = a1[3];
     answerbtn2.innerHTML = a2[3];
     answerbtn3.innerHTML = a3[3];
     answerbtn4.innerHTML = a4[3];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q4c() {
     answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest5()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q4i() {
     answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest5()>Next</button>";
     
 }
 
 function quest5() {
     question001.innerHTML = q[4];
     answerbtn1.innerHTML = a1[4];
     answerbtn2.innerHTML = a2[4];
     answerbtn3.innerHTML = a3[4];
     answerbtn4.innerHTML = a4[4];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q5c() {
     answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest6()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q5i() {
     answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest6()>Next</button>";
  
 }
 
 function quest6() {
     question001.innerHTML = q[5];
     answerbtn1.innerHTML = a1[5];
     answerbtn2.innerHTML = a2[5];
     answerbtn3.innerHTML = a3[5];
     answerbtn4.innerHTML = a4[5];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q6c() {
     answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest7()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q6i() {
     answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest7()>Next</button>";
     
 }
 
 
 function quest7() {
     question001.innerHTML = q[6];
     answerbtn1.innerHTML = a1[6];
     answerbtn2.innerHTML = a2[6];
     answerbtn3.innerHTML = a3[6];
     answerbtn4.innerHTML = a4[6];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q7c() {
     answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest8()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q7i() {
     answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest8()>Next</button>";
     
 }
 
 function quest8() {
     question001.innerHTML = q[7];
     answerbtn1.innerHTML = a1[7];
     answerbtn2.innerHTML = a2[7];
     answerbtn3.innerHTML = a3[7];
     answerbtn4.innerHTML = a4[7];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q8c() {
     answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest9()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q8i() {
     answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest9()>Next</button>";
     
 }
 
 function quest9() {
     question001.innerHTML = q[8];
     answerbtn1.innerHTML = a1[8];
     answerbtn2.innerHTML = a2[8];
     answerbtn3.innerHTML = a3[8];
     answerbtn4.innerHTML = a4[8];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q9c() {
     answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=quest10()>Next</button>";
     score001.innerHTML = s++;
 }
 
 function q9i() {
     answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=quest10()>Next</button>";
 
 }
 
 function quest10() {
     question001.innerHTML = q[9];
     answerbtn1.innerHTML = a1[9];
     answerbtn2.innerHTML = a2[9];
     answerbtn3.innerHTML = a3[9];
     answerbtn4.innerHTML = a4[9];
     next001.innerHTML = "";
     answer001.innerHTML = "";
     number001.innerHTML = n++;
 }
 
 function q10c() {
     answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<button class=button1 onclick=end001()>End of Quiz</button>";
     score001.innerHTML = s++;
 }
 
 function q10i() {
     answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     countdown.innerHTML = count - 5;
     next001.innerHTML = "<button class=button1 onclick=end001()>End of Quiz</button>";
      
 
 }
 
 function end001() {
     message001.innerHTML = "End of Quiz.";
     question001.innerHTML = "";
     answerbtn1.innerHTML = "";
     answerbtn2.innerHTML = "";
     answerbtn3.innerHTML = "";
     answerbtn4.innerHTML = "";
     next001.innerHTML = "<div id=text001>" + "<button class=button1 onclick=repeat001()>Repeat</button>" + "</div>";
     answer001.innerHTML = "";
 
     
 }
 
 function repeat001() {
     location.reload();
 }
 