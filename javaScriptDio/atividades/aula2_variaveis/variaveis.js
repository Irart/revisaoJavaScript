//tipos de variaveis primitivos

//boolen 
/*var valor = false;
console.log(typeof(valor)); //typeof(nomeVariavel) mostra o tipo da variavel

//number
var numero = 1;
console.log(typeof(numero));

//string
var letras = "diana";
console.log(typeof(letras)); */

//tipos para declarar variavel

/*var - escopo global e local, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;*/
/*var variavel ="diana";
variavel = "martine";
console.log(variavel);

/*let – escopo local de bloco, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;*/
/*let variavel2 = 'diana';
variavel2 = 'martine';
console.log(variavel2);

/*const – escopo local de bloco, somente leitura, o valor inicial é
obrigatório e não pode ser alterado.*/
/*const constante = 'diana';
console.log(constante);


/*Escopo global – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.*/

/*var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
    
}
escopoLocal();

/* //atribuição 
var atriicao = 'diana';

/* //comparação
var comparacao = '0' = 0;
console.log(comparacao);

/*
//comparação identica
var comparacaoidentica = '0' === 0;
console.log(comparacaoidentica);*/

/*//adição
var adicao = 1+1;
console.log(adicao);*/

/*//subtração
var subtracao = 1-1;
console.log(subtracao);*/


/* //multipliçao
var multiplicacao = 2 * 3;
console.log(multiplicacao);*/

 /* //divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);*/

/* //divisão inteira ou resto da divisão
var divisaoInteira = 5 % 2;
console.log(divisaoInteira); */

/* //potenciação 
var potenciacao = 2 ** 10; //2 elevado ao 10
console.log(potenciacao); */


//operadores relacionais

/* //maior que
var maiorQue = 5 > 2;
console.log(maiorQue); */

/* //menor que
var menorQue = 5 < 2;
console.log(menorQue); */

/* //maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual); */

/* //menor ou igual
var menorOugual = 5 <= 2;
console.log(menorOugual); */

//operadores lógicos

/* // 'e' &&
var e = true && false;
console.log(e); */

/* // 'ou' ||
var ou = true || false;
console.log(ou); */

// 'não' !, essa operção inverte o valor 
var nao = !true;
console.log(nao);
