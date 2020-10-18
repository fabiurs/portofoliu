var r = "";
var rez;
function adauga(val){
    r+=val;
    document.querySelector(".result").innerHTML = r;
}

function sterge(){ 
    document.querySelector(".result").innerHTML = "";
    r = "";
}

function calculeaza(){
    rez = eval(r);
    r = rez;
    document.querySelector(".result").innerHTML = r;
}