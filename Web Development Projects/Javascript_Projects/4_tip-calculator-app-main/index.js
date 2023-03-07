document.addEventListener('DOMContentLoaded', function () {
    let c = document.getElementById("tBill");
    console.log(c);
    c.value = "";
    document.getElementById("tn").value = "";
    custom.value = "";
})

let checkBill = false, checkPeople = false;
// declaration
let amt1 = document.getElementById("amt1");
let total = document.getElementById("amt2");
let zero = document.querySelector(".zero");
let custom = document.getElementById("custom");
let button = document.getElementById("but");
//  click function 
document.querySelector(".sm").onclick = function () { fiveper() };
document.querySelector(".ten").onclick = function () { tenper() };
document.querySelector(".fiveteen").onclick = function () { fifper() };
document.querySelector(".tw").onclick = function () { twper() };
document.querySelector(".fiv").onclick = function () { fityper() };
custom.onclick = function () { customNum() };

//  check if number of people are zero or not

function check(n){
    let numberPeople=n;
if (numberPeople == 0) {
    zero.style.display = "inline-block";
    document.getElementById("tn").style.border = "1px solid red";
    amt1.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
    checkBill = false;
    button.style.background = "hsla(187 ,  78% , 30% , 0.755 )";
    return true;
}
zero.style.display = "none";
document.getElementById("tn").style.border = "2px solid hsl(189, 41%, 97%)";
document.getElementById("tn").onmouseover = function () {
    function hoverInput() {
        document.getElementById("tn").style.border = "2px solid hsl(172, 67%, 45%)";
    }
    hoverInput();

};
document.getElementById("tn").onmouseout = function () {
    function hoverOut() {
        document.getElementById("tn").style.border = "2px solid hsl(189, 41%, 97%)";
    }
    hoverOut();
};
return false;
}
//   tip_perPerson ->
function tip_perPeron(x){
    let bill = document.getElementById("tBill").value;
    let numberPeople = document.getElementById("tn").value;
    if(check(numberPeople)==true) return;
    button.style.background = "hsl(180, 59%, 66%)";
    checkBill = true;
    let billValue = parseFloat(bill * 1.0);
    let tip = parseFloat(((billValue * x * 1.0) / 100) / numberPeople);
    let tips = Math.round(tip * 100) / 100;
    if(tips!=0){
        amt1.innerHTML = `$${tips}`;
    }
    return tips;
}
//   total_perPeron ->
function total_perPerson(tips , x){
    let bill = document.getElementById("tBill").value;
    let numberPeople = document.getElementById("tn").value;
//
    if(check(numberPeople)==true) return;
//
    button.style.background = "hsl(180, 59%, 66%)";
    checkBill = true;
    let billValue = parseFloat(bill * 1.0);
    let tot = parseFloat((billValue + (billValue * x * 1.0) / 100)) / numberPeople;
    let tots = Math.round(tot * 100) / 100;
    if(tips!=0){
        total.innerHTML = `$${tots}`;
    }
}
//
function customNum() {
    let x = custom.value;
    console.log(x);
    x = parseInt(x); 
    let tips = tip_perPeron(x);
    total_perPerson(tips , x);
}
// five percent
function fiveper() {
    let tips = tip_perPeron(5.0);
    total_perPerson(tips , 5.0);
}
// ten percent
function tenper() {
    let tips = tip_perPeron(10.0);
    total_perPerson(tips , 10.0);
}
// fifteen percent
function fifper() {
    let tips = tip_perPeron(15.0);
    total_perPerson(tips , 15.0);
}
// twentyfive percent
function twper() {
    let tips = tip_perPeron(25.0);
    total_perPerson(tips , 25.0);
}
// fifty percent 
function fityper() {
    let tips = tip_perPeron(50.0);
    total_perPerson(tips , 50.0);
}
// reset function
button.onclick = function () {
    if (checkBill) {
        location.reload();
    }
}
