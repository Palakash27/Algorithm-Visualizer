import React from "react";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";

export default function SampleData({
    handleArrayLengthOptionClick,
    arrayLengthActiveButton,
    isSorting,
}) {
    return (
        <>
            <h2>Sample Data Size</h2>
            <ButtonsGroup
                onClick={handleArrayLengthOptionClick}
                activeButton={arrayLengthActiveButton}
                isSorting={isSorting}
                containerClassName="array-length-options"
                buttonClassName="array-length-option"
                buttonTexts={{
                    btn1: { text: "10", speed: 10 },
                    btn2: { text: "20", speed: 20 },
                    btn3: { text: "35", speed: 35 },
                    btn4: { text: "50", speed: 50 },
                }}
            />
            <hr />
        </>
    );
}
