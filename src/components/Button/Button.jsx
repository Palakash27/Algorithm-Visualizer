import React from "react";

export default function Button({ OnClick, ClassName, Disabled, BtnText }) {
    return (
        <button onClick={OnClick} className={ClassName} disabled={Disabled}>
            {BtnText}
        </button>
    );
}
