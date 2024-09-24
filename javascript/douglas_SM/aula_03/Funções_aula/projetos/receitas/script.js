// 1. Função Declaração: Adiciona receitas
function adicionarReceita(nome, ingredientes) {
  const listaReceitas = document.getElementById('listaReceitas');
  const novaReceita = document.createElement('li');
  novaReceita.textContent = `${nome} - Ingredientes: ${ingredientes.join(", ")}`;

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';

  novaReceita.appendChild(botaoRemover);
  listaReceitas.appendChild(novaReceita);

  // Callback com função anônima para remover receita
  botaoRemover.addEventListener('click', () => removerReceita(novaReceita));
}

// 2. Função Expressão: Remover receita
const removerReceita = function(receita) {
  receita.remove();
};

// 3. Função Anônima e Arrow Function: Captura os dados do formulário e adiciona receita
  document.getElementById('adicionarReceita').addEventListener('click', function() {
    const nomeReceita = document.getElementById('nomeReceita').value.trim();
    const ingredientesInput = document.getElementById('ingredientes');
    const ingredientes = ingredientesInput.value.split(',').map(ingrediente => ingrediente.trim());

    if (nomeReceita && ingredientes.length > 0) {
        adicionarReceita(nomeReceita, ingredientes);
        ingredientesInput.value = ''; // Limpa o campo de ingredientes
    } else {
        alert('Por favor, preencha o nome da receita e ao menos um ingrediente.');
    }
});
