import { Form } from "react-router-dom"
import { useParams } from "react-router-dom"

const TaskForm = () => {
    const { id } = useParams();

    return (
    <div>
            <Form>
                <p>{!!id ? 'Edit Form' : 'New Form'}</p>
        </Form>
    </div>
    )
}

export default TaskForm
