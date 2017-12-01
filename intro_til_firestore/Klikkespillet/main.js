


var navnE = document.querySelector(".navn");
var startE = document.querySelector(".start");
var klikkE = document.querySelector(".klikk");
var klikkverdiE = document.querySelector(".klikkverdi");

var antKlikk = 0;

klikkE.addEventListener("click", function(){
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk;
});

startE.addEventListener("click", function(){
    antKlikk = 0;
    klikkverdiE.innerHTML = antKlikk;

    setTimeout(function(){
        alert(antKlikk);

    }, 3000);
});


