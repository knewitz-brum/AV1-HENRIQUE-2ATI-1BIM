const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const message = document.querySelector('#message');

const tarefas = [];

function validarTarefa(texto) {
    if (texto.trim() === "") {
        message.textContent = "Por favor, digite uma tarefa válida";
        message.classList.add('active');
        return false;
    }
    message.textContent = "";
    return true;
}

function render() {
    list.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        list.appendChild(li);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const textoTarefa = input.value;

    if (validarTarefa(textoTarefa)) {
        tarefas.push(textoTarefa.trim());
        
        input.value = "";
        
        render();
    }
});