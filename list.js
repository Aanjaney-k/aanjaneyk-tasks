const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const container = document.getElementById("list");

for (let i = 0; i < items.length; i++) {
    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = items[i];
    container.appendChild(div);
}