// Programação Funcional

//Criar variavel que receba função de soma.
var soma = function calculeSum ( a, b ){
    return a + b;
}
console.log('A Soma entre 5 e 3 é: '+ soma(5,3));

console.log(soma.name);

//função literal que retorna o nome
function retornNome(){
    return 'Caiua Gomes de França';
}

var showName = retornNome;

console.log(showName());

// Criar uma calculadora
function calculadora(op){
    return function calcular(val01,val02){
        switch (op) {
            case '+':
                return console.log(val01 + val02);
                break;
        }
    }    
}

var soma = calculadora('+');

console.log(soma(3,5));
