/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// USER INPUTS

const userBet = prompt(`Pari o dispari?`,)
console.log(userBet)
const UserNumber = parseInt(prompt('scegli un numero da 1 a 5'))
console.log(`user number is ${UserNumber}`)

// FUNZIONE NUMERO RANDOM

function getRandomNumber(min = 1, max = 5) {

    const randomNumber = Math.floor((Math.random() * max + 1 - min) + min)
    return randomNumber;
}

// ASSEGNAZIONE NUMERO RANDOM A CPU 

const cpuNumber = getRandomNumber(1, 5)
console.log(`cpu number is ${cpuNumber}`)

// SOMMA DEI VALORI 

const numberSum = UserNumber + cpuNumber;
console.log(`La somma dei numeri è ${numberSum}`)

// FUNZIONE PER DETERMINARE SE LA SOMMA é PARI O DISPARI

function isOdd(number) {
    let result;
    return number % 3 ? result = 'pari' : result = 'dispari'


}
const result = isOdd(numberSum)
console.log(result)

// CONDIZIONE DI VITTORIA DEL GIOCATORE e DICHIARAZIONE

userBet === result ? console.log(`Hai vinto`) : console.log(`Ha vinto il CPU`)





