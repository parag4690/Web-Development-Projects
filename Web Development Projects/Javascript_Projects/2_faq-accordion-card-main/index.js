let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");

let inside1=document.getElementById("inside1");
let inside2=document.getElementById("inside2");
let inside3=document.getElementById("inside3");
let inside4=document.getElementById("inside4");
let inside5=document.getElementById("inside5");
let inside = document.querySelector(".inside");
let content = document.querySelector(".content");

let c1=0 , c2=0 , c3=0 , c4=0, c5=0;

let check1=true , check2=true , check3=true , check4=true , check5=true;
icon1.onclick = function() {addcontent1()};
icon2.onclick = function() {addcontent2()};
icon3.onclick = function() {addcontent3()};
icon4.onclick = function() {addcontent4()};
icon5.onclick = function() {addcontent5()};

function addcontent1(){
    if(check1){
    // alert("clicked");
    c1=document.createElement("div");
    c1.className+="newMem1";
    c1.innerHTML="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    // setTimeout(() => {
      
    
    inside1.appendChild(c1);
    inside1.style.display="flex";
    inside1.style.flexDirection="column";
    inside1.style.gap="1rem";
    // c1.style.transition="all 0.5s";
    inside1.firstElementChild.style.color="black";
    inside1.firstElementChild.style.fontWeight=600;
  // } , 
      icon1.style.transform="rotate(180deg)"
      icon1.style.transition="all 0.5s"
    check1=false;   
    check2=false; check3=false; check4=false; check5=false;
    addcontent2(); addcontent3(); addcontent4(); addcontent5();
    // c1.style.transition.
}
else{
    // alert("hihi");
    icon1.style.transform="rotate(0deg)"
    inside1.firstElementChild.style.color="hsl(0, 1%, 39%)";
    inside1.firstElementChild.style.fontWeight=400;
    if(c1!=0){
    c1.style.display="none";
  }
    check1=true;
}
}

//
function addcontent2(){
    if(check2){
    // alert("clicked");
    console.log(inside);
    c2=document.createElement("div");
    c2.innerHTML="No more than 2GB. All files in your account must fit your allotted storage space."
    inside2.appendChild(c2);
    inside2.style.display="flex";
    inside2.style.flexDirection="column";
    inside2.style.gap="1rem";
    inside2.firstElementChild.style.color="black";
    inside2.firstElementChild.style.fontWeight=600;
    check2=false;    
    check1=false; check3=false; check4=false; check5=false;
    addcontent1(); addcontent3(); addcontent4(); addcontent5();
    icon2.style.transform="rotate(180deg)"
    icon2.style.transition="all 0.5s"

}
else{
    icon2.style.transform="rotate(0deg)"
    inside2.firstElementChild.style.color="hsl(0, 1%, 39%)";
    inside2.firstElementChild.style.fontWeight=400;
    if(c2!=0)
    c2.style.display="none";
  check2=true;
}
}

// 

function addcontent3(){
    if(check3){
    // alert("clicked");
    console.log(inside);
    c3=document.createElement("div");
    c3.innerHTML="Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you."
    inside3.appendChild(c3);
    inside3.style.display="flex";
    inside3.style.flexDirection="column";
    inside3.style.gap="1rem";
    inside3.firstElementChild.style.color="black";
    inside3.firstElementChild.style.fontWeight=600;
    check3=false;    
    check1=false; check2=false; check4=false; check5=false;
    addcontent1(); addcontent2(); addcontent4(); addcontent5();
    icon3.style.transform="rotate(180deg)"
    icon3.style.transition="all 0.5s"

}
else{
    icon3.style.transform="rotate(0deg)"
    inside3.firstElementChild.style.color="hsl(0, 1%, 39%)";
    inside3.firstElementChild.style.fontWeight=400;
    if(c3!=0)
    c3.style.display="none";
  check3=true;
}
}

//
function addcontent4(){
    if(check4){
    // alert("clicked");
    console.log(inside);
    c4=document.createElement("div");
    c4.innerHTML="Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you."
    inside4.appendChild(c4);
    inside4.style.display="flex";
    inside4.style.flexDirection="column";
    inside4.style.gap="1rem";
    inside4.firstElementChild.style.color="black";
    inside4.firstElementChild.style.fontWeight=600;
    check4=false;   
    check1=false; check3=false; check2=false; check5=false;
    addcontent1(); addcontent3(); addcontent2(); addcontent5(); 
    icon4.style.transform="rotate(180deg)"
    icon4.style.transition="all 0.5s"

}
else{
    icon4.style.transform="rotate(0deg)"
    inside4.firstElementChild.style.color="hsl(0, 1%, 39%)";
    inside4.firstElementChild.style.fontWeight=400;
    if(c4!=0)
    c4.style.display="none";
  check4=true;
}
}

//
function addcontent5(){
    if(check5){
    // alert("clicked");
    console.log(inside);
    c5=document.createElement("div");
    c5.innerHTML="Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you."
    inside5.appendChild(c5);
    inside5.style.display="flex";
    inside5.style.flexDirection="column";
    inside5.style.gap="1rem";
    inside5.firstElementChild.style.color="black";
    inside5.firstElementChild.style.fontWeight=600;
    check5=false;  
    check1=false; check3=false; check4=false; check2=false;
    addcontent1(); addcontent3(); addcontent4(); addcontent2();  
    icon5.style.transform="rotate(180deg)"
    icon5.style.transition="all 0.5s"

}
else{
    icon5.style.transform="rotate(0deg)"
    inside5.firstElementChild.style.color="hsl(0, 1%, 39%)";
    inside5.firstElementChild.style.fontWeight=400;
    if(c5!=0)
    c5.style.display="none";
  check5=true;
}
}

// this method is not good use display none rather than this because it will add new div extra every time u click

