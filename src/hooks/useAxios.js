import axios from "axios";
import { useEffect, useState } from "react"; 


// this useAxios hook was created to handle my api call
const useAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com'

    // this will fetchData -- then it will try to load it -- if it does then we set res to the results grabed from the API call
    //from our access key -- then setResponse to equal that result (the 10 images)
    //if an error occurs we will catch it and set Loading to false
  const fetchData = async (category) => {
    try {
        setIsLoading(true);
        const res = await axios(`/search/photos?page=1&query=${category}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
        setResponse(res.data.results);
    } catch (err) {
        setError(err)
    } finally {
        setIsLoading(false)
    }  
}


    useEffect(() => {
        fetchData(param);
    }, [param])

    return {
        response,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useAxios