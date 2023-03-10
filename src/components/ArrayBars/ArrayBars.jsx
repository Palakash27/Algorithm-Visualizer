import "./ArrayBars.css";

const ArrayBars = ({ array }) => {
    return (
        <div className="array-bars-container">
            {array.map((value, index) => (
                <div
                    key={index}
                    className="array-bar"
                    style={{
                        width: `${
                            (window.innerWidth - array.length * 2 - 60) /
                            array.length
                        }px`,
                        height: `${value}px`,
                    }}
                >
                    {array.length <= 20 && value}
                </div>
            ))}
        </div>
    );
};

export default ArrayBars;
