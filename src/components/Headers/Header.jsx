import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
             <div className='header-con'>
             <h4>Diti's meals</h4>
             <div className='ancor'>
                <a href="/home">Home</a>
                <a href="./contact">Contact Us</a>
                <a href="/review">Review</a>
             </div>
             </div>
        </div>
    );
};

export default Header;