import { useCallback, useEffect, useState } from "react";
import { sort } from "../../utils/sort";
import ChooseAlgorithm from "../ChooseAlgorithm/ChooseAlgorithm";
import ChooseSpeed from "../ChooseSpeed/ChooseSpeed";
import SampleData from "../SampleData/SampleData";
import SortButton from "../SortButton/SortButton";
import "./Controls.css";

import { INITIAL_CONFIG } from "../../utils/enums";

const Controls = ({ array, setArray, generateArray }) => {
    const [speed, setSpeed] = useState(null);
    const [algorithm, setAlgorithm] = useState(INITIAL_CONFIG.ALGORITHM);
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
        await sort(array, setArray, speed, algorithm, setTimeConsumed);
        setIsSorting(false);
    };

    const handleResetClick = () => {
        handleArrayLengthOptionClick(array.length);
        handleSpeedOptionClick(speed);
        setTimeConsumed(null);
    };

    const handleArrayLengthOptionClick = useCallback(
        (length) => {
            generateArray(length);
            setArrayLengthActiveButton(length);
        },
        [generateArray]
    );

    useEffect(() => {
        handleArrayLengthOptionClick(INITIAL_CONFIG.ARRAY_LENGTH);
        handleSpeedOptionClick(INITIAL_CONFIG.SPEED);
    }, [handleArrayLengthOptionClick]);

    const handleAlgorithmChange = (e) => {
        setAlgorithm(e.target.value);
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
            />
            <SortButton
                handleResetClick={handleResetClick}
                handleSortClick={handleSortClick}
                isSorting={isSorting}
                timeConsumed={timeConsumed}
            />
        </div>
    );
};

export default Controls;
