// o que são array ou vetores

 /* Arrays são um tipo de lista, ou matriz de variáveis, onde cada
variável possui um índice. Os valores podem ser de vários tipos.*/

/* // como declarar
let array =["string", 1,true ];
console.log(array); */

/*  // pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]; */
/* console.log(array);  //conseguimos acessar pelo indice dentro de[]*/

// metodos para manipular array

/* // forEach() - itera um array, recebe uma função() e uma instução{},
array.forEach(function(item, index){console.log(item, index)}); */

/* //push() – add item no final do array;
array[3].push('novo item');
console.log(array); */

 /* //pop() – remove item no final do array;
 array.pop();
 console.log(array); */

/* //shift() – remove item no início do array;
 array.shift();
 console.log(array); */

/* // unshift() – add item no início do array;
 array.unshift('novo tem');
 console.log(array); */

/* // indexOf() – retorna o índice de um valor;
 console.log(array.indexOf(true)); */

/* // splice() – remove ou substitui um item pelo índice;
array.splice(0, 3);
console.log(array); */

/* // slice() – retorna uma parte de um array existente;
let novoArray = array.slice(0 ,3);
console.log(novoArray); */

/* Objetos
Dados que possuem propriedades e valores que definem suas
características. Deve ser declarado entre chaves “{}” */

let object = {string: "string", number: 1, boolean: true, array:['array'], objectInterno: { objectInterno: "obejeto interno"}}

// console.log(object); // para acessar todas as propiedades
// console.log(object.string); // para acessar determinado propiedade

/* As propriedades de ojbetos podem ser atribuídas à variáveis,
facilitando a manipulação do objeto. Chamamos isso de
desestruturação. */

/*var string = object.string;
console.log(string); */

/*var arrayInterno = object.array;
console.log(arrayInterno); */

/*  // Outra forma de fazer a desestruturação é utilizando chaves ao
declarar a variável */

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
