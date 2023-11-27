import React from "react";

const FooterNav = ({handleCategoryClick, category, setCategory}) => {
    return (
        <footer className="App-header">

        <ul className='nav nav-underline justify-content-center'>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Nature')}>Nature</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Honda')}>Honda</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Playstation')}>Playstation</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Apparel')}>Apparel</button></li>

        <li><button type='button' className='nav-link' onClick={() => handleCategoryClick('Subaru')}>Subaru's</button></li>

        </ul>

        <hr></hr>

        <p className="createrMark" style={{textAlign: "center"}}>This Project Was Created By Sergio Castillo -- An Mtech Project</p>

      </footer>
    )
}

export default FooterNav
