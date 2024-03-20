//Practica 3: Definición Básica de Función
//Ejercicio 1: Definición Básica de Función. Objetivo: 

function sumar(a: number, b: number): number {
  return a + b;
}
let resultado: number = sumar(200, 56);
console.log(resultado);

//Ejercicio 2: Parámetros Opcionales. Objetivo: Escribe una función que tome dos números como argumentos; el segundo número debe ser opcional.Si el segundo número no se proporciona, simplemente devuelve el primer número.

function argumentos(numero1: number, numero2?: number): number {
  if (numero2 === undefined) {
    return numero1;
  } else {
    return numero1 + numero2;
  }
}
console.log(argumentos(252,));
console.log(argumentos(252, 74));

//Ejercicio 3: Valor por Defecto para Parámetros. Objetivo: Desarrolla una función que tome dos números como parámetros, con el segundo parámetro teniendo un valor por defecto de 10. La función debe retornar la multiplicación de ambos números.

function multiplicar(numero01: number, numero02: number = 10): number {
  return numero01 * numero02;
}
console.log(multiplicar(20,));

//Ejercicio 4: Tipos de Retorno. Objetivo: Implementa una función que reciba dos números y retorne su suma como un string.

function suma_string(n1: number, n2: number): string {
  const suma = n1 + n2;
  return suma.toString();
}

let resultado_n: string = suma_string(10, 20);
console.log(resultado_n); 