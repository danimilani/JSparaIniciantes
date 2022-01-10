// FUNCOES

//definir funcao
function areaQuadrado () {
   console.log('funcao ativa');
}
//ativar funcao
areaQuadrado(); 



function areaQuadrados (lado) {
   return lado * lado;
}

console.log(areaQuadrados(2)); 
 
function imc(peso,altura){
   const imc = peso / (altura ** 2);
   return imc;
}

console.log(imc(55,1.70));


function corFavorita(cor){
   if(cor === 'azul'){
      return 'Eu gosto de azul';
   } else if (cor === 'verde') {
      return 'Eu gosto de verde';
   } else {
      return 'Eu nao gosto de nada.';
   }
}

//funcao trigada com evento de clique na pagina, callback
addEventListener('click', function(){console.log('oi!')});

//variaveis criadas dentro de funcoes nao sao visiveis fora da funcao
function faltaVisitar (paisesVisitados) {
   var totalPaises = 193;
   return `Faltam visitar ${totalPaises - paisesVisitados} países`
}


//EXERCICIO

//Crie uma funcao para verificar se um valor e Truthy

function isTruthy(dado) {
   return !!dado;
}

//Crie uma funcao matematica que retorne o perimetro de um quadrado
//lembrando: perimetro e a soma dos quatro lados do quadrado

function perimetro(lado){
   return lado * 4;
}


//Crie uma funcao que retorne o seu nome completo
//ela deve possuir os parametros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
   return nome + ' ' + sobrenome;
}

//Crie uma funcao que verifica se um numero e par
//usar modulo %

function isEven(number){
   var modulo = number % 2;
   if(modulo === 0){
      return true;
   }else{
      return false;
   }
   
}

//Crie uma funcao que retorne o tipo de dado do argumento
//passado nela (typeof)

function tipoDado (dado){
   return typeof dado;
}

//addEvent Listener e uma funcao nativa do JavaScript
//o primeiro parmetro e o evento que ocorre e o segundo o Callback
//utilize essa funcao para mostrar no console o seu nome completo
//quando o evento 'scroll' acontecer.

addEventListener('scroll', function(){console.log('Dani Milani')});