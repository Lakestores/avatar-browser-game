//Declarando variaveis
var estado = 0

//Definindo função
function randomState(nation) {
    var selectedstate = (Math.floor(Math.random()*9)+1);

    var element = document.getElementById(selectedstate);

    element.classList.remove("firenation");
    element.classList.remove("airnation");
    element.classList.remove("waternation");
    element.classList.remove("earthnation");
    
    if(nation==1){element.classList.add("waternation");}
    if(nation==2){element.classList.add("earthnation");}
    if(nation==3){element.classList.add("firenation");}
    if(nation==0){element.classList.add("airnation");}
 
}

function randomEvent(){
    estado++
    randomState((estado%4))
}

function acao1(){

}

//Chamando a função
//setInterval(randomEvent, 3000); 