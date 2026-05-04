import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus.svg?react"
import TasksItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";


export default function TasksList() {
    const {tasks, isLoadingTasks} = useTasks();
    const {prepareTask} = useTask();

    function handleNewTask() {
        prepareTask()
    }

    return (
    <>
    <section >
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask} disabled={tasks.some((task) => task.state === TaskState.Creating) || isLoadingTasks}>Nova Tarega</Button>
    </section>
    <section className="space-y-2">
        {!isLoadingTasks && tasks.map((task) => (<TasksItem key={task.id} task={task} />))}
        {isLoadingTasks && <>
            <TasksItem  task={{} as Task} loading />
            <TasksItem  task={{} as Task} loading />
            <TasksItem  task={{} as Task} loading />
        </>}
    </section>
    </>
    );
}