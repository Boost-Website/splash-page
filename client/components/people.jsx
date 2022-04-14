import React from 'react';
import linkedin_logo from '../assets/linkedin-logo.png';
import github_logo from '../assets/github-logo.png';

export default (props)=> {
  const { id, img, name, title, linkedIn, github} = props.person

  return (
    <div id="person">
      <img className='pic' src={img} height="200px" width="200px"></img>
      <h4 className='aboutName'>{name}</h4>
      <h6 className='aboutTitle'>{title}</h6>
      <div id="icon-links">
      <a href={linkedIn} ><img className="logo" src={linkedin_logo} /></a>
      <a href={github} ><img className="logo" src={github_logo} /></a>
      </div>
    </div>
  );
}
