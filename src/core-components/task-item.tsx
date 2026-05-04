import React from "react";
import Card from "../components/card";
import InputCheckBox from "../components/input-checkbox";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";
import TrashIcon from "../assets/icons/Trash.svg?react"
import PencilIcon from "../assets/icons/Pencil.svg?react"
import XIcon from "../assets/icons/X.svg?react"
import CheckIcon from "../assets/icons/Check.svg?react"
import InputText from "../components/input-text";
import { type Task, TaskState } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton";


interface TaskItemProps {
    task: Task
    loading?: boolean;
}

export default function TaskItem({task, loading}:TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

    const [taskTitle, setTaskTitle] = React.useState(task.title || "");
    const { updateTask, updateTaskStatus, deleteTask, isDeletingTask, isUpdatingTask} = useTask()

    function handleEditTask(){
        setIsEditing(true)
    }

    function handleExitEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || '')
    }

    async function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        await updateTask(task.id, {title: taskTitle})
        setIsEditing(false)
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
        const chekced = e.target.checked;
        updateTaskStatus(task.id, chekced)
    }

    async function handleDeleteTask() {
        await deleteTask(task.id);
    }

    return (
        <Card size="md" >
            {!isEditing ?(
            <div className="flex items-center gap-4">
                <InputCheckBox  checked={task?.concluded} onChange={handleChangeTaskStatus} loading={loading}/>
                {!loading ? <Text className={cx("flex-1", {'line-through': task?.concluded})}>{task?.title}</Text> : <Skeleton className=" flex-1 h-6"/>}
                <div className="flex gap-1">
                    <ButtonIcon type="button" icon={TrashIcon} variant="tertiary" onClick={handleDeleteTask} loading={loading} handling={isDeletingTask}/>
                    <ButtonIcon type="button" icon ={PencilIcon} variant="tertiary" onClick={handleEditTask} loading={loading}/>
                </div>
            
            </div>
            ):(
            <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus/>
                <div className="flex gap-1">
                    <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditTask}/>
                    <ButtonIcon type="submit" icon ={CheckIcon} variant="primary" handling={isUpdatingTask}/>
                </div>
            </form>
        )}
        </Card>
        
    )

}