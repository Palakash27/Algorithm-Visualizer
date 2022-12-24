import "./ArrayBars.css";

const ArrayBars = ({ array }) => {
    return (
        <div className="array-bars-container">
            {array.map((value, index) => (
                <div
                    key={index}
                    className="array-bar"
                    style={{
                        width: `${Math.abs(60 - array.length)}px`,
                        height: `${value}px`,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    {array.length <= 20 && value}
                </div>
            ))}
        </div>
    );
};

export default ArrayBars;
