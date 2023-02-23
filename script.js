/*
-creo variabile che recupera l'ID del button
-creo variabili per i dati utente
-faccio inserire dati all'uteente
-al click del button si genera l'evento{
    recupero i dati inseriti dall'utente tramite id
    calcolo il prezzo non scontato e lo memorizzo in una variabile
    uso l'if dell'esercizio biglietto treno avendo cura che si visualizzino 
    tutti i dati in un altro biglietto tramite la proprietà innerHTML
}


*/

let btnEl = document.getElementById("btn");

// console.log(btnEl)
let etaEl ;
let distanzaEl ;
let nomeEl ;
let cognomeEl ;
let bigliettoEl;

btnEl.addEventListener("click", function(){
    nomeEl=document.getElementById("nome").value;

    cognomeEl=document.getElementById("cognome").value;

    etaEl=document.getElementById("eta").value;

    distanzaEl=document.getElementById("distanza").value;

    bigliettoEl=document.getElementById("biglietto")

    bigliettoEl.style.display=("block");

    

    let prezzoNonScontato = (0.21 * distanzaEl);
// console.log(prezzoNonScontato);

    if(etaEl<18){

        let prezzoFinale = ( prezzoNonScontato - (prezzoNonScontato * 20 / 100 ) )

        document.getElementById("nome-mostrato").innerHTML= nomeEl;

        document.getElementById("cognome-mostrato").innerHTML= cognomeEl;

        document.getElementById("eta-mostrata").innerHTML= etaEl;

        document.getElementById("codice-mostrato").innerHTML= Math.floor((Math.random() * 1000) + 1);

        document.getElementById("prezzo-mostrato").innerHTML= prezzoFinale.toFixed(2) + " €";

        



        // console.log("Il costo del biglietto è " + prezzoFinale.toFixed(2) + " €")

        
    
    }else if(etaEl>65){
    
         let prezzoFinale = ( prezzoNonScontato - (prezzoNonScontato * 40 / 100 ) )

         document.getElementById("nome-mostrato").innerHTML= nomeEl;

         document.getElementById("cognome-mostrato").innerHTML= cognomeEl;

         document.getElementById("eta-mostrata").innerHTML= etaEl;

         document.getElementById("codice-mostrato").innerHTML= Math.floor((Math.random() * 1000) + 1);


         document.getElementById("prezzo-mostrato").innerHTML= prezzoFinale.toFixed(2) + " €";

        // console.log("Il costo del biglietto è " + prezzoFinale.toFixed(2) + " €")
    
    
    }else{

         let prezzoFinale = prezzoNonScontato

         document.getElementById("nome-mostrato").innerHTML= nomeEl;

         document.getElementById("cognome-mostrato").innerHTML= cognomeEl;

         document.getElementById("eta-mostrata").innerHTML= etaEl;
         
         document.getElementById("codice-mostrato").innerHTML= Math.floor((Math.random() * 1000) + 1);

         document.getElementById("prezzo-mostrato").innerHTML= prezzoFinale.toFixed(2) + " €";
    
        // console.log("Il costo del biglietto è " + prezzoNonScontato.toFixed(2) + " €" )
    
    }
});

   
