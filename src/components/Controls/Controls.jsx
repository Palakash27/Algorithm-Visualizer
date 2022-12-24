import { useCallback, useEffect, useState } from "react";
import ChooseAlgorithm from "../ChooseAlgorithm/ChooseAlgorithm";
import ChooseSpeed from "../ChooseSpeed/ChooseSpeed";
import SampleData from "../SampleData/SampleData";
import "./Controls.css";

const Controls = ({ array, setArray }) => {
    const [speed, setSpeed] = useState(250);
    const [algorithm, setAlgorithm] = useState("bubbleSort");
    const [isSorting, setIsSorting] = useState(false);
    const [arrayLengthActiveButton, setArrayLengthActiveButton] =
        useState(null);
    const [speedActiveButton, setSpeedActiveButton] = useState(null);
    const [timeConsumed, setTimeConsumed] = useState(null);

    const handleSpeedOptionClick = (speed) => {
        setSpeed(speed);
        setSpeedActiveButton(speed);
    };

    const handleSortClick = async () => {
        setIsSorting(true);
        await sort();
        setIsSorting(false);
    };

    const handleResetClick = () => {
        handleArrayLengthOptionClick(array.length);
        handleSpeedOptionClick(speed);
        setTimeConsumed(null);
    };

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

    // Function to generate an array of random values
    const generateArray = useCallback(
        (size) => {
            const newArray = [];
            const min = 30;
            const max = 150;
            for (let i = 0; i < size; i++) {
                newArray.push(
                    Math.floor(Math.random() * (max - min + 1) + min)
                );
            }
            setArray(newArray);

            // Remove the sorted class from the bars
            document.querySelectorAll(".array-bar").forEach((bar) => {
                bar.classList.remove("sorted");
            });
        },
        [setArray]
    );

    const handleArrayLengthOptionClick = useCallback(
        (length) => {
            generateArray(length);
            setArrayLengthActiveButton(length);
        },
        [generateArray]
    );

    useEffect(() => {
        handleArrayLengthOptionClick(20);
        handleSpeedOptionClick(500);
    }, [handleArrayLengthOptionClick]);

    const handleAlgorithmChange = (e) => {
        setAlgorithm(e.target.value);
    };

    const sort = async () => {
        const startTime = performance.now();

        switch (algorithm) {
            case "bubbleSort":
                await bubbleSort();
                break;
            case "selectionSort":
                await selectionSort();
                break;
            case "insertionSort":
                await insertionSort();
                break;
            case "quickSort":
                await quickSort(array, 0, array.length - 1);
                break;
            case "mergeSort":
                await mergeSort(array);
                break;
            case "heapSort":
                await heapSort();
                break;
            default:
                break;
        }

        const endTime = performance.now();
        setTimeConsumed(((endTime - startTime) / 1000).toFixed(2));
    };

    // Function to sort the array using bubble sort
    const bubbleSort = async () => {
        let isSorted = false;
        while (!isSorted) {
            isSorted = true;
            for (let i = 0; i < array.length - 1; i++) {
                // Highlight the bars being compared
                document
                    .querySelectorAll(".array-bar")
                    [i].classList.add("highlight");
                document
                    .querySelectorAll(".array-bar")
                    [i + 1].classList.add("highlight");

                await new Promise((resolve) => setTimeout(resolve, speed));
                if (array[i] > array[i + 1]) {
                    // Swap the values and set isSorted to false
                    // so that the loop continues until the array is sorted
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    isSorted = false;
                }
                // Remove the highlight from the bars
                document
                    .querySelectorAll(".array-bar")
                    [i].classList.remove("highlight");
                document
                    .querySelectorAll(".array-bar")
                    [i + 1].classList.remove("highlight");
                // Update the state with the sorted array
                setArray([...array]);

                await new Promise((resolve) => setTimeout(resolve, speed));
            }
        }

        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.add("sorted");
        });
    };

    // Function to sort the array using selection sort
    const selectionSort = async () => {
        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                // Highlight the bars being compared
                document
                    .querySelectorAll(".array-bar")
                    [j].classList.add("highlight");

                await new Promise((resolve) => setTimeout(resolve, speed));
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
                // Remove the highlight from the bar
                document
                    .querySelectorAll(".array-bar")
                    [j].classList.remove("highlight");
            }
            if (minIndex !== i) {
                // Swap the values
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                // Update the state with the sorted array
                setArray([...array]);

                await new Promise((resolve) => setTimeout(resolve, speed));
            }
        }

        // Remove the sorted class from the bars
        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.add("sorted");
        });
    };

    // Function to sort the array using insertion sort
    const insertionSort = async () => {
        for (let i = 1; i < array.length; i++) {
            let j = i;
            while (j > 0 && array[j] < array[j - 1]) {
                // Highlight the bars being compared
                document
                    .querySelectorAll(".array-bar")
                    [j].classList.add("highlight");
                document
                    .querySelectorAll(".array-bar")
                    [j - 1].classList.add("highlight");

                await new Promise((resolve) => setTimeout(resolve, speed));
                // Swap the values
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
                // Remove the highlight from the bars
                document
                    .querySelectorAll(".array-bar")
                    [j].classList.remove("highlight");
                document
                    .querySelectorAll(".array-bar")
                    [j - 1].classList.remove("highlight");
                // Update the state with the sorted array
                setArray([...array]);

                await new Promise((resolve) => setTimeout(resolve, speed));
                j--;
            }
        }

        // Add the sorted class from the bars
        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.add("sorted");
        });
    };

    // Function to sort the array using quick sort
    const quickSort = async (array, start, end) => {
        if (start >= end) {
            return;
        }

        let index = await partition(array, start, end);
        await quickSort(array, start, index - 1);
        await quickSort(array, index + 1, end);

        // Add the sorted class from the bars
        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.add("sorted");
        });
    };

    // Function to partition the array
    const partition = async (array, start, end) => {
        let pivotIndex = start;
        let pivotValue = array[end];

        for (let i = start; i < end; i++) {
            // Highlight the bars being compared
            document
                .querySelectorAll(".array-bar")
                [i].classList.add("highlight");
            document
                .querySelectorAll(".array-bar")
                [end].classList.add("highlight");

            await new Promise((resolve) => setTimeout(resolve, speed));
            if (array[i] < pivotValue) {
                // Swap the values
                [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
                // Update the state with the sorted array
                setArray([...array]);

                await new Promise((resolve) => setTimeout(resolve, speed));
                pivotIndex++;
            }
            // Remove the highlight from the bars
            document
                .querySelectorAll(".array-bar")
                [i].classList.remove("highlight");
            document
                .querySelectorAll(".array-bar")
                [end].classList.remove("highlight");
        }

        // Swap the values
        [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
        // Update the state with the sorted array
        setArray([...array]);

        await new Promise((resolve) => setTimeout(resolve, speed));

        return pivotIndex;
    };

    // Function to sort the array using merge sort
    const mergeSort = async (array) => {
        if (array.length <= 1) {
            return array;
        }

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return await merge(await mergeSort(left), await mergeSort(right));
    };

    // Function to merge the array
    const merge = async (left, right) => {
        let resultArray = [],
            leftIndex = 0,
            rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            // Highlight the bars being compared
            document
                .querySelectorAll(".array-bar")
                [leftIndex].classList.add("highlight");
            document
                .querySelectorAll(".array-bar")
                [rightIndex].classList.add("highlight");

            await new Promise((resolve) => setTimeout(resolve, speed));
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
            // Remove the highlight from the bars
            document
                .querySelectorAll(".array-bar")
                [leftIndex].classList.remove("highlight");
            document
                .querySelectorAll(".array-bar")
                [rightIndex].classList.remove("highlight");
        }

        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    };

    // Function to sort the array using heap sort
    const heapSort = async () => {
        let n = array.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(array, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            // Swap the values
            [array[0], array[i]] = [array[i], array[0]];
            // Update the state with the sorted array
            setArray([...array]);

            await new Promise((resolve) => setTimeout(resolve, speed));
            await heapify(array, i, 0);
        }

        // Add the sorted class from the bars
        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.add("sorted");
        });
    };

    // Function to heapify the array
    const heapify = async (array, n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && array[left] > array[largest]) {
            largest = left;
        }

        if (right < n && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== i) {
            // Swap the values
            [array[i], array[largest]] = [array[largest], array[i]];
            // Update the state with the sorted array
            setArray([...array]);

            await new Promise((resolve) => setTimeout(resolve, speed));
            await heapify(array, n, largest);
        }
    };

    return (
        <div className="controls-container">
            <SampleData
                handleArrayLengthOptionClick={handleArrayLengthOptionClick}
                arrayLengthActiveButton={arrayLengthActiveButton}
                isSorting={isSorting}
            />
            <ChooseSpeed
                handleSpeedOptionClick={handleSpeedOptionClick}
                speedActiveButton={speedActiveButton}
                isSorting={isSorting}
            />
            <ChooseAlgorithm
                algorithm={algorithm}
                handleAlgorithmChange={handleAlgorithmChange}
                isSorting={isSorting}
                renderQuickFacts={renderQuickFacts}
            />
            <div className="controls">
                <div>
                    <button
                        onClick={handleSortClick}
                        className="sort-button"
                        disabled={isSorting}
                    >
                        {isSorting ? "Sorting..." : "Sort"}
                    </button>
                    <button
                        onClick={handleResetClick}
                        className="reset-button"
                        disabled={isSorting}
                    >
                        Reset
                    </button>
                </div>
                {timeConsumed !== null ? (
                    <p>Time consumed: {timeConsumed}s</p>
                ) : null}
            </div>
        </div>
    );
};

export default Controls;
