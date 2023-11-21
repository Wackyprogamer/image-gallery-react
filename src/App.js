import './App.css'
import { useState, useEffect } from 'react'
//import { imageApi } from './components/unsplashGallery'
import subaru from "./images/22b-subaru.jpg"
import xt from './images/7900xt-gpu.jpg'
import turtle from './images/turtle-little.jpg'
import husky from './images/husky-nature.jpg'

//<https://api.unsplash.com/search/photos?page=1&query=office>

function App() {

  const [category, setCategory] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);

    //call api here with the selected category
  };




  return (
    <div className="App">

      <header className="App-header">

        <ul className='nav nav-underline justify-content-center'>

        <button className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button>

        <button className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button>

        <button className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button>

        <button className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button>

        </ul>

        <hr></hr>

        <p style={{textAlign: "center", paddingBottom: 20}}>Selected Category: {category}</p>

      </header>

      <section className='photoGallery'>

        <div className='row'>
          <img src={subaru} alt='Photo of a 22b-Subaru impreza' className='img-thumbnail col-4'></img>
          <img src={xt} alt='Photo of a 7900xt reference GPU from AMD' className='img-thumbnail col-4'></img>
          <img src={turtle} alt='Photo of a small turtle' className='img-thumbnail col-4'></img>
        </div>

        <div className='row'>
          <img src={husky} alt="image of a husky" className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
        </div>

        <div className='row'>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
        </div>

      </section>

      <footer>
        <hr></hr>
        <ul className='nav nav-underline justify-content-center'>

         <button className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button>

        <button className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button>

        <button className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button>

        <button className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button>

        </ul>
        <p id='createrMark'>Project Created With React -- Created by Sergio Castillo -- For a Mountainland Technical School Project</p>
      </footer>
    </div>
  );
}

export default App;
