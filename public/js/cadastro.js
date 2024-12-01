
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Pegar os valores do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const categoria = document.getElementById("categoria").value;
    const descricao = document.getElementById("descricao").value;
    const valorOpcao = document.querySelector('input[name="valorOpcao"]:checked').value;
    const valorFixo = document.getElementById("valorFixo").value;

    // Verificar se os campos não estão vazios
    if (nome && email && senha && categoria && descricao) {
        if (valorOpcao === "fixo" && !valorFixo) {
            alert("Por favor, insira o valor fixo.");
            return;
        }

        // Exibe uma mensagem de sucesso
        document.getElementById("mensagem").style.display = "block";
    }
});

// Contar caracteres na descrição
document.getElementById("descricao").addEventListener("input", function() {
    const maxChars = 200;
    const currentLength = this.value.length;
    const charCount = document.getElementById("charCount");
    charCount.textContent = `${maxChars - currentLength} caracteres restantes`;
});

// Ativar/desativar campo de valor fixo
document.getElementById("aCombinar").addEventListener("change", function() {
    document.getElementById("valorFixo").disabled = true;
    document.getElementById("valorFixo").value = ""; // Limpar valor
});

document.getElementById("fixo").addEventListener("change", function() {
    document.getElementById("valorFixo").disabled = false;
});
