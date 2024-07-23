// [JS-A03] Você foi contratado(a) para desenvolver um programa que irá auxiliar um professor a calcular algumas estatísticas
// das notas de seus alunos. O programa deve solicitar ao professor o número total de estudantes na turma e, em seguida,
// pedir que ele insira as notas de cada aluno individualmente.
// Após receber todas as notas, o programa deverá calcular a média da turma e identificar a maior e a menor nota obtida.

// Instruções:

// Solicite ao professor que digite o número total de estudantes na turma.
// Em seguida, peça que o professor insira a nota de cada aluno individualmente, uma por vez.
// Calcule a média da turma somando todas as notas e dividindo pelo número total de estudantes.
// Identifique e registre a maior nota obtida na turma.
// Ao final, exiba a média da turma e a maior e a menor nota encontrada.

// Dicas:

// Utilize um loop while para coletar as notas de todos os alunos.
// Armazene as notas em uma variável e vá atualizando o valor da soma a cada nova nota inserida.
// Compare cada nota com a maior nota atualmente registrada para encontrar a maior nota.
// Para calcular a média, divida a soma das notas pelo número total de estudantes.
// Exiba os resultados de forma clara e organizada.


// Lembre-se de testar o programa com diferentes valores de notas e número de estudantes
// para garantir que ele funcione corretamente em diversas situações. Boa programação!

alert('Olá, professor(a)! Seja bem vindo(a) ao sistema.')
let totalAlunos_user = prompt("Informe o número de alunos da turma.")
let totalAlunos = parseInt(totalAlunos_user)
let contador = 1
let notas = []
let somaNotas = 0
let maiorNota = 0
let menorNota = 10
while (contador < totalAlunos+1){
  let nota_user = prompt(`Informe a nota do aluno ${contador}.`);
  let nota = parseFloat(nota_user);
  notas.push(nota);
  somaNotas += nota;
  if (nota > maiorNota){
    maiorNota = nota;
  }
  if (nota < menorNota){
    menorNota = nota;
  }
  contador += 1;
}

let mediaTurma = somaNotas / totalAlunos

mensagem = `A média da turma foi ${mediaTurma}. A maior nota foi ${maiorNota}. E a menor nota foi ${menorNota}`

resultado = document.getElementById('resultado')
resultado.innerHTML = mensagem