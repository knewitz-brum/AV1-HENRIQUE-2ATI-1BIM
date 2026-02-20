// 1. Seleção de Elementos do DOM
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const message = document.querySelector('#message');

// 2. Estado da Aplicação (Array de Tarefas)
const tarefas = [];

// 3. Função de Validação
function validarTarefa(texto) {
    if (texto.trim() === "") {
        message.textContent = "Por favor, digite uma tarefa válida!";
        message.classList.add('active'); // Para estilização opcional
        return false;
    }
    // Se estiver correto, limpa a mensagem de erro
    message.textContent = "";
    return true;
}

// 4. Função de Renderização (Read)
function render() {
    // Limpa a lista atual para não duplicar na tela
    list.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        list.appendChild(li);
    });
}

// 5. Evento de Submit (Create)
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const textoTarefa = input.value;

    if (validarTarefa(textoTarefa)) {
        // Adiciona ao array (limpando espaços extras com trim)
        tarefas.push(textoTarefa.trim());
        
        // Limpa o input
        input.value = "";
        
        // Atualiza a interface
        render();
    }
});