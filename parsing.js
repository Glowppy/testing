const miastringajson = '{"stato": "Italia", "regione": "Puglia", "città": "Taranto", "quartiere": "Talsano"}';

const luogo = JSON.parse(miastringajson);

console.log(luogo.stato);
console.log(luogo.regione);
console.log(luogo.città);

// La funzione JSON.parse prende dei dati e li chiude in una stringa