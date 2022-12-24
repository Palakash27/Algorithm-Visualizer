import React from "react";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";

export default function ChooseSpeed({
    handleSpeedOptionClick,
    speedActiveButton,
    isSorting,
}) {
    return (
        <>
            <h2>Choose Speed</h2>
            <ButtonsGroup
                onClick={handleSpeedOptionClick}
                activeButton={speedActiveButton}
                isSorting={isSorting}
                containerClassName="speed-options"
                buttonClassName="speed-option"
                buttonTexts={{
                    btn1: { text: "Sloooow", speed: 1000 },
                    btn2: { text: "Medium", speed: 500 },
                    btn3: { text: "Fast", speed: 100 },
                    btn4: { text: "Flash", speed: 1 },
                }}
            />
            <hr />
        </>
    );
}
