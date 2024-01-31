import {Task} from "../../App"
import TaskItem from "./TaskItem"

const Tasks = ({
    tasks,
    toggleDone,
    handleDelete,
}: {
    tasks: Task[],
    toggleDone: (id: string, done: boolean) => void,
    handleDelete: (id: string) => void,
}) => {
    return (
        <div className="flex flex-col gap-2">
            {tasks.length !== 0 ? (
                tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        name={task.name}
                        done={task.done}
                        id={task.id}
                        toggleDone={toggleDone}
                        handleDelete={handleDelete}
                    />
                ))
            ) : (
                <span className="text-green-100">No tasks yet!</span>
            )}
        </div>
    )
}

export default Tasks