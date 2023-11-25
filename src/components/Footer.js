import React from "react";

const FooterNav = ({handleCategoryClick, category, setCategory}) => {
    return (
        <footer className="App-header">

        <ul className='nav nav-underline justify-content-center'>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Video Games')}>Video Games</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Vehicles')}>Vehicles</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

        </ul>

        <hr></hr>

        <p value={category} onChange={(e) => setCategory(e.target.value)} style={{textAlign: "center", paddingBottom: 20}}>Selected Category: {category}</p>

      </footer>
    )
}

export default FooterNav
