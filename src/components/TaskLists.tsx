import React from "react";
import TaskListItem from "@/src/components/TaskListItem";
import {Task} from "@/src/components/TaskListItem";
interface TaskListProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    listType: "all" | "current" | "completed";
}

const TaskList: React.FC<TaskListProps> = ({tasks, toggleTask, deleteTask, listType}) => {

    const filteredTasks = listType === "all" ? tasks : tasks.filter(task => {
        return listType === "current" ? !task.completed : task.completed;
    });

    return (
        <div className="task_list">
            <h2>{listType === "all" ? "Все" : listType === "current" ? "Текущие задачи" : "Уже сделано"}</h2>
            <ul>
                {filteredTasks.length ?
                    <>{filteredTasks.map((task, index) => (
                    <TaskListItem
                        key={index}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                ))}</>
                    :
                    <div className="task_list__empty">Сейчас здесь нет задач</div>
                }
            </ul>
        </div>
    );
};

export default TaskList;