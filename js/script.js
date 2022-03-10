// console check
console.log("JS OK!")

// indirizzi registrati
const email = ["s.bianchi@yao.it", "m.rossi@gail.it", "g.verdi@hmail"];

// messaggio di benvenuto + prompt
const user = prompt("Benvenuto, utente sconosciuto. Inserisci la tua e-mail per accedere al sito")
console.log(user)

// email convalidate
if (user) {
    for (let i = 0; i < email.length; i++) {
        const registered = email[i];
        if (user === registered) {
            alert("Bentornato, utente registrato");
        } else {
            alert("Indirizzo e-mail non trovato")
        }
    }
}