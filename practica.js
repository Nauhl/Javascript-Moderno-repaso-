
// ARROW FUNCTIIONS

// no pueden haber dos variables de tipo const llamadas numero, ya que const se refiere a constante por lo tanto no puede haber mas iguales
// num es un parametro
// si solo tenemos un parametro "no es necesario ponerlo entre parentesis, ni poner llaves incluso sin el return ya que la 
// flecha es un return tambien", simplemente escribirlo seguido y dara el mismo resultado por ejemplo:
// const numero = num => 'el resultado es: ' + num;
const numero = (num) => {
    return 'el resultado es: ' + num;
}

const res = numero(9);
console.log(res);

//*********************************

// TEMPLATE STRING - para utilizar logica | operanciones

const numero2 = (num1, num2) => (
    `el resultado es: ${num1 + num2}`
)

const resultado = numero2(9, 10);
console.log(resultado);

//*********************************

// OBJETOS

// se utilizan : para representar el igual
const mascota = {
    nombre: 'sirius',
    tipo: 'perro',
    edad: 2,
    raza: 'matadragones',
    color: 'negro',
    vivo: true,
    // tambien puede llenarse con arrays
    razas: ['freishpodul', 'matamilfs', 'doberman']

}

console.log(mascota)
console.log(mascota.vivo)

// inclusive se le puede asignar otra propiedad al objeto desde fuera llamandolo como se muestra abajo

mascota.id = 2;