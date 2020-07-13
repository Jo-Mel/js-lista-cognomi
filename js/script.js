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

// mettere gli elementi dell'array in ordine alfabetico
surnameList.sort();
// console.log(surnameList);

// ordino in lista surnameList e stampo a schermo
for (var i = 0; i < surnameList.length; i++) {
    document.getElementById('cognomi').innerHTML += '<li>' + surnameList[i] + '</li>';
}

// Indicare la posizione dell'input nell'array

var i = 0;
var trovato = false;

while (i < surnameList.length && trovato == false){
    if (fixedSurname == surnameList[i]){
    trovato = true;
    }
    i++;
} 
console.log(i);

if (trovato == true) {
    console.log('cognome trovato');
} else {
    console.log('cognome non trovato');
}

//******Variante con Indexof */

// var position = surnameList.indexOf(fixedSurname) +1;
// console.log(position);


//******variante con la var position */

// var i = 0;
// var position = -1;
// while (i < surnameList.length && position == -1){
//     if (fixedSurname == surnameList[i]){
//     position = ++i;
//     }
//     i++;
// } 

// if (position != -1) {
//     console.log('il cognome si trova al ' + position + ' posto');
// } else {
//     console.log('il cognome non è stato trovato');
    
// }

