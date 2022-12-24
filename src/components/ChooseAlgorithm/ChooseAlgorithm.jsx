import React from "react";

export default function ChooseAlgorithm({
    algorithm,
    handleAlgorithmChange,
    isSorting,
    renderQuickFacts,
}) {
    return (
        <>
            <h2>Choose Algorithm</h2>
            <div>
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
                <div className="quick-facts">
                    <i>
                        <h4>Quick Facts</h4>
                        {renderQuickFacts()}
                    </i>
                </div>
            </div>
            <hr />
        </>
    );
}
