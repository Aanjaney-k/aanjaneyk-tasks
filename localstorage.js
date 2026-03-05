// Load todos from localStorage when page opens
for (let i = 0; i < localStorage.length; i++) {
    let value = localStorage.getItem(localStorage.key(i));
    let li = document.createElement('li');
    li.textContent = value;
    document.getElementById('todoList').appendChild(li);
}

function saveTodo() {
    let value = document.getElementById('todoInput').value;
    if (!value) return;

    localStorage.setItem('todo_' + Date.now(), value);  // save
    document.getElementById('lastSaved').textContent = value;
    document.getElementById('todoInput').value = '';

    let li = document.createElement('li');
    li.textContent = value;
    document.getElementById('todoList').appendChild(li);
}