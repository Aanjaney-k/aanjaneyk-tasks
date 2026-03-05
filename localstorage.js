let todos = [];

function saveTodo() {
    const input = document.getElementById('todoInput');
    const value = input.value.trim();
    if (!value) 
        return;

    todos.push(value);
    document.getElementById('lastSaved').textContent = value;
    input.value = '';
    renderList();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderList();
}

function renderList() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach((todo, i) => {
        const li = document.createElement('li');
        li.innerHTML = `${todo} <button class="delete" onclick="deleteTodo(${i})">✕</button>`;
        list.appendChild(li);
    });
}

// Allow Enter key to save
document.getElementById('todoInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveTodo();
});