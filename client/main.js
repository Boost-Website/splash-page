import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TopContainer from './Containers/TopContainer';
import BottomContainer from './Containers/BottomContainer';
import NavBar from './components/NavBar';

const App = ()=> {
  return (
    <div id='outerContainer'>
    <NavBar/> 
    <TopContainer/> 
    <BottomContainer/>
    <footer><a href='https://opensourcelabs.io/'>OSLabs</a></footer>
    </div>
  ); 
}; 


// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));
