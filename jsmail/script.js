
//MAIL

//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.


// 1- crea un'array.
const listName = ['Lena', 'Noah', 'Martijn', 'Floor', 'Timo', 'Diana'];

// 2- chiedi all'utente l'email e il nome
const userEmail = prompt('Inserisci la tua email');
const userName = prompt('Inserisci il tuo nome.');

let isListName = false;

// 3- Se non è nella lista non puo' accedere
//  - se è nella lista può accedere
for (let i = 0; i < listName.length; i++) {
    if (userName === listName[i]) {
        alert('Congratulazioni sei in lista!✌️');
        isListName = true;
        break; 
    }
}

if (!isListName) {
    alert('Mi dispiace non sei in Lista🧐');
}

console.log('User Name:', userName);
console.log('List:', listName);

// 4- Non c'è bisogno di validare con l'email