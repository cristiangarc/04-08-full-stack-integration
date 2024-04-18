const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const tasks = [];

app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});
app.post('/tasks', (res, req) => {
    // expect title, description, status in the request body

});
app.get('/tasks/:id', (req, res) => {

})
app.put('/tasks/:id', (req, res) => {
    // can update title, description or status
    
})
app.delete('/tasks/:id', (req, res) => {
    
})

module.exports = {
    app: app
};