let check=true ;
let check2=false;

let submit = document.getElementById("submit");
let container1=document.querySelector(".container1");
let container2=document.querySelector(".container2");
let rat1=document.querySelector(".rat1");
let rat2=document.querySelector(".rat2");
let rat3=document.querySelector(".rat3");
let rat4=document.querySelector(".rat4");
let rat5=document.querySelector(".rat5");

//    timer 


let c;

window.onload=function(){
   var fiveminutes = 60 * 1;
 let time = document.querySelector("#time");
   starttime(fiveminutes , time);
}

function starttime(fiveminutes , time){
   let min , seconds;
    c = setInterval(function(){
       min=Math.floor(fiveminutes/60);
       sec=fiveminutes%60;

       min = min<10 ? '0'+min : min;
       sec = sec<10 ? '0'+sec : sec;
  
       time.innerHTML = `${min}:${sec}`

       --fiveminutes;
      if(fiveminutes<0){
         alert("Click on ratings!!");
         clearInterval(c);
         location.reload();
      }
   } , 100)
}





//

submit.onclick=function() {submitbtn()};

function submitbtn(){
   if(check2){
    container1.style.display="none";
    container2.style.display="flex";
   }
   else alert("Firstly Click On Ratings!")
}
 let select=document.querySelector(".select");
//

rat1.onmouseover=function(){mouse1()};
rat1.onmouseleave=function(){mouse12()};

rat2.onmouseover=function(){mouse2()};
rat2.onmouseout=function(){mouse22()};

rat3.onmouseover = function(){mouse3()};
rat3.onmouseout= function(){mouse32()};

rat4.onmouseover = function(){mouse4()};
rat4.onmouseout = function(){mouse42()};

rat5.onmouseover = function(){mouse5()};
rat5.onmouseout = function(){mouse52()};
rat1.onclick=function(){rating1()};
rat2.onclick=function(){rating2()};
rat3.onclick=function(){rating3()};
rat4.onclick=function(){rating4()};
rat5.onclick=function(){rating5()};


//
function mouse1(){
   submit.style.border="1px solid white"
   submit.style.background="none";
}
function mouse12(){
    if(check){
    submit.style.border="none";
    submit.style.background="hsl(25, 97%, 53%)"
    }
}
//
function mouse2(){
    if(check){
    submit.style.border="1px solid white"
    submit.style.background="none";
    }
 }
 function mouse22(){
    if(check){
     submit.style.border="none";
     submit.style.background="hsl(25, 97%, 53%)"
    }
 }
 //
 function mouse3(){
    submit.style.border="1px solid white"
    submit.style.background="none";
 }
 function mouse32(){
    if(check){
     submit.style.border="none";
     submit.style.background="hsl(25, 97%, 53%)"
    }
 }
//
function mouse4(){
    submit.style.border="1px solid white"
    submit.style.background="none";
 }
 function mouse42(){
    if(check){
     submit.style.border="none";
     submit.style.background="hsl(25, 97%, 53%)"
    }
 }
 //
 function mouse5(){
    submit.style.border="1px solid white"
    submit.style.background="none";
 }
 function mouse52(){
    if(check){
     submit.style.border="none";
     submit.style.background="hsl(25, 97%, 53%)"
    }
 }

let timer = document.querySelector(".timer");
function rating1(){
    // let a=rat1.innerText;
    check=false;
    check2=true;
    select.innerHTML=`You selected 1 out of 5`;
    rat1.style.background="hsl(25, 97%, 53%)"
    submit.style.border="1px solid white"
    submit.style.background="none";
   //  timer.style.display="none";
    clearInterval(c);
    document.getElementById("sub").innerHTML="You clicked at "
}

function rating2(){
    check=false;
    check2=true;
    rat2.style.background="hsl(25, 97%, 53%)"
    select.innerHTML=`You selected 2 out of 5`;
    submit.style.border="1px solid white"
    submit.style.background="none";
    clearInterval(c);
    document.getElementById("sub").innerHTML="You clicked at "
}

function rating3(){
    check=false;
    check2=true;
    rat3.style.background="hsl(25, 97%, 53%)"
    select.innerHTML=`You selected 3 out of 5`;
    submit.style.border="1px solid white"
    submit.style.background="none";
    clearInterval(c);
    document.getElementById("sub").innerHTML="You clicked at "
}

function rating4(){
    check=false;
    check2=true;
    rat4.style.background="hsl(25, 97%, 53%)"
    select.innerHTML=`You selected 4 out of 5`;
    submit.style.border="1px solid white"
    submit.style.background="none";
    clearInterval(c);
    document.getElementById("sub").innerHTML="You clicked at "
}

function rating5(){
    check=false;
    check2=true;
    rat5.style.background="hsl(25, 97%, 53%)"
    select.innerHTML=`You selected 5 out of 5`;
    submit.style.border="1px solid white"
    submit.style.background="none";
    clearInterval(c);
    document.getElementById("sub").innerHTML="You clicked at "
}

// next time array -> textContent


//
