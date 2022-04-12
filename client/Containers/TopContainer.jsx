import React from 'react'; 
import Boost_Word from '../assets/Boost_Word.png'; 


export default ()=> {
    return (
    <div id='topContainer'>
    <img id='header' src={Boost_Word}
     alt="boost-full-logo " />
    <h4 id='description-header'>Simplifying Microsoft Excel SQL queries</h4>
    <button id='downloadBtn'>Download</button>
    </div>
    );
};