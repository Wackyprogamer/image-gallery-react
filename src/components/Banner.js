import React from "react";

const BannerNav = ({handleCategoryClick, category, setCategory}) => {

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

        <hr></hr>

        <p style={{textAlign: "center", fontSize: 35}}>No Category selected! Choose A Category To View Ten Images Of That type!</p>
        

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
