import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TopContainer from './Containers/TopContainer';
import BottomContainer from './Containers/BottomContainer';

const App = ()=> {
  return (
    <>
    <TopContainer/> 
    <BottomContainer/>
    </>
  ); 
}; 


// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));
