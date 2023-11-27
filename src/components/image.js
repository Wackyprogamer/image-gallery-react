import React from "react";

const Image = ({ data }) => { // Image Component will create anchors of images with their alt tage from the data that was given by the
    //API from the chosen category -- will aslo have the urls for these -- target"_blank" creates a new window for the user to view the
    // Image by itself in a full window
    return (
        
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img src={data.urls.small} alt={data.alt_description} />
        </a>
    )
}

export default Image