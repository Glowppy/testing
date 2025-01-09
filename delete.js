// La stringa JSON che vogliamo parsare
const funzionedelete = '{"scuola": "Istituto Tecnico", "materia": "matematica", "voto": 10, "docente": "Mario Rossi"}';

// Parsing della stringa JSON in un oggetto JavaScript
const dettaglialunno = JSON.parse(funzionedelete);

// Mostra l'oggetto prima di rimuovere i campi
console.log("Prima che venga rimosso:", dettaglialunno);

// Rimuovere il campo 'docente'
delete dettaglialunno.docente;

// Mostra l'oggetto dopo aver rimosso i campi
console.log("Dopo la rimozione:", dettaglialunno);

// Ora possiamo serializzare nuovamente l'oggetto in una stringa JSON aggiornata
const aggiornadettaglialunno = JSON.stringify(dettaglialunno, null, 2); // 'null, 2' per formattare il JSON in modo leggibile

// Mostra il JSON aggiornato
console.log(aggiornadettaglialunno);