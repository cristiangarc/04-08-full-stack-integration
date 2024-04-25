import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAllTasks, destroyTask } from "../api/fetch";

const TaskList = () => {
    const [loadingError, setLoadingError] = useState(false);
    const [tasks, setTasks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllTasks()
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function handleDelete(id) {
        destroyTask(id)
            .then(() => navigate("/"))
            .catch((error) => {
                console.error(error);
                setLoadingError(true);
            });
    }

    const handleNewTask = () => {
        navigate('/tasks/new')
    }

    return (
        <div>
            <h1>{tasks ? "All Tasks" : "No Tasks"}</h1>
            <button onClick={handleNewTask}>New Task</button>
            {tasks.map(task => <li key={task.id}>
                <h2>{task.title}</h2>
                <p>ID: {task.id}</p>
                <Link to={`/tasks/${task.id}`}>Details</Link>
                <br/>
                <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
                <br/>
                <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
            </li>)}
        </div>
    )
}

export default TaskList;