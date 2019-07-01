
// *DESCRIZIONE*: Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65.

// elemento biglietto
var biglietto = document.getElementById('mio-id');
console.log(biglietto);
// dichiaro var
var km, eta, costotot, costobiglietto;
// chiedo il numero di km
km = parseInt(prompt('quanti km devi percorrere?'));
console.log(km);

// chiedo l'età
eta = parseInt(prompt('quanti anni hai?'));
console.log(eta);
// calcolo il costo km tot
costotot = km * 0.21;
console.log(costotot);
// calcolo eventuale sconto per età
if (eta < 18){
  console.log('ho meno di 18 anni');
  costobiglietto = costotot - ((costotot / 100) * 20);
  console.log(costobiglietto);
}

 else if (eta > 65) {
  console.log(' ho più di 65 anni');
   costobiglietto = costotot - ((costotot / 100) * 40);
 }

else {
  console.log('sono adulto!');
  costobiglietto = costotot;
}

// visualizzo costo biglietto

biglietto.innerHTML = 'Il costo del tuo biglietto è ' + costobiglietto + ' euro';
