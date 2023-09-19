import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskListItem from '../../components/TaskListItem';

const toggleTask = jest.fn();
const deleteTask = jest.fn();

describe('<TaskListItem />', () => {
    test('renders the task text', () => {
        const task = {
            id: 1,
            completed: false,
            text: 'Test Task',
        };

        const { getByText } = render(<TaskListItem task={task} toggleTask={toggleTask} deleteTask={deleteTask} />);
        const taskTextElement = getByText('Test Task');

        expect(taskTextElement).toBeInTheDocument();
    });

    test('toggles the task when clicked', () => {
        const task = {
            id: 1,
            completed: false,
            text: 'Test Task',
        };

        const { getByTestId } = render(
            <TaskListItem task={task} toggleTask={toggleTask} deleteTask={deleteTask}  />
        );

        const checkboxElement = getByTestId('checkbox');
        fireEvent.click(checkboxElement);

        expect(toggleTask).toHaveBeenCalledTimes(1);
    });

    test('deletes the task when delete button is clicked', () => {
        const task = {
            id: 1,
            completed: false,
            text: 'Test Task',
        };
        
        const { getByText } = render(
            <TaskListItem task={task} toggleTask={toggleTask} deleteTask={deleteTask}  />
        );

        const deleteButtonElement = getByText('Delete');
        fireEvent.click(deleteButtonElement);

        expect(deleteTask).toHaveBeenCalledTimes(1);
    });
});
