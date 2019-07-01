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

if (eta > 65) {
   costobiglietto = costotot - ((costotot / 100) * 40);
 }

else {
  costobiglietto = costotot;
}

// visualizzo costo biglietto

biglietto.innerHTML = 'Il costo del tuo biglietto è ' + costobiglietto;
