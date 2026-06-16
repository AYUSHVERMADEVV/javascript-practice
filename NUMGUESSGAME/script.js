const minnum=1;
const maxnum=100;
let turn=0;
let num=Math.floor(Math.random()*(maxnum-minnum+1))+minnum;
let get=true;
while(get)
    {
        let guess =window.prompt("ENTER A NUM :");
        guess=Number(guess);
        turn++;
        help.innerHTML=`YOU GUESSED IT IN ${turn} TURNS`;

if(Number.isNaN(guess)){
    window.alert("ENTER A VALID NUM");}
    else if(guess>maxnum||guess<minnum){
        window.alert("ENTER VALID NUM");

    }
    else if(guess>num){
        window.alert("TOO HIGH");
    }
    else if(guess<num){
        window.alert("Too LOW");
    }
    else{
        window.alert(`YOU GUESSED IT IN ${turn} TURNS`);
        get=false;
    }
}
