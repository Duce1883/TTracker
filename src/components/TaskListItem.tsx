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

const TaskListItem: React.FC<TaskListItemProps> = ({task, toggleTask, deleteTask }) => {
    return (
        <li>
            <input
                type="checkbox"
                data-testid="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    marginLeft: '8px',
                }}
            >
        {task.text}
      </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskListItem;