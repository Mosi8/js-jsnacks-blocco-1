// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.




let numeri = [5, 10, 12, 7, 35, 80, 78, 90, 91];
let red = document.getElementById('red');
let green = document.getElementById('green');


for( i = 0; i < numeri.length; i++) {
    if (numeri [i] %2 != 0) {
        red.innerHTML += numeri [i] + " ";
    }else{
        green.innerHTML += numeri [i] + " ";
    }
}