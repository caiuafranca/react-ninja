var x = 50;
console.log(x);

// criar uma variavel array com 5 tipos diferentes
var arr = [10, true, function(){}, {curso: 'JS Ninja'}, 'JS Ninja']
console.log(arr);

// mostrar o 4 elemento do array
console.log(arr[3].curso);

//add elemento do arr
arr.push(['Ola Mundo', 35, {nome : 'Caiua'}])
console.log(arr)

//mostra apenas o ultimo elemento do array inserido.
console.log('O nome do usuario é: '+arr[5][2].nome)

//Mostra a Quantidade de Elementos do Arr
console.log('O arr tem '+ arr.length+ ' elementos!.');

//Mostra a Quantidade de Elementos do Arr dentro do arr
console.log('O arr dentro do arr tem '+ arr[5].length+ ' elementos!.');

//Mostrar numeros pares entre 10 - 20 usando while
var valControle = 10, valFinal = 20;
console.log('Números pares entre: '+ valControle
                + ' e '+ valFinal);
while(valControle <= valFinal){
    if(valControle % 2 == 0){
        console.log(valControle);
    }
    valControle++;
}

//Mostrar numeros impares entre 10 - 20 usando while
var valControle = 10, valFinal = 20;
console.log('Números impares entre: '+ valControle 
                + ' e '+ valFinal);
while(valControle <= valFinal){
    if(valControle % 2 == 1){
        console.log(valControle);
    }
    valControle++;
}

// Usando for faça o mesmo ex para numeros pares
var valControle = 10, valFinal = 20;
console.log('Números pares entre usando for: '+ valControle 
                + ' e '+ valFinal);
for (valControle; valControle <= valFinal; valControle++){
    if(valControle % 2 == 0){
        console.log(valControle);
    }
}





