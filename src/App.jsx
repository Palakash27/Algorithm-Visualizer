import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./NoMatch";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import { Routes, Route } from "react-router-dom";
import Readme from "./components/Readme/Readme";
import { useState } from "react";

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            {isVisible ? (
                <Readme onHideReadme={() => setIsVisible(false)} />
            ) : (
                <div>
                    <Header />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route
                            path="sorting-algorithm"
                            element={<SortingVisualizer />}
                        />

                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </div>
            )}
        </>
    );
};

export default App;
