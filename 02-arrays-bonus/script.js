const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let reverse = teachers.reverse();

const reversedTeachers = reverse;
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri 

/* MINI TASK
    -Utilizziamo un ciclo for per iterare attraverso l'array teachers.
    -Dentro il ciclo, controlliamo se la lunghezza di ogni nome è maggiore o uguale a 5.
    -Se la condizione è vera, aggiungiamo il nome corrente all'array longNames usando il metodo .push().
*/
const longNames  =[];

// Usiamo un ciclo for  per iterare sull'array teachers
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  };
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"), 1);
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

/* MINI TASK
    -Tsformiamo la const in let e gli assegniamo il valore booleano false/0
    -Utilizziamo un ciclo for per iterare attraverso l'array teachers.
    -Controlliamo se nell'array Fabio è presente (teachers[i] === 'Fabio')
    - Se si verifica la condizione la variabile isFabioPresent diventa true
*/


let isFabioPresent = false; // la variabile inizia a false

// Ciclo attraverso l'array
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true; // Se trovi "Fabio", imposta a true
    break; // Esci dal ciclo una volta trovato
  }
};

console.log("Fabio è presente?", isFabioPresent); // Stampa il risultato: true se trovato, false se no




// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

let trasformString = teachers.join(', ') ;// Unisce gli insegnanti con una virgola e uno spazio trasformandoli in stringa
const teachersString = trasformString;

console.log (teachersString);