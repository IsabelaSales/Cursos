// tipos primitivos
// boolean
var VDuf = false;
console.log(typeof (VDuf));

//number
var numeroQualquer = 1;
console.log(typeof (numeroQualquer));

//string
var nome = 'Isabela';
console.log(typeof (nome));

//function
var funcao = function () { }
console.log(typeof (funcao));

//como declarar

var variavel = 'diana'; //escopo global e local, senão tiver valor declarado será null
variavel = 'martine';
console.log(variavel);

let variavel2 = 'Isabela'; //escopo local de bloco, senão tiver valor declarado será null
variavel2 = 'Sales';
console.log(variavel2);

const variavael3 = 'Isa'; //escopo local de bloco, não pode ser resignificada, obrigatorio declarar valor
// variavael3 ='Bela'
console.log(variavael3);

//escopo

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal ()

//divisão

var divisaoReal = 6/2;
var divisãoInteria = 17 % 5; //Resto da Divisão
var pontenciacao = 2 ** 10
console.log(divisaoReal,divisãoInteria, pontenciacao)

//
var e = true && true;  //todos preciam ser verdadeiros
var ou = false || true; //Ao menos um verdadeiro
var nao = !false //contrario
console.log(e,ou,nao)











