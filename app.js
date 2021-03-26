const { frutas, money } = require('./frutas')
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: ' hi well cum',
    e: "oO",
    T: "U"
}));

frutas.forEach(item => {
    console.count(item)
})

console.log(money)

// const num = num;

// num = 1 ^ 3 + 5 ^ 3 + 3 ^ 3;

// console.log(num);

// const esN = num => {
//     const NCadena = num.toString(),
//         longitudNum = NCadena.length;
//     let suma = 0;

//     for (let indice = 0; indice < longitudNum; indice++) {
//         let cifraComoEntero = parseInt(numCadena[indice]),
//             numeroElevado = cifraComoEntero ** longitudNum;

//         suma = suma + numeroElevado;
//     }

//     if (suma === numero) return true;
//     else return false;
// }


const sumar2 = (num1, num2) => {
    return (num1 + num2)
}
const resultado = sumar2(20, 30);
console.log(resultado);