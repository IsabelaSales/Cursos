var jogador1= 8;
var jogador2= 8;
var placar;

// if ternário
// jogador1 >=0 && jogador2 >=0 ? console.log('Placar válido'):
// console.log('Placar Inválido'); // não deu certo
//usando o if
// if (jogador1 > jogador2){
//     console.log('Jogador1 Ganhou!!!');
//     placar = jogador1 > jogador2;
// }
//usando else if
//  else if(jogador2 > jogador1){
//     console.log('Jogador2 Ganhou!!!');
//     placar= jogador2 > jogador1;
//  }
// else if (jogador1===jogador2){
//     console.log('Empate')
// }
// else{
//     console.log('Ninguém Marcou');
// }

// switch(placar){
//     case placar = jogador1 > jogador2:
//         console.log('Jogador 1 GANHOU!!');
//     break;
//     case placar = jogador1 < jogador2:
//         console.log('Jogador 2 GANHOU!!');
//     break;
//     case placar = jogador1 === jogador2: // não pegou
//         console.log('Empate!!!');
//     break;
//     default:
//         console.log('Ninguém Ganhou!!')
// }

let array =['valor1','valor2','valor3','valor4','valor5'];
let object = {propriedade1:'valor1', propriedade2:'valor2',propriedade3:'valor3'};

 //for executa uma função até ela ser falsa
//   for(let indice =0;indice < array.length;indice++)
//   console.log(indice);

//for /in executa repetição a partir de uma propriedade

    // com array
// for (const i in array) {
//     console.log(i) 
// }
    // com obejto
//  for(i in object){
//      console.log(i)
//}

// for/of repetição a partir de um valor, ñ funciona com obj,
//em array's os indices sempree serão nº inteiros

// for (i of array){ 
// console.log(i)
// }

// Mas se quiser pegar o vlr msm assim,
//porém cd caractere dentro do vlr será impresso em linhas separadas

// for (i of object.propriedade1){
//     console.log(i);
// }
//**não entendi muito
 // Enquanto a variável a for menor que 10 ela vai receber mais um e imprimir no console
// var a = 0;
// while(a < 10){
//     a++;
//     console.log(a);
// }

// Executar até que condição seja falsa
//  var a = 0;
//     do{
//         a++;
//         console.log(a);
// } while(a<10)