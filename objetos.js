//OBJETOS
//Conjunto de variaveis e funcoes

var pessoa = {
    nome: 'Dani',
    idade: 30,
}


var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return lado *4;
    },
}

//Acesse propriedades de um objeto usando o ponto.

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

//adicionar novas propriedades
menu.backgroundColor = '#000'
menu.color = 'blue';

menu.esconder = function(){
    console.log('escondi')
}
var bg = menu.backgroundColor;


//Palavra chave this
//faz referencia ao proprio objeto, variaveis dentro do objeto

var menu2 = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2;
    }
}

//EXERCICIO

//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Daniella',
    sobrenome: 'Milani',
    idade: 30,
    altura: 1.70,
    peso: 56,
}

//Crie um método no objeto anterior que mostr o seu nome completo

eu.nomeCompleto = function(){
    return `${this.nome}  ${this.sobrenome}`;
}

//Modifque  valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//Crie um bjeto de um cachorro que represente um labrador
//preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem'){
            return 'late';
        } else{
            return 'nada';
        }
    }
}