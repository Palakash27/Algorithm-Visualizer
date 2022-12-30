import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./Readme.css";
import readmeFile from "./README.md";

const Readme = ({ onHideReadme }) => {
    const [readme, setReadme] = useState("");

    useEffect(() => {
        // Check if the readme has already been displayed
        if (localStorage.getItem("readmeDisplayed") === "true") {
            onHideReadme();
        }
    }, [onHideReadme]);

    useEffect(() => {
        // Make an HTTP request to the server to fetch the readme.md file using the fetch API
        fetch(readmeFile)
            .then((response) => response.text())
            .then((text) => {
                // Convert the markdown text to HTML using the marked library
                const html = marked(text);
                setReadme(html);

                // Set the readmeDisplayed flag to true
                localStorage.setItem("readmeDisplayed", "true");
            })
            .catch((error) => {
                // Handle the error
            });
    }, []);

    return (
        <div className="readme">
            <hr />
            <div dangerouslySetInnerHTML={{ __html: readme }} />
            <div className="btn">
                <button
                    onClick={() => {
                        onHideReadme();
                        localStorage.setItem("readmeDisplayed", "true");
                    }}
                >
                    Get Started
                </button>
            </div>
            <hr />
        </div>
    );
};

export default Readme;
