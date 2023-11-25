import './App.css'
import { createContext, useState } from 'react'
import useAxios from './hooks/useAxios';


//Created Context
export const ImageContext = createContext();


function App() {

  const { response, isLoading, error, fetchData } = useAxios(`/search
  /photos?page=1&query=office&client_id=${process.env.
    REACT_APP_ACCESS_KEY}`);

  console.log(response);

  const [category, setCategory] = useState("");

  const [res, setRes] = useState([]);


  const handleCategoryClick = (category) => {
    setCategory(category);
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
