// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi già presenti
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var surnameList = ['Battistini', 'Smith', 'Repici', 'Valverde', 'Gangi', 'Arconte', 'Magistris'];

var inputSurname = prompt('Inserisci il cogome');  // Chiedere all’utente il cognome

// controllo/correzione cognome se necessario
var fixedSurname = inputSurname.charAt(0).toUpperCase() + inputSurname.slice(1).toLowerCase();

// inserisco l'input nell'array
surnameList.push(fixedSurname);
// console.log(surnameList); 

// ordino surnameList




// stampa lista in ordine alfabetico
