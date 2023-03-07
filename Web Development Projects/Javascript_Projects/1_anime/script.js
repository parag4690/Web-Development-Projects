let llist = document.getElementsByTagName("nav") // starts with indexs
console.log(llist)
for(let i=0; i<llist.length; i++){
   llist[i].style.color="red"
  llist[i].style.background="black"
}
llist[0].firstElementChild.style.display="flex" // ul
llist[0].firstElementChild.style.flexDirection="row"
llist[0].firstElementChild.nextElementSibling.style.display="flex" // ul
llist[0].firstElementChild.nextElementSibling.style.flexDirection="row"
llist[0].style.display="flex"
llist[0].style.flexDirection="row"
llist[0].style.justifyContent="space-between"
//  search
let search_bar=document.getElementById("search")
search_bar.style.padding="5px"
search_bar.style.borderRadius="7px"
search_bar.style.border="none"
search_bar.style.height="1.3rem"
// button

let button_bar = document.getElementsByTagName("button")[1]
button_bar.style.padding="5px"
button_bar.style.borderRadius="7px"
button_bar.style.width="5rem"
button_bar.style.border="none"
button_bar.style.background="#0d6efd"
button_bar.style.height="1.92rem"
button_bar.style.fontSize="15px"
button_bar.style.color="white"
button_bar.style.fontWeight="800"

let heading = document.getElementById("Title")

heading.style.fontSize="1.2rem"
heading.style.fontWeight="600"

//  ***********           container       **************//
function myFunction(){
  document.getElementById("con").style.display="flex"
}

