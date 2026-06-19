function checkOptions(){
    const length=document.getElementById("length");
const password=document.getElementById("password");
const upperCase=document.getElementById("uppercase");
const lowerCase=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("special");
let chars = "";
let value="";

if (upperCase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (lowerCase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
if (numbers.checked) chars += "0123456789";
if (symbols.checked) chars += "!@#$%^&*";
for(let i=0;i<length.value;i++){
    value += chars.charAt(Math.floor(Math.random() * chars.length));   
}

password.innerHTML=value;
}