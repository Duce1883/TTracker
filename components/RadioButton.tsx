import React from 'react';

type listType = 'all' | 'current' | 'completed'

interface RadioButtonProps {
    option: { value: listType; label: string };
    selected: boolean;
    onChange: (newListType: listType) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ option, selected, onChange }) => {
    return (
        <div>
            <input
                type="radio"
                id={option.value}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
        </div>
    );
};

export default RadioButton;