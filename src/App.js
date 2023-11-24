import './App.css'
import { useState, useEffect } from 'react'
//import { imageApi } from './components/unsplashGallery'
import subaru from "./images/22b-subaru.jpg"
import xt from './images/7900xt-gpu.jpg'
import turtle from './images/turtle-little.jpg'
import husky from './images/husky-nature.jpg'


//<https://api.unsplash.com/search/photos?page=1&query=office>

function App() {

  const Access_Key = PHAr0p_38mFYwUiEOdIVvNubzFqEhjkUvUrZCZmoPqg;

  const [category, setCategory] = useState("");

  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result)
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setCategory("");
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    fetchRequest();
    //call api here with the selected category
  };




  return (
    <div className="App">

      <header className="App-header">

        <ul className='nav nav-underline justify-content-center'>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

        </ul>

        <hr></hr>

        <p value={category} onChange={(e) => setCategory(e.target.value)} style={{textAlign: "center", paddingBottom: 20}}>Selected Category: {category}</p>

      </header>

      <section className='photoGallery'>

        {res.map((val) => {
          return (
            <>
            <img 
              className='col-3 img-fluid img-thumbnail'
              src={val.urls.small}
              alt='val.alt_description'
              />
            </>
          );
        })}

      </section>;

      <footer>
        <hr></hr>
        <ul className='nav nav-underline justify-content-center'>

         <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

        </ul>
        <p id='createrMark'>Project Created With React -- Created by Sergio Castillo -- For a Mountainland Technical School Project</p>
      </footer>
    </div>
  );
}

export default App;
