import React, {useState} from 'react';
import './App.css';
import Hi from './test components/hello';
import MediaCard from './test components/Mastercard';

import Gate from './test components/Gate';

let App = ({name}) => {
let [IsLit, SetLit] = useState(true);
  return (
    <div className={`maindiv room ${IsLit? 'lit':'dark'}`}>
      <strong>This is my first react app and my name is {name} and my age is {23}</strong>
      <br/><br/>

      <Hi/>
      <br/>
      <Gate/>
      <br/>
      <div>
           The room is {IsLit ? "Lit" : "Dark"}
            <br/>
            <button onClick = {()=> {
                SetLit(!IsLit);
            }}>Toggle light</button>
        </div>
      <br/>

      <MediaCard title = "My name is Danyal" body = {<strong>this is the second assignment to test body para</strong>} ImageUrl = {"https://militarywatchmagazine.com/articles/2019/05/19/article_5ce11c405fffa9_11865733.png"}/>
      
      </div>
  
  );

}
export default App;