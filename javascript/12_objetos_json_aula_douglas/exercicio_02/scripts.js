const alunos = [
    {"nome": "João Silva",
    "idade": 36,
    "curso": "Engenharia",
    "disciplinas": ["Matemática", "Economia", "Lógica"]
},
    {"nome": "Brunelle Freitas",
    "idade": 34,
    "curso" : "Direito",
    "disciplinas": ["História", "Filosofia", "Sociologia"] 
},

    {"nome": "Maria da Conceição",
    "idade": 65,
    "curso" : "Biologia",
    "disciplinas": ["Genética", "Ecologia", "Botânica"] 
},

    {"nome": "Maria da Conceição",
    "idade": 65,
    "curso" : "Biologia",
    "disciplinas": ["Genética", "Ecologia", "Botânica"] 
},

    {"nome": "Pedro Hilário",
    "idade": 35,
    "curso" : "Comunicação Social",
    "disciplinas": ["Fotojornalismo", "Narrativa jornalística", "Teorias da Comunicação"] 
}

]

let botao = document.getElementById('botao')
let containerAluno = document.getElementById('alunos')


function exibirAlunos (){
    alunos.forEach(aluno=>{

        const alunoHTML = `
        <article class="aluno">
        <h2>${aluno.nome}<h2>
        <p><strong>Idade:</strong>${aluno.idade}</p>
        <p><strong>Curso:</strong>${aluno.curso}</p>
        <p>Disciplinas:${aluno.disciplinas}</p>

        </article>

        `;
        containerAluno.innerHTML += alunoHTML

    })
}
botao.addEventListener('click',exibirAlunos)