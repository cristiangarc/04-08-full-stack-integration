// Tasks
const URL = import.meta.env.VITE_BASE_URL;

// Create
export function createTask(task) {
  const options = {
    method: "POST",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/tasks/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyTask(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/tasks/${id}`, options);
}

// Index/Get all
export function getAllTasks() {
  return fetch(`${URL}/tasks`).then(response => response.json()); 
}

// Task/Get one
export function getOneTask(id) {
  return fetch(`${URL}/tasks/${id}`).then((response) => response.json());
}

// Update
export function updateTask(id, task) {
  const options = {
    method: "PUT",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/tasks/${id}`, options).then((response) => {
    return response.json();
  });
}