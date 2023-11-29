import React from "react";

const BannerNav = ({ handleCategoryClick, category, setCategory }) => { //Grabs props of category & handleCategoryClick which was set in app.js

  // Created a if statement to detect whether a cateogry has been chosen -- if not then the application will prompt the user to choose a category to view a
  // gallery of 10 images

  if (category === "") {
    return (
      <header className="App-header">

        <ul className='nav nav-underline justify-content-center'>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Honda')}>Honda</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Playstation')}>Playstation</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Subaru')}>Subaru's</button></li>

        </ul>

        <p style={{ textAlign: "center", fontSize: 35}}>No Category selected! Choose A Category To View Ten Images Of That type or Search by keyword!</p>


      </header>
    )
  } else {

    return (
      <header className="App-header">

        <ul className='nav nav-underline justify-content-center'>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Honda')}>Honda</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Playstation')}>Playstation</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

          <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Subaru')}>Subaru's</button></li>

        </ul>

        <hr></hr>

      </header>
    )
  }


}

export default BannerNav
