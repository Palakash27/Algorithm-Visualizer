import React from "react";

export default function ChooseAlgorithm({
    algorithm,
    handleAlgorithmChange,
    isSorting,
}) {
    const renderQuickFacts = () => {
        switch (algorithm) {
            case "bubbleSort":
                return (
                    <div className="facts">
                        <p>
                            Bubble sort is a simple sorting algorithm that
                            compares adjacent elements and swaps their positions
                            if they are not in the correct order.
                        </p>
                        <p>
                            It has a time complexity of O(n^2) in the worst case
                            and O(n) in the best case.
                        </p>
                        <p>
                            It is not efficient for large data sets, but it is
                            simple to implement and can be useful for small data
                            sets or as a learning exercise.
                        </p>
                    </div>
                );
            case "selectionSort":
                return (
                    <div className="facts">
                        <p>
                            Selection sort is a simple sorting algorithm that
                            repeatedly selects the minimum element from the
                            unsorted part of the array and places it at the
                            beginning of the unsorted part.
                        </p>
                        <p>
                            It has a time complexity of O(n^2) in the worst and
                            average case.
                        </p>
                        <p>
                            It is not efficient for large data sets, but it is
                            simple to implement and can be useful for small data
                            sets or as a learning exercise.
                        </p>
                    </div>
                );
            case "insertionSort":
                return (
                    <div className="facts">
                        <p>
                            Insertion sort is a simple sorting algorithm that
                            repeatedly selects an element and inserts it into
                            the correct position in the sorted part of the
                            array.
                        </p>
                        <p>
                            It has a time complexity of O(n^2) in the worst case
                            and O(n) in the best case.
                        </p>
                        <p>
                            It is more efficient than bubble sort and selection
                            sort for small data sets, and it is simple to
                            implement.
                        </p>
                    </div>
                );
            case "quickSort":
                return (
                    <div className="facts">
                        <p>
                            Quick sort is a divide and conquer algorithm that
                            selects a pivot element and partition the array into
                            two parts based on whether the elements are less
                            than or greater than the pivot.
                        </p>
                        <p>
                            It has a time complexity of O(n log n) in the
                            average and best case, and O(n^2) in the worst case.
                        </p>
                        <p>
                            It is a popular choice for sorting large data sets
                            because of its efficient average case performance.
                        </p>
                    </div>
                );
            case "mergeSort":
                return (
                    <div className="facts">
                        <p>
                            Merge sort is a divide and conquer algorithm that
                            divides the array into two halves, sorts each half,
                            and then merges the sorted halves back into a single
                            sorted array.
                        </p>
                        <p>
                            It has a time complexity of O(n log n) in all cases.
                        </p>
                        <p>
                            It is a stable sort, which means that the relative
                            order of elements with equal keys is preserved. It
                            is also efficient for sorting large data sets and is
                            often used in practical applications.
                        </p>
                    </div>
                );
            case "heapSort":
                return (
                    <div className="quick-facts">
                        <p>
                            <strong>Heap Sort</strong> is a comparison-based
                            sorting algorithm that uses a binary heap data
                            structure. It has a time complexity of O(n log n).
                        </p>
                        <p>
                            In heap sort, the array is first transformed into a
                            max heap (or min heap, depending on the order in
                            which the elements need to be sorted). The root
                            element of the heap (which is the largest or
                            smallest element in the heap) is then removed and
                            placed at the end of the sorted array. This process
                            is repeated until the heap is empty.
                        </p>
                        <p>
                            Heap sort is an in-place sorting algorithm, which
                            means it does not require any additional space to
                            sort the elements. It is also not a stable sort,
                            which means the order of elements with equal values
                            may be changed.
                        </p>
                    </div>
                );
            default:
                break;
        }
    };

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
