import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () =>{
    return(
        <div className='ma4 mt2' >
            <Tilt className="Tilt br2 shadow-2" style={{ width: '150px', height: '150px' }}>
                <div style={{ height: '150px', width: '150px'}}>
                    <img className="Tilt-inner pa3" alt='logo' src={brain}></img>
                </div>
            </Tilt>
        </div>
    );
}


export default Logo;