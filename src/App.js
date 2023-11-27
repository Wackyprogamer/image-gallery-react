import './App.css'
import BannerNav from './components/Banner'; // Imports BannerNav Component
import FooterNav from './components/Footer'; // Imports FooterNav Component
import Images from './components/images'; // Imports Images Component
import { createContext, useEffect, useState } from 'react' // import createContext, useEffect & useState React items
import useAxios from './hooks/useAxios'; // Imported my useAxios Hook



//Created Context
export const ImageContext = createContext();


function App() {

  // Grabs Response, isLoading, error & fetch data -- then grabs useAxios hook with its API access key
  const { response, isLoading, error, fetchData } = useAxios(`/search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  //set a useState for Category to rerender application once user selects a category
  const [category, setCategory] = useState("");

  //This handles click handler for category
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  //values for errors or anything (don't really understand it much)
  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  //this is the useEffect that will grab the images from unsplash API with a category in question
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
