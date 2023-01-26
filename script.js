let input  = document.querySelector("input");
let cake = document.querySelectorAll(".cake");
let chocolate = document.querySelectorAll(".chocolate");
let allbtn = document.querySelectorAll("ul")[0];
let cakebtn = document.querySelectorAll("ul")[1];
let chocolatebtn = document.querySelectorAll("ul")[2];

allbtn.style.backgroundColor = "rgb(255, 115, 138)"

cakebtn.onclick = ()=>{
    allbtn.style.backgroundColor = "transparent"
cakebtn.style.backgroundColor = "rgb(255, 115, 138)"
chocolatebtn.style.backgroundColor = "transparent"
chocolate.forEach((chocolate,i)=>{
document.querySelectorAll(".chocolate")[i].style.display = "none"
})
cake.forEach((cake,i)=>{
document.querySelectorAll(".cake")[i].style.display = "inline"
})
}
allbtn.onclick =()=>{
allbtn.style.backgroundColor = "rgb(255, 115, 138)"
cakebtn.style.backgroundColor = "transparent"
chocolatebtn.style.backgroundColor = "transparent"
chocolate.forEach((chocolate,i)=>{
document.querySelectorAll(".chocolate")[i].style.display = "inline"
})
cake.forEach((cake,i)=>{
document.querySelectorAll(".cake")[i].style.display = "inline"
})
random()
setInterval(()=>{
if(allbtncolor != "rgb(255, 115, 138)" ){
//    clearInterval(intervals)
console.log(cakebgcolor)
console.log("notnot")
}
},200)

}

chocolatebtn.onclick = ()=>{
allbtn.style.backgroundColor = "transparent"
cakebtn.style.backgroundColor = "transparent"
chocolatebtn.style.backgroundColor = "rgb(255, 115, 138)"
cake.forEach((cake,i)=>{
document.querySelectorAll(".cake")[i].style.display = "none"
})
chocolate.forEach((chocolate,i)=>{
document.querySelectorAll(".chocolate")[i].style.display = "inline"
})
}