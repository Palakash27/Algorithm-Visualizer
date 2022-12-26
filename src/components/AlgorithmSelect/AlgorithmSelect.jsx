import React from "react";
import "./AlgorithmSelect.css";

export default function AlgorithmSelect({
    algorithm,
    handleAlgorithmChange,
    isSorting,
}) {
    return (
        <div className="algorithm-select-container">
            <select
                value={algorithm}
                onChange={handleAlgorithmChange}
                className="algorithm-select"
                disabled={isSorting}
            >
                <option value="bubbleSort">Bubble Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="heapSort">Heap Sort</option>
            </select>
            <div className="algorithm-select-arrow">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
}
