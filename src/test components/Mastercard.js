import React from 'react';
import './Master.css';

let MediaCard = ({title, body, ImageUrl}) => {

    return (
      <div>
          <h1>{title}</h1>
          <p>{body}</p>
          <br/>
          <div className = "ig"><img src = {ImageUrl} alt = "SU 57"/></div>
          
      </div>
  
    );
  }

  export default MediaCard;