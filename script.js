// elemento biglietto
var biglietto = document.getElementById('mio-id');
console.log(biglietto);
// dichiaro var
var km, eta, costotot;
// chiedo il numero di km
km = parseInt(prompt('quanti km devi percorrere?'));


// chiedo l'età
eta = parseInt(prompt('quanti anni hai?'));

// calcolo il costo km tot
costotot = km * 0.21;
console.log(costotot);
// calcolo eventuale sconto per età
if (eta < 18){
  biglietto = costotot - ((costotot / 100) * 20);
}
 if (eta > 65) {
   biglietto = costotot - 
 }
// visualizzo costo biglietto

biglietto.innerHTML = 'Il costo del tuo biglietto è ' + biglietto;
