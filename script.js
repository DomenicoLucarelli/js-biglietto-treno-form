/*
-al cliccare di un tasto prendi i km e età inseriti dall'utente e memorizzali in una varoiabile
-calcolo prezzo totale senza eventuali sconti (0.21 * numero km da percorrere)


*/

let btnEl = document.getElementById("btn");
let prezzoEl = document.getElementById("prezzo");
// console.log(btnEl)
let etaEl ;
let distanzaEl ;

btnEl.addEventListener("click", function(){

etaEl=document.getElementById("eta").value;

distanzaEl=document.getElementById("distanza").value;

let prezzoNonScontato = (0.21 * distanzaEl);
// console.log(prezzoNonScontato);

    if(etaEl<18){

        let prezzoFinale = ( prezzoNonScontato - (prezzoNonScontato * 20 / 100 ) )
        console.log("Il costo del biglietto è " + prezzoFinale.toFixed(2) + " €")

        
    
    }else if(etaEl>65){
    
         let prezzoFinale = ( prezzoNonScontato - (prezzoNonScontato * 40 / 100 ) )
        console.log("Il costo del biglietto è " + prezzoFinale.toFixed(2) + " €")
    
    
    }else{
    
        console.log("Il costo del biglietto è " + prezzoNonScontato.toFixed(2) + " €" )
    
    }
});

   
