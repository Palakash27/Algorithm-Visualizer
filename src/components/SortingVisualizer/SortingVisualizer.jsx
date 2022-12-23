import React, { useState } from "react";
import Controls from "../Controls/Controls";
import ArrayBars from "../ArrayBars/ArrayBars";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    return (
        <div className="sorting-visualizer">
            <Controls array={array} setArray={setArray} />
            <ArrayBars array={array} />
        </div>
    );
};

export default SortingVisualizer;
