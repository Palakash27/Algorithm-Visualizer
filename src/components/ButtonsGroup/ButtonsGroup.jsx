import React from "react";
import Button from "../Button/Button";

export default function ButtonsGroup({
    onClick,
    activeButton,
    isSorting,
    containerClassName,
    buttonClassName,
    buttonTexts,
}) {
    return (
        <div className="controls">
            <div className={containerClassName}>
                {Object.keys(buttonTexts).map((btn, index) => (
                    <Button
                        key={`${buttonClassName}-${index}`}
                        OnClick={() => onClick(buttonTexts[btn].speed)}
                        ClassName={buttonClassName}
                        Disabled={
                            activeButton === buttonTexts[btn].speed || isSorting
                        }
                        BtnText={buttonTexts[btn].text}
                    />
                ))}
            </div>
        </div>
    );
}
