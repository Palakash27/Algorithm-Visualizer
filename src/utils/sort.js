// Function to sort the array using bubble sort
const bubbleSort = async (array, setArray, speed) => {
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
const selectionSort = async (array, speed, setArray) => {
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
const insertionSort = async (array, speed, setArray) => {
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
const quickSort = async (array, setArray, speed) => {
    const partition = async (low, high) => {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            // Highlight the bars being compared
            document
                .querySelectorAll(".array-bar")
                [high].classList.add("highlight-pivot");
            document
                .querySelectorAll(".array-bar")
                [j].classList.add("highlight");

            await new Promise((resolve) => setTimeout(resolve, speed));

            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];

                document
                    .querySelectorAll(".array-bar")
                    [i].classList.add("highlight");
                await new Promise((resolve) => setTimeout(resolve, speed));

                setArray([...array]);

                document
                    .querySelectorAll(".array-bar")
                    [i].classList.remove("highlight");
            }

            // Remove the highlight from the bars
            document
                .querySelectorAll(".array-bar")
                [high].classList.remove("highlight-pivot");
            document
                .querySelectorAll(".array-bar")
                [j].classList.remove("highlight");
        }
        document
            .querySelectorAll(".array-bar")
            [high].classList.add("highlight-pivot");
        document
            .querySelectorAll(".array-bar")
            [i + 1].classList.add("highlight");
        await new Promise((resolve) => setTimeout(resolve, speed));

        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        setArray([...array]);
        // Remove the highlight from the bars
        document
            .querySelectorAll(".array-bar")
            [high].classList.remove("highlight-pivot");
        document
            .querySelectorAll(".array-bar")
            [i + 1].classList.remove("highlight");

        return i + 1;
    };

    const sort = async (low, high) => {
        if (low < high) {
            const pi = await partition(low, high);
            await new Promise((resolve) => setTimeout(resolve, speed));

            // Update the state with the sorted array
            setArray([...array]);
            await new Promise((resolve) => setTimeout(resolve, speed));

            // Recursively sort the subarrays
            await sort(low, pi - 1);
            await sort(pi + 1, high);
        }
    };

    // Initial call to the sort function
    await sort(0, array.length - 1);

    // Add the "sorted" class to the bars
    document.querySelectorAll(".array-bar").forEach((bar) => {
        bar.classList.add("sorted");
    });
};

// Function to sort the array using merge sort
const mergeSort = async (array, speed, setArray) => {
    // Function to merge the array
    const merge = async (left, right, speed) => {
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
            // Remove the highlight from the bars
            document
                .querySelectorAll(".array-bar")
                [leftIndex].classList.remove("highlight");
            document
                .querySelectorAll(".array-bar")
                [rightIndex].classList.remove("highlight");
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }

        const result = resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));

        console.log(`result: ${result}`);

        return result;
    };

    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    console.log(`left: ${left} and right: ${right}`);
    const leftSorted = await mergeSort(left, speed, setArray);
    const rightSorted = await mergeSort(right, speed, setArray);

    console.log(`leftSorted: ${leftSorted} and rightSorted: ${rightSorted}`);

    return await merge(leftSorted, rightSorted, speed);
};

export const sort = async (
    array,
    setArray,
    speed,
    algorithm,
    setTimeConsumed
) => {
    const startTime = performance.now();

    switch (algorithm) {
        case "bubbleSort":
            await bubbleSort(array, setArray, speed);
            break;
        case "selectionSort":
            await selectionSort(array, speed, setArray);
            break;
        case "insertionSort":
            await insertionSort(array, speed, setArray);
            break;
        case "quickSort":
            await quickSort(array, setArray, speed);
            break;
        case "mergeSort":
            console.log(`array: ${array}`);
            let sortedArray = await mergeSort(array, speed, setArray);
            setArray([...sortedArray]);
            break;
        default:
            break;
    }

    const endTime = performance.now();
    setTimeConsumed(((endTime - startTime) / 1000).toFixed(2));
};
