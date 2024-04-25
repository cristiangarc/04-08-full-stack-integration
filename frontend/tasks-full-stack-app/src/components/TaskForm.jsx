import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getOneTask, updateTask, createTask, getAllTasks } from "../api/fetch";

const TaskForm = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({});
    const [editMode, setEditMode] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    // useEffect(() => {
    //     getAllTasks()
    //         .then(data => setTasks(data));
    // }, []);

    // console.log(tasks);

    useEffect(() => {
        if (Number(id) >= 0) {
            getOneTask(id)
                .then(data => setTask(data))
            console.log(task);
            setEditMode(true);
        } else {
            setEditMode(false);
        }
    }, [id]);

    const handleTextChange = (event) => {
        setTask({
            ...task,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = () => {
        if (editMode) {
            updateTask(id, task);
        } else {
            createTask(task)
        }
        navigate('/')
    }

    // const getAllTaskIds = (tasks) => {
    //     return tasks.map(task => task.id);
    // }

    // const checkIfIdExists = (id) => {
    //     const allIds = getAllTaskIds(tasks);
    //     return allIds.includes(id);
    // }

    // console.log(tasks);
    console.log(id);

    return (
        <div>
            <h2>{editMode ? 'Edit Form' : 'New Form'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={task.title}
                    onChange={handleTextChange}
                />
                <br />
                <label htmlFor="description">Description:</label>
                <input type="text"
                    id="description"
                    value={task.description}
                    onChange={handleTextChange}
                />
                <br />
                <label htmlFor="status">Status:</label>
                <input
                    type="text"
                    id="status"
                    value={task.status}
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default TaskForm;