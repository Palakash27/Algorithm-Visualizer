import React from "react";
import "./CustomSelect.css";

const CustomSelect = ({ options }) => {
    const selectOptions = options.map((option) => {
        return (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        );
    });

    return (
        <div className="custom-select">
            <select>{selectOptions}</select>
            <div className="custom-select__arrow">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L5 5L9 1" stroke="#333333" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default CustomSelect;
