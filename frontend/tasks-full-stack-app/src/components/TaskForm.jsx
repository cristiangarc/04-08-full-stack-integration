import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getOneTask, updateTask, createTask, getAllTasks } from "../api/fetch";

const TaskForm = () => {
    const [task, setTask] = useState({
        id: "",
        title: "",
        description: "",
        status: ""
    });
    const [editMode, setEditMode] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getOneTask(id)
                .then(data => setTask(data))
            setEditMode(true);
        } else {
            setTask({
                title: "",
                description: "",
                status: ""
            })
            setEditMode(false);
        }
    }, [id]);

    const handleTextChange = (event) => {
        setTask({
            ...task,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editMode) {
            updateTask(id, task)
                .then(() => navigate('/'))
                .catch((error) => console.error(error));
        } else {
            createTask(task)
                .then(() => navigate('/'))
                .catch((error) => console.error(error));
        }
    }

    console.log(id);

    return (
        <div>
            <h2>{editMode ? 'Edit Form' : 'New Form'}</h2>
            <form onSubmit={handleSubmit}>
                
                {id ? <label htmlFor="id">
                    ID:
                    <input
                    type="number"
                    id="id"
                    value={task.id}
                    onChange={handleTextChange}
                />
                </label> : ""}
                <br />
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