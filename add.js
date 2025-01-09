// La stringa JSON che vogliamo parsare
const funzioneadd = '{"scuola": "Istituto Tecnico", "materia": "matematica", "voto": 10}';

// Parsing della stringa JSON in un oggetto JavaScript
const dettaglialunno = JSON.parse(funzioneadd);

// Aggiungere nuovi campi all'oggetto
dettaglialunno.docente = "Mario Rossi";

// Ora possiamo serializzare nuovamente l'oggetto in una stringa JSON aggiornata
const aggiornadettaglialunno = JSON.stringify(dettaglialunno, null, 2); // 'null, 2' per formattare il JSON in modo leggibile

// Mostra il JSON aggiornato
console.log(aggiornadettaglialunno);