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
            default:
                return null;
        }
    };

    // Function to generate an array of random values
    const generateArray = useCallback(
        (size) => {
            const newArray = [];
            for (let i = 0; i < size; i++) {
                newArray.push(Math.floor(Math.random() * 100));
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
        // Remove the sorted class from the bars
        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.remove("sorted");
        });
    };

    // Function to sort the array using merge sort
    const mergeSort = async (array) => {
        // Remove the sorted class from the bars
        document.querySelectorAll(".array-bar").forEach((bar) => {
            bar.classList.remove("sorted");
        });
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
