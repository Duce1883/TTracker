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
        <div>
            <input
                type="text"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;