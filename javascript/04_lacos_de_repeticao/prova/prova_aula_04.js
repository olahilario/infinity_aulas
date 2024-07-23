// [JS-A04] Você é um desenvolvedor de software que trabalha em uma equipe especializada em criar ferramentas matemáticas
// para uma empresa do mercado financeiro. A empresa precisa de uma nova funcionalidade para sua plataforma online,
// permitindo que os usuários obtenham informações sobre cálculos matemáticos importantes relacionados aos investimentos.

// Sua tarefa é criar um módulo JavaScript que ofereça aos usuários a possibilidade de inserir um número inteiro positivo e,
// em resposta, calcular o fatorial desse número e também a sequência de Fibonacci até aquele número.
// Isso ajudará os investidores a realizar análises mais detalhadas sobre suas decisões financeiras.

function Magica(){
  let numero_usuario = document.getElementById("number_user").value
  let numero = parseInt(numero_usuario)
  let resultado = 1
  if (numero <= 0){
    console.log("Só exitem fatoriais de números inteiros positivos e diferentes de zero.")
  } else{
    for(numero; numero >=1;  numero -=1){
      resultado *= numero
    }
  }
  let msg1 = `O fatorial do número ${numero_usuario} é ${resultado}`
  console.log(msg1)

  let fibonacci = []
  let ultimo = 0
  let penultimo = 1
  fibonacci.push(ultimo)
  fibonacci.push(penultimo)

  let atual = ultimo + penultimo

  while (atual < resultado){
    fibonacci.push(atual)
    ultimo = penultimo;
    penultimo = atual;
    atual = ultimo + penultimo
  }

  msg2 = `A sequência de Fibonacci até o número ${resultado} é ${fibonacci}`

  console.log(msg2)

  resultado1 = document.getElementById("resultado1")
  resultado2 = document.getElementById("resultado2")


  resultado1.innerHTML = msg1
  resultado2.innerHTML = msg2
}




