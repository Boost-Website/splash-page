import React from 'react'; 
import BoostIcon from '../assets/Boost-Icon-32.png'; 

export default ()=> {

    return (
    <nav>
    <ul id='navbar'>
        <li id='boost-icon'><img src={BoostIcon} width='20px' height='35px' alt='Boost-icon' ></img></li>
        <li><a href='#'></a>About
        </li>
        <li>
            <a href='#'></a>Documentation
        </li>
        <li>
            <a href='#'></a>Medium Article</li>
        <li>
            <a href='https://opensourcelabs.io/' target='_blank'>OSLabs</a></li>
        <li>
            <a href='#'></a>Download</li>
    </ul>
    </nav>
    ); 
};