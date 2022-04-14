import React from 'react'; 
import boostVideoSquare1Fast from '../assets/boost-demo-1_1.5x.gif';
import boostVideoSquare2Fast from '../assets/boost-demo-2_1.5x.gif'; 
import boostVideoSquare3Fast from '../assets/boost-demo-3_1.5x.gif'; 
 


export default ()=> {
  return (
    <div id='video-container'>
      <h3 id='video-tutorial-header'>Video Tutorial</h3> 
      <section id='video-demo'>
        <br>
        </br>
        <img id='video1' src={boostVideoSquare1Fast} ></img>
        <div id='video1-para'>
        <h3>Get Started</h3>
        <p>Easy to install and simple UI directly built into Excel.</p>
        </div>
        <br>
        </br>
        <img id='video2' src={boostVideoSquare2Fast} ></img>
        <div id='video2-para'>
        <h3>SQL Querying</h3>
        <p>Use SQL to query and update workbook tables. Boost's built-in Query tab lets you run yours querying across multiple tables as if they were database tables.</p>
        </div>
        <br>
        </br>
        <img id='video3' src={boostVideoSquare3Fast} ></img>
        <div id='video3-para'>
        <h3>Creating New TypeScript Functions</h3>
        <p>Click on the IDE tab to create and save customized TypeScript functions.</p>
        </div>
      </section>
    </div> 
  );
};
