//ARRAY
//Grupo de valores relacionados para guardar diferentes valores em uma variavel

//var videoGames = ['Switch', 'PS4', 'XboX', '3DS'];
//var ultimoItem = videoGames.pop();
//videoGames.push('3DS');


//for LOOP
// inicial + condicao + incremento

for (var numero = 0; numero<4; numero++) {
    console.log(numero);
}

// while LOOP
// enquanto uma variavel eh verdadeira, faz loop
// i eh variavel neste caso

var i = 0;
while (i <10){
    console.log(i);
    i = i + 5;
}

//Loop sobre Array
//Break - para o loop com alguma condicao (ou sem condicao antes do loop)

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var item = 0; item < videoGames.length; item ++) {
    console.log(videoGames[item]);
    if(videoGames[item]==='PS4'){
        break;
    }
}

//forEach

var frutas = ['banana', 'pera', 'maca', 'abacaxi', 'uva'];
frutas.forEach(function(item, index, array) {
    console.log(item, index, array)
});

//EXERCICIO

//Crie uma array com os anos que o Brasil ganhou a Copa
//1959, 1962,1970,1994,2002
var brasil = ['1959','1962','1970','1994','2002'];

// Interaja com a array utilizando um loop, para mostrar no console
//a seguinte mensagem 'o Brasil ganhou a copa de ${ano}''
for (var i=0; i<brasil.length; i++){
    console.log(`o Brasil ganhou a copa de ${brasil[i]}`);
}


brasil.forEach(function(item){
    console.log(`O Brasil ganhou a Copa de ${item}`)
});

//Interaja om um loop nas frutas abaixo e pare ao chegar em Pera
var frutas2 = ['banana', 'maca', 'pera', 'uva', 'melancia']
for (var item = 0; item < frutas2.length;item++){
    console.log(frutas2[item]);
    if(frutas2[item]==='pera'){
        break;
    }
}

//coloque a ultima fruta da array acima em uma variavel, sem remover ela da array
var ultimaFruta = frutas2[frutas2.length-1];