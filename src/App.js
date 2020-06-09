import React from 'react';
import './App.css';
import Hi from './hello';

let App = ({name, age}) => {

  return (
    <div className = "maindiv">
      <strong>This is my first react app and my name is {name} and my age is {age}</strong>
      <br/><br/>

      <Hi newage = {age}/>
      </div>
  
  );

}


export default App;
