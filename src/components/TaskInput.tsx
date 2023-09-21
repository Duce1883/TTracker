import React from 'react';

interface TaskInputProps {
    currentTask: string;
    setCurrentTask: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({
                                                 currentTask,
                                                 setCurrentTask,
                                                 addTask,
                                             }) => {
    return (
        <div className="task_input">
            <input
                type="text"
                placeholder="Введите текст задачи"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button
                className="ttracker__button task_input__button"
                onClick={addTask}
                disabled={!currentTask}
            >
                Добавить
            </button>
        </div>
    );
};

export default TaskInput;