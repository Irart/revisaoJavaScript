/* Estruturas condicionais - São instruções para realizar determinadas tarefas a partir de uma
condição, seja de decisão ou repetição; */

/*
var jogador1 = 1;
var jogador2 = 0;
var placar;
*/


/* "if" - Podemos usar as palavras reservadas “if” para estabelecer uma
condição */ 

/* if (jogador1 > 0) {
    console.log("Jogador1 marcoun ponto");
} */
// como ler: se o jogador1 tiver valor maior que 0 ele marcou ponto


/* // "else"-No caso de a condição não ser atendida podemos usar o "else" 
if (jogador1 > 0) {
    console.log("Jogador1 marcoun ponto");
}
else {
    console.log("ninguém marcou ponto");
} */



/* // "else if" - caso haja mais de uma condição usamos o "else if"
if (jogador1 > 0) {
    console.log("Jogador1 marcoun ponto");
}
else if(jogador2 > 0){
    console.log("Jogador 2 marcou ponto");
}
else {
    console.log("ninguém marcou ponto");
} */



/* // ninho de if - podemos também usar o "if" dentro de outro "if", chamamos isso de aninhamento de if's ou ninho de if's.
if(jogador1 !=- 1) {
    if (jogador1 > 0) {
        console.log("Jogador1 marcoun ponto");
    }
    else if(jogador2 > 0){
        console.log("Jogador 2 marcou ponto");
    }
    else {
        console.log("ninguém marcou ponto");
    }    
} */




/* // "if" ternário - podemos também fazer uma verificação em uma unica linha usando o "if" ternário ex: condicao1 && condicao2 ? instrucao1 : instrucao2;
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log('jogadores inválidos');
//usa-se a interrogação “?” e dois pontos “:”




if (jogador1 > 0 && jogador2 == 0) {
        console.log("Jogador1 marcoun ponto");
        placar = jogador1 > jogador2;
}
else if(jogador2 > 0 && jogador1 == 0){
        console.log("Jogador 2 marcou ponto");
        placar = jogador2 > jogador1;
}
else {
        console.log("ninguém marcou ponto");
}    

//switch/case - funciona também como uma estrutura condicional
switch(placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou!");
        break;

    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou!");
        break;
    default:
        console.log("Niguém ganhou");
} */




//laços de repetições - são estruturas condicioinais que repetem uma instrução até atingir determinada condição

let array =['valor1','valor2', 'valor', 'valor3', 'valor4', 'valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', } 


/* //"for" - funciona como uma repetição de instrução até que a condição seja falsa
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
} */





/*  //"for/in" - executa repetição a partir de uma propriedade
//com array
for(let i in array) {
    console.log(i);
}

//com object
for(i in object) {
    console.log(i);
} */




/* //"for/of" - executa repetição a partir de valor
//com array
for (i of array) {
    console.log(i);
}

//com object - porém objetos não são iteráveis, suas propriedades variam (tem que passar a propriedade dentro da condição)
for(i of object.propriedade1) {
    console.log(i);
} */





// "while" - executa uma instrução enquanto determinada condição for verdadeira, a verificação é feita antes  da execução;
var a = 0;

/*while (a < 10) {
    a++;
    console.log(a)
} */




 //"do/while" - executa uma instrução até que determinada condição seja falsa, a verifiação é feita depois da execução
 do {
    a++;
    console.log(a);
 }
 while (a < 10);