import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <span>
                    <Link to="/">Algorithm Visualizer</Link>
                </span>
            </div>
            <nav>
                <ul className="header-menu">
                    <li className="header-menu-item">
                        <Link to="/sorting-algorithm">Sorting</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
