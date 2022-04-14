import React from 'react'; 
import Boost_Word from '../assets/Boost_Word.png'; 


export default ()=> {
    return (
        <>
    <section id='landingSection'>
    <img id='header' src={Boost_Word}
     alt="boost-full-logo " />
    <h4 id='description-header'>Mircosoft Excel Add-in for Developers</h4>
    <form action="https://github.com/oslabs-beta/Boost/">
    <button type='submit' target='_blank' id='downloadBtn'>Download</button>
    </form>
    </section>
    </>
    );
};