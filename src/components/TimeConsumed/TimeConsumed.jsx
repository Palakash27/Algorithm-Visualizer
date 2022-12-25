import React from "react";

export default function TimeConsumed({ timeConsumed }) {
    return (
        <>
            {timeConsumed !== null ? (
                <p>Time consumed: {timeConsumed}s</p>
            ) : null}
        </>
    );
}
