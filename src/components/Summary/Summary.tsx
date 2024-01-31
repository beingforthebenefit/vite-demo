import {Task} from "../../App"
import SummaryItem from "./SummaryItem"

const Summary = ({tasks}: {tasks: Task[]}) => {
    const total = tasks.length
    const done = tasks.filter(task => task.done).length
    const todo = total - done

    return (
        <>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <SummaryItem itemName={"Total"} itemValue={total} />
                <SummaryItem itemName={"To do"} itemValue={todo} />
                <SummaryItem itemName={"Done"} itemValue={done} />
            </div>
        </>
    )
}

export default Summary