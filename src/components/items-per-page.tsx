import React from 'react';

interface ItemsPerPageSelectProps {
    onChange: (value: number) => void;
}

export default function ItemsPerPageSelect({ onChange }: ItemsPerPageSelectProps) {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(+e.target.value);
    };

    return (
        <div>
            Items per page:
            <select onChange={handleSelectChange}>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="15">15</option>
            </select>
        </div>
    );
};


