import React from 'react'; 
import Person from '../components/people'
import janson from '../assets/janson.jpg'
import sophia from '../assets/sophia.png'
import charles from '../assets/charles.jpg'
import chloe from '../assets/chloe.jpeg'

export default ()=> {
  const info = [{id: 0, img: janson, name: 'Janson Xavier', title: 'Software Engineer',linkedIn: 'https://www.linkedin.com/in/janson-xavier/', github:'https://github.com/JansonXavier' },{id: 1, img: sophia, name: 'Sophia Sam', title: 'Software Engineer',linkedIn: 'https://www.linkedin.com/in/sophia-sam/', github:'https://github.com/sophiasam96'},{id: 2, img: charles, name: 'Charles Ren', title: 'Software Engineer',linkedIn: 'https://www.linkedin.com/in/charles-ren-42673816b/', github:'https://github.com/codeWithRen'},{id: 3, img: chloe, name: 'Chloe Courtois', title: 'Software Engineer',linkedIn: 'https://www.linkedin.com/in/chloe-courtois-3337a210b/', github:'https://github.com/chloecourt'}];
  
  
  return (
    <>
      <h3 id='about-us'>About Us</h3>
      <h5 id='about-us-desc'>The team that brought you Boost</h5>
      <div id="people">
        {info.map((person, i) => <Person key={`person${i}`} person={info[i]} />)}
      </div>
    </>
  ); 
}
