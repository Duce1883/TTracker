import React from 'react';

export interface Task {
    id: number;
    completed: boolean;
    text: string;
}

interface TaskListItemProps {
    task: Task,
    toggleTask: (index: number) => void;
    deleteTask: (index: number) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({task, toggleTask, deleteTask}) => {

    let taskTextClass = "task_list_item__text"
    if (task.completed)
        taskTextClass += " " + taskTextClass + "--complete"

    return (
        <li className="task_list_item">
            <div>
                <input
                    type="checkbox"
                    className="task_list_item__check"
                    data-testid="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span
                    className={taskTextClass}
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                    }}
                >
        {task.text}
      </span>
            </div>
            <button className="task_list_item__btn" onClick={() => deleteTask(task.id)} />
        </li>
    );
};

export default TaskListItem;