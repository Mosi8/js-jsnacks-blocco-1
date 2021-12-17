// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

let n = parseInt(prompt("Inserisci numero"));;

for (let i=0; i< n; i++){
    let array = [];
    for (let d=0; d<10; d++) {
        array.push(Math.floor(Math.random()*100 + 1));
    }
    document.writeln('<div>'+ array + '</div>');
}