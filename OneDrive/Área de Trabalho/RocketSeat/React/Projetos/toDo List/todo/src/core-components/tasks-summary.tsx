import Text from "../components/text"
import Badge from "../components/badge"
import useTasks from "../hooks/use-tasks"

export default function TasksSummary() {
    const { createdTasksCount, concludedTasksCounnt, isLoadingTasks} = useTasks()

    return <>
        <div className="flex items-center gap-2">
            <Text variant= "body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
            <Badge variant="secondary" loading={isLoadingTasks}>{createdTasksCount}</Badge>
        </div>
        <div className="flex items-center gap-2">
            <Text variant= "body-sm-bold" className="!text-gray-300">Concluidas</Text>
            <Badge variant="primary" loading={isLoadingTasks}>{concludedTasksCounnt} de {createdTasksCount}</Badge>
        </div>
    </>
}