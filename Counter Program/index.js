const decresebtn = document.getElementById("decresebtn");
const resetbtn = document.getElementById("resetbtn");
const incresebtn = document.getElementById("incresebtn");
const lbl=document.getElementById("lbl");
let count=0;
incresebtn.onclick=function(){
    count++;
    lbl.innerHTML=count;
}
decresebtn.onclick=function(){
    count--;
    lbl.innerHTML=count;
}
resetbtn.onclick=function(){
    count=0;
    lbl.innerHTML=count; 
}