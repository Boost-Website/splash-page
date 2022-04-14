import React from 'react'; 
import BoostIcon from '../assets/Boost-Icon-32.png'; 

export default ()=> {

    return (
    <nav>
    <ul id='navbar'>
        <li id='boost-icon'><img src={BoostIcon} width='20px' height='35px' alt='Boost-icon' ></img></li>
        <li><a href='#about-us'>About</a>
        </li>
        <li>
            <a href='https://medium.com/@charlesren99/boost-an-excel-add-in-to-sql-query-workbooks-and-create-custom-typescript-functions-9e9483b91c36' target='_blank' >Medium Article</a></li>
        <li>
            <a href='https://opensourcelabs.io/' target='_blank'>OSLabs</a></li>
        <li>
            <a href='https://github.com/oslabs-beta/Boost' target='_blank' >Download</a></li>
    </ul>
    </nav>
    ); 
};