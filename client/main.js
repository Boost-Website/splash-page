import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import LandingSection from './Containers/LandingSection';
import VideoSection from './Containers/VideoSection';
import NavBar from './components/NavBar';
import AboutUs from './Containers/AboutUs';

const App = ()=> {
  return (
    <>
    <NavBar/> 
    <main id='OuterContainer'>
      <LandingSection/> 
      <VideoSection/>
      <AboutUs />
    </main>
    </>
  ); 
}; 


// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));

/* footer
 <footer><a href='https://opensourcelabs.io/'>OSLabs</a></footer>
*/