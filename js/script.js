/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/



function isPalindrome(word) {
    word = prompt();
    let reverseWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i].trim()
    }
    console.log(reverseWord)
    if (word === reverseWord) {

        return console.log(`La parola è palindroma`)

    } else {
        return console.log(`La parola inserita non è palindroma`)
    }

}

isPalindrome()


