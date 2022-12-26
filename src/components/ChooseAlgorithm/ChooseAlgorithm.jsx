import React from "react";
import AlgorithmSelect from "../AlgorithmSelect/AlgorithmSelect";
import RenderQuickFacts from "../RenderQuickFacts/RenderQuickFacts";
import "./ChooseAlgorithm.css";

export default function ChooseAlgorithm({
    algorithm,
    handleAlgorithmChange,
    isSorting,
}) {
    return (
        <>
            <h2>Choose Algorithm</h2>
            <div>
                <AlgorithmSelect
                    algorithm={algorithm}
                    handleAlgorithmChange={handleAlgorithmChange}
                    isSorting={isSorting}
                />
                <RenderQuickFacts algorithm={algorithm} />
            </div>
            <hr />
        </>
    );
}
