const check=document.getElementById("check");
const master=document.getElementById("master");
const visa=document.getElementById("visa");
const paypal=document.getElementById("paypal");
const Subbtn=document.getElementById("Subbtn");
const subresult=document.getElementById("subresult");
const presult=document.getElementById("presult");

Subbtn.onclick=function(){
if(check.checked){
    subresult.textContent="you are subscribed";
}
else{
    subresult.innerHTML="you are not subscribed";
}
if(master.checked){
    presult.textContent="you are paying with master card";
}
else if(visa.checked){
    presult.textContent="you are paying with visa card";
}
else if(paypal.checked){
    presult.textContent="you are paying with paypal";
}
else{
  presult.textContent="you have to chosse any  any method";
}
}