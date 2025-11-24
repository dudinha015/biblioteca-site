const livros = [
    "Dom Casmurro",
    "O Senhor dos Anéis",
    "1984",
    "O Pequeno Príncipe",
    "Orgulho e Preconceito",
    "Sherlock Holmes"
];

function pesquisarLivro() {
    const campo = document.getElementById("campoPesquisa").value.toLowerCase();
    const resultado = document.getElementById("resultadoPesquisa");

    if (campo === "") {
        resultado.textContent = "Digite o nome de um livro!";
        resultado.style.color = "red";
        return;
    }

    const encontrado = livros.some(livro => livro.toLowerCase() === campo);

    if (encontrado) {
        resultado.textContent = " Livro encontrado!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = " Livro não encontrado!";
        resultado.style.color = "red";
    }
}
