import React, { useContext } from "react";
import { ImageContext } from "../App";

const Images = ({ category }) => {

    const { response, isLoading } = useContext(ImageContext);

    return (
        <>
            <h2 className="text-center mt-6 underline text-2xl">Results for : {category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
                {response.map((data, key) => <)}
            </div>
        </>
    )
}

export default Images