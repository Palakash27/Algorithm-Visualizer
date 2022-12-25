import React, { useCallback, useState } from "react";
import Controls from "../Controls/Controls";
import ArrayBars from "../ArrayBars/ArrayBars";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
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

    return (
        <div className="sorting-visualizer">
            <Controls
                array={array}
                setArray={setArray}
                generateArray={generateArray}
            />
            <ArrayBars array={array} />
        </div>
    );
};

export default SortingVisualizer;
