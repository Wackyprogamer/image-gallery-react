import axios from "axios";
import { useEffect, useState } from "react";



const useAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com'

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