import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./image";

const Images = ({ category }) => {

    const { response, isLoading } = useContext(ImageContext);

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