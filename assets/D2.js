/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let intero1 = 23;
let intero2 = 69;
if (intero1 > intero2) {
  console.log("23 è maggiore");
} else {
  console.log("69 è maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numb1 = 7;
if (numb1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numb2 = prompt("Inserire un numero per l'esercizio numero 3:");
numb2 = parseInt(numb2);
if (numb2 / 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numb3 = 8;
let numb4 = 16;

if (numb3 === 8) {
  console.log("è uguale a 8");
} else if (numb4 - numb3 === 8) {
  console.log("la loro sottrazione è uguale a 8");
} else {
  console.log("la loro addizione non è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalCost;
let totalShoppingCart = 51;
let costoDiSpedizone = 10;
if (totalShoppingCart >= 50) {
  costoDiSpedizone = 0;
} else {
  costoDiSpedizone = 10;
}
totalCost = totalShoppingCart + costoDiSpedizone;
console.log(totalCost);

totalShoppingCart * 0.8;
console.log(totalShoppingCart); // dopo il debrief
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numb5 = 15;
let numb6 = 18;
let numb7 = 3;

if (numb5 > numb6 && numb5 > numb7) {
  if (numb6 > numb7) {
    console.log(numb5, numb6, numb7);
  } else numb7;
  console.log(numb5, numb7, numb6);
} else if (numb6 > numb5 && numb6 > numb7) {
  if (numb5 > numb7) {
    console.log(numb6, numb5, numb7);
  } else {
    console.log(numb6, numb7, numb5);
  }
} else {
  if (numb5 > numb6) {
    console.log(numb7, numb5, numb6);
  } else {
    console.log(numb7, numb6, numb5);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numb8 = 12;
typeof numb8; // type: number

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numb10 = 70;
console.log(numb10 % 2);
if (numb10 % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10) {
  console.log("meno di 5");
} else if (val < 5) {
  console.log("meno di 10");
} else {
  console.log("uguale a 10 o maggiore");
} // aggiornato dopo il debrief
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log(me);
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop("css");
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numb = [];
console.log(numb);
numb.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numb);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numb.splice(9, 1, 100);
console.log(numb);
