let box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
let pc=0 ; let you=0 ; let ties=0;
let check=true;


// reset button

document.querySelector(".reset").onclick=function(){
    location.reload();
}

// hover 
function hover(){
for (let i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].onmouseover = function () {
        document.querySelectorAll(".circle")[i].style.display = "inline";
    }
    document.querySelectorAll(".box")[i].onmouseout = function () {
        document.querySelectorAll(".circle")[i].style.display = "none";
    }
}
}
hover();
// display none
const point=()=>{
    for(let i=0; i<9; i++){
        document.querySelectorAll(".x")[i].style.display="none";
        document.querySelectorAll(".o")[i].style.display="none";
    }
}

const checkpoint=()=>{

    console.log(box8 + " " +  box2 + " " + box5);
    if(box1=="you" && box1==box2 && box1==box3 || box1=="you" && box1==box5 && box1==box9 || box1=="you" && box1==box4 && box1==box7 
      || box4=="you" && box4==box5 && box4==box6 || box7=="you" && box7==box8 && box7==box9 || box2=="you" && box2==box5 && box2==box8
      || box3=="you" && box3==box6 && box3==box9
    ){ 
        box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";

          you++; 
          document.querySelector(".c").innerHTML=`${you}`;
          point(); hover(); 
    }
    else if(box1=="pc" && box1==box2 && box1==box3 || box1=="pc" && box1==box5 && box1==box9 || box1=="pc" && box1==box4 && box1==7 
    || box4=="pc" && box4==box5 && box4==box6 || box7=="pc" && box7==box8 && box7==box9 || box2=="pc" && box2==box5 && box2==box8
    || box3=="pc" && box3==box6 && box3==box9){
         box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
          pc++; 
          document.querySelector(".y").innerHTML=`${pc}`;
          point(); hover();
    }
    if(pc>=5){
        alert("you lose");
    }
    if(you>=5){
        alert("you won");
    }
}

// game 

const hoverAfterclick=(i)=>{
    // console.log(i);
    document.querySelectorAll(".box")[i].onmouseover = function () {
        document.querySelectorAll(".circle")[i].style.display = "none";
    }
    document.querySelectorAll(".box")[i].onmouseout = function () {
        document.querySelectorAll(".circle")[i].style.display = "none";
    }
}

const click=(a)=>{
    // console.log("asdf");
    document.querySelector(`.circle${a}`).style.display="inline";
    document.querySelectorAll(".circle")[a-1].style.display = "none";
    hoverAfterclick(a-1);   let x=0;
    while(true){
      
      x=Math.floor(Math.random()*10);
      if(x>=1 && x<=9){
        if(x==1 && box1=="a"){ console.log(x+" "+box1); break; }
        if(x==2 && box2=="a") { console.log(x+" "+box2); break; }
        if(x==3 && box3=="a"){ console.log(x+" "+box3); break; }
        if(x==4 && box4=="a"){ console.log(x+" "+box4); break; }
        if(x==5 && box5=="a"){ console.log(x+" "+box5); break; }
        if(x==6 && box6=="a"){ console.log(x+" "+box6); break; }
        if(x==7 && box7=="a"){ console.log(x+" "+box7); break; }
        if(x==8 && box8=="a"){ console.log(x+" "+box8); break; }
        if(x==9 && box9=="a"){ console.log(x+" "+box9); break; }
        if(box1!="a" && box2!="a" && box3!="a" && box4!="a" && box5!="a" && box6!="a" && box7!="a" && box8!="a" && box9!="a"){
        console.log("out")
        return "out";}
      }
    }
    if(x>=1 && x<=9){
        console.log("x:" + x);
        document.querySelector(`.o${x}`).style.display="inline";
        document.querySelectorAll(".circle")[x-1].style.display="none";
        hoverAfterclick(x-1);
    }
    // else x=9
    return x;
}
// while(pc<5 && you<5){
    document.querySelector(`#box1`).onclick=function(){
        if(box1=="you" || box1=="pc") return;
        let a=1;box1="you";
        let x = click(a); 
        // console.log("x1:" + x);
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}
        if(x==2) box2="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
        checkpoint();
    }
    document.querySelector(`#box2`).onclick=function(){
        if(box2=="you" || box2=="pc") return;
        let a=2;box2="you";
        let x = click(a); 
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}    
        console.log("x2:" + x);

        if(x==1) box1="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
        checkpoint();
    }
    document.querySelector(`#box3`).onclick=function(){
        if(box3=="you" || box3=="pc") return;
        let a=3;box3="you";
        let x = click(a); 
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}       

        console.log("x3:" + x);

        if(x==1) box1="pc"; else if(x==2) box2="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
        checkpoint();
    }
    document.querySelector(`#box4`).onclick=function(){
        if(box4=="you" || box4=="pc") return;
        let a=4;box4="you";
        let x = click(a); 
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}        

        console.log("x4:" + x);

        if(x==1) box1="pc"; else if(x==3) box3="pc"; else if(x==2) box2="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
       checkpoint();
    }
    document.querySelector(`#box5`).onclick=function(){
        if(box5=="you" || box5=="pc") return;
        let a=5; box5="you";
        let x = click(5);
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}       

        console.log("x5:" + x);

        if(x==2) box2="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==1) box1="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
       checkpoint();
    }
    document.querySelector(`#box6`).onclick=function(){
        if(box6=="you" || box6=="pc") return;
        let a=6; box6="you";
        let x = click(a);
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}       
        if(x==2) box2="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==1) box1="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
        checkpoint();

    }
    document.querySelector(`#box7`).onclick=function(){
        if(box7=="you" || box7=="pc") { alert("adsf") ; return; }
        let a=7;box7="you";
        let x = click(a); 
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}       
        if(x==2) box2="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==1) box1="pc"; else if(x==8) box8="pc"; else if(x==9) box9="pc"; 
        checkpoint();

    }
    document.querySelector(`#box8`).onclick=function(){
        if(box8=="you" || box8=="pc") return;
        let a=8; box8="you";
        let x = click(a);
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}        
        console.log("x8:" + x);

        if(x==2) box2="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==1) box1="pc"; else if(x==9) box9="pc"; 
        checkpoint();

    }
    document.querySelector(`#box9`).onclick=function(){
        if(box9=="you" || box9=="pc") return;
        let a=9;box9="you";
        let x = click(a); 
        if(x=="out") { ties++;  document.querySelector(".t").innerHTML=`${ties}`; point(); hover();          box1="a" , box2="a" , box3="a" , box4="a" , box5="a" , box6="a" , box7="a" , box8="a" , box9="a";
        return;}        
        if(x==2) box2="pc"; else if(x==3) box3="pc"; else if(x==4) box4="pc"; else if(x==5) box5="pc"; 
        else if(x==6) box6="pc"; else if(x==7) box7="pc"; else if(x==8) box8="pc"; else if(x==1) box1="pc"; 
        checkpoint();

    }
    

    
    
// }

