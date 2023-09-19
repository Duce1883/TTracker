import React, {useState, useEffect} from 'react';
import TaskInput from '@/components/TaskInput'
import TaskList from '@/components/TaskLists'
import {Task} from '@/components/TaskListItem'
import RadioButtonSet from '@/components/RadioButtonSet'

type listType = 'all' | 'current' | 'completed'
interface listTypesOptionsType {
    value: listType,
    label: string,
}
const TaskTracker = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentTask, setCurrentTask] = useState<string>('');
    const [listType, setListType] = useState<listType>('current');
    const [taskIdCounter, setTaskIdCounter] = useState<number>(1);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const savedTaskIdCounter = parseInt(localStorage.getItem('taskIdCounter') || '1', 10);
        setTaskIdCounter(savedTaskIdCounter);
    }, []);

    const addTask = () => {
        if (currentTask.trim() === '') return;

        const newTask: Task = {
            id: taskIdCounter,
            completed: false,
            text: currentTask,
        };

        setTasks([...tasks, newTask]);
        setCurrentTask('');
        setTaskIdCounter(taskIdCounter + 1);
        localStorage.setItem('taskIdCounter', (taskIdCounter + 1).toString());
    };

    const toggleTask = (id: number) => {
        const updatedTasks = [...tasks];

        const toggledTask = tasks.find(task => task.id === id)
        if (!toggledTask) return;
        toggledTask.completed = !toggledTask.completed;

        setTasks(updatedTasks);
    };

    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const clearAll = () => {
        setTasks([]);
    };


    const changeListType = (newListType: listType) => {
        if (newListType == listType) return;
        setListType(newListType);
    }

    const listTypesOptions: listTypesOptionsType[] = [
        {
            value: 'current',
            label: 'Текущие'
        },
        {
            value: 'completed',
            label: 'Завершённые'
        },
        {
            value: 'all',
            label: 'Все'
        },
    ]

    return (
        <div>
            <h1>todos</h1>
            <RadioButtonSet
                options={listTypesOptions}
                onChange={changeListType}
                selectedOption={listType}
            />
            <TaskInput
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                addTask={addTask}
            />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                listType={listType}
                deleteTask={deleteTask}
            />
            <button onClick={clearAll}>Очистить всё</button>
        </div>
    );
};

export default TaskTracker;