import React from 'react';
//import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 white' style={{
            display: 'flex', 
            justifyContent: 'flex-start'
        }}>
            <img alt='brain' src={brain}></img>
        </div>
    );
}

export default Logo;