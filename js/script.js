// console check
console.log("JS OK!")

// indirizzi registrati
const email = ["s.bianchi@yao.it", "m.rossi@gail.it", "g.verdi@hmail"];

// messaggio di benvenuto + prompt
const user = prompt("Benvenuto, utente sconosciuto. Inserisci la tua e-mail per accedere al sito")
console.log(user)

// variabile d'appoggio
let emailcheck = false

// email convalidate
if (user) {
    for (let i = 0; i < email.length; i++) {
        const registered = email[i];
        if (user === registered) {
            console.log("indirizzo trovato");
            emailcheck = true;
        }
    }
}

// email non trovata
if (emailcheck) {
    alert("Bentornato, utente registrato");
} else {
    alert("Indirizzo e-mail non riconosciuto");
}