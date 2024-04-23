import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { destroyTask } from "../api/fetch";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function handleDelete() {
        destroyTask(id)
            .then(() => navigate("/tasks"))
            .catch((error) => {
                console.error(error);
                setLoadingError(true);
            });
    }

    return (
        <div>
            <h1>Task List</h1>
            {tasks.map(task => <li key={task.id}>
                <h2>{task.title}</h2>
                <Link to={`/tasks/${task.id}`}>Task Details</Link>
                <br/>
                <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
                <br/>
                <button className='delete' onClick={() => handleDelete()}>Delete Task</button>
            </li>)}
        </div>
    )
}

export default TaskList;