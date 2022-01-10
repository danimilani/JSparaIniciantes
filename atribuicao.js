//Atribuicao e Ternario

var x = 5;
var y = 10;

x += y; // x = x+y (15)
x -= y; // x = x-y (-5)
x *= y; // x = x*y (50)
x /= y; // x = x/y
x %= y; // x = x%y (0)
x **= y; // x = x ** y (9765625)

var numero = 20;

numero +=40;
console.log(numero);

//Operador Ternario - abreviacao de condicional if/else
//condicao ? true : false

var idade = 19;
var podeBeber = (idade >=18) ? 'Pode beber' : 'Nao pode beber';
console.log(podeBeber) //Pode Beber


//Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll

var scroll = 1000;

scroll += 500;
console.log(scroll);

//Atribua true para a variavel darCredito, caso o cliente possua carro e casa. 
//False caso contrario

var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa);
console.log(darCredito)