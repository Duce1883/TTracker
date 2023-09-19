import React from 'react';
import RadioButton from './RadioButton'

type listType = 'all' | 'current' | 'completed'

interface RadioButtonSetProps {
    options: { value: listType; label: string }[];
    selectedOption: string;
    onChange: (value: listType) => void;
}

const RadioButtonSet: React.FC<RadioButtonSetProps> = ({ options, selectedOption, onChange }) => {
    return (
        <div>
            {options.map(option => (
                <RadioButton
                    key={option.value}
                    option={option}
                    selected={selectedOption === option.value}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default RadioButtonSet;