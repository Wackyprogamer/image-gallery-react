import React from "react";

const BannerNav = ({handleCategoryClick, category, setCategory}) => {

  if (category === "") {
    return (
    <header className="App-header">

        <ul className='nav nav-underline justify-content-center'>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

        </ul>

        <hr></hr>

        <p style={{textAlign: "center"}}>No category selected! Chooe a category to view 10 images of that type!</p>
        

      </header>
      )
  } else {

    return (
        <header className="App-header">

        <ul className='nav nav-underline justify-content-center'>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

        </ul>

        <hr></hr>

        
        

      </header>
    )
  }

    
}

export default BannerNav
