import React, { useState } from "react";

const ButtonSearch = ({ handleCategoryClick }) => {

    const [input, setInput] = useState("");

    const handleClick = () => {
        handleCategoryClick(input);
        setInput("");
    };

    return (
        <div id="searchDiv">
            <label id="inputSearch">Or Search a keyword to find related Images:
                <input type="textbox" placeholder="Enter your keyword here" value={input} onChange={(e) => setInput(e.target.value)}></input>
            </label>
            <button type="button" id="searchButton" onClick={handleClick}>Search</button>
        </div>
    )


}

export default ButtonSearch