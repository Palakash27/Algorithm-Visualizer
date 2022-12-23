import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ErrorPage from "./error-page";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
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
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default App;
