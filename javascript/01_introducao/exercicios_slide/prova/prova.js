// [JS-A01] Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3).
// Calcule a média ponderada das notas e atribua o resultado à variável "media".
// Após o cálculo, exiba a média ponderada no console.

// OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos,
//e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos e para as notas.

let nota1;
let nota2;
let nota3;

let peso1 = 1;
let peso2 = 2;
let peso3 = 3;

n1 = prompt('Informe a nota 1:');
nota1 = parseFloat(n1);

n2 = prompt('Informe a nota 2:');
nota2 = parseFloat(n2);

n3 = prompt('Informe a nota 3:');
nota3 = parseFloat(n3);

media = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/(peso1+peso2+peso3);

media >= 6 ? mensagem = `Parabéns! A sua média ponderada foi ${media}` : mensagem = `Que pena! A sua média ponderada foi ${media}`;

console.log(mensagem)

alert(mensagem)