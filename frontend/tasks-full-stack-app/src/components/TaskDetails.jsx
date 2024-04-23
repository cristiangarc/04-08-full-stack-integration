import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getOneTask, destroyTask, getAllTasks } from "../api/fetch";

const TaskDetails = () => {
    const [task, setTask] = useState({});
    const [loadingError, setLoadingError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        // getAllTasks();
        getOneTask(id)
            .then(data => setTask(data));
        if (!task) {
            setLoadingError(true);
        } else {
            setLoadingError(false);
        }
    }, [id]);

    return (
    <div>
        <h2>Task: {task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Completed: {String(task.completed)}</p>
    </div>
    )
}

export default TaskDetails;
