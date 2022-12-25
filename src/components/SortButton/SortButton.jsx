import React from "react";
import TimeConsumed from "../TimeConsumed/TimeConsumed";

export default function SortButton({
    handleResetClick,
    handleSortClick,
    isSorting,
    timeConsumed,
}) {
    return (
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
            <TimeConsumed timeConsumed={timeConsumed} />
        </div>
    );
}
