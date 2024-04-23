import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getOneTask } from "../api/fetch";

const TaskDetails = () => {
    const [task, setTask] = useState({});
    const [loadingError, setLoadingError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
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
        <h2>Task: {loadingError ? "" : task.title}</h2>
            <p>Description: {loadingError ? "" : task.description}</p>
            <p>Completed: {loadingError ? "" : (task.completed ? "Yes" : "No")}</p>
    </div>
    )
}

export default TaskDetails;
