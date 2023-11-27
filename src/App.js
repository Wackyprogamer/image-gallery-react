import './App.css'
import BannerNav from './components/Banner';
import FooterNav from './components/Footer';
import Images from './components/images';
import { createContext, useEffect, useState } from 'react'
import useAxios from './hooks/useAxios';



//Created Context
export const ImageContext = createContext();


function App() {

  const { response, isLoading, error, fetchData } = useAxios(`/search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const [category, setCategory] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);
    //call api here with the selected category
  };


  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  useEffect(() => {
    fetchData(category);
  }, [category])

  return (
    <div className="App">

      <ImageContext.Provider value={value}>

        <BannerNav handleCategoryClick={handleCategoryClick} category={category} setCategory={setCategory} />

        <Images category={category} />

        <FooterNav handleCategoryClick={handleCategoryClick} category={category} setCategory={setCategory} />

      </ImageContext.Provider>

    </div>
  );
}

export default App;
