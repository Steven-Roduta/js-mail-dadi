/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/



// creo un numero random da 1 a 6
const user = Math.floor (Math.random () * 6) +1;

// creo un numero random sempre da 1 a 6 per il computer
const computer = Math.floor (Math.random () * 6) +1;

// verifico se il numero dell'utente è maggiore del computer e viceversa

if (user > computer){
    console.log('Vinto')
} else if ( computer > user){
    console.log('Perso')
} else {
    console.log('Pareggio')
}
