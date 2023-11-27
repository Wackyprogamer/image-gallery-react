import React, { useContext } from "react";
import { ImageContext } from "../App"; // This will grab image Context
import Image from "./image"; // This will grab Image Component

const Images = ({ category }) => { // From the cateogry thats been passed through

    const { response, isLoading } = useContext(ImageContext); // we get the response & isLoading -- to be useContext(imageContext)


    // Here this component will Update the {Catergory} so we tell what the current category is to the user
    // Then we will return a div with an id of imageDiv
    // This will grab the response of the data and key -- Map through it (if theres ten it will map through all then and create 10 Images
    // -- Then use the Image component to create 10 Images -- then assign a key and data value
    return (
        <>
            <h2 className="text-center mt-6 underline text-2xl">Results for : {category}</h2>
            <div id="imageDiv">
                {response.map((data, key) => <Image key={key} data={data}/>)}
            </div>
        </>
        
    )
    
}

export default Images