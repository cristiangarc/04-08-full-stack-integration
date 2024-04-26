const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [{ id: 1, title: 'Laundry', description: 'wash, dry and fold clothes', status: "not yet completed" }];

const getNewId = () => {
    const ids = tasks.map(task => task.id);
    let newId = tasks.length + 1;
    while(true) {
        if (!ids.includes(newId)) return newId;
        newId++;
    }
}

app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});
app.post('/tasks', (req, res) => {
    // expect title, description, status in the request body
    const newTask = req.body;
    if (newTask.title && newTask.description && newTask.status) {
        newTask.id = getNewId();
        tasks.push(newTask);
        res.status(201).json(newTask)
    } else {
        res.status(400).send('Unable to create task. Invalid or incorrect data');
    }
});
app.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const index = tasks.findIndex(task => task.id === numId);
    if (index !== -1) {
        res.status(200).json(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
})
app.put('/tasks/:id', (req, res) => {
    // can update title, description or status
    const { id } = req.params;
    const numId = Number(id);
    const index = tasks.findIndex(task => task.id === numId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        res.status(200).json(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
})
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const index = tasks.findIndex(task => task.id === numId);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("task deleted");
        res.status(200).json('Task successfully deleted');
    } else {
        res.status(404).send('Task not found');
    }
})

module.exports = {
    app: app
};