const API = "http://localhost:8000/api/tasks";

async function loadTasks() {
    const res = await fetch(API);
    const tasks = await res.json();

    const list = document.getElementById("tasks");
    list.innerHTML = "";

    tasks.forEach(t => {
        list.innerHTML += `<li>
            ${t.title} - ${t.description}
            <button onclick="deleteTask(${t.id})">X</button>
        </li>`;
    });
}

async function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;

    await fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, description})
    });

    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadTasks();
}

loadTasks();
