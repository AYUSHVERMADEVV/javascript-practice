const temp=document.getElementById("temp");
const fh=document.getElementById("fh");
const cc=document.getElementById("cc");
const ans=document.getElementById("ans");
const result=document.getElementById("result");
function cf(...animals){
    for(const animal of animals){
        console.log(animal);
    }
    console.log(...animals);
}
function convert(){
    let value;
value=Number(temp.value);
if(fh.checked){
    result.innerHTML=((value*9/5)+32+"°F");
}
else if(cc.checked){
    result.innerHTML=((value-32)*5/9+"°C");
}
else{
    result.innerHTML="select the unit";
}
}
cf("dog","cat","mouse");