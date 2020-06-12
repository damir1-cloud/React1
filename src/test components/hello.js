import React, {useState} from 'react';
import './hello.css';

let Hi = () => {

    let [Age, SetAge] = useState(23);

    return (
        <div className = "hdiv">
            This is going to be my new age {Age}
            <br/>
            <button onClick = {()=> {
                SetAge(Age+5);
            }}>Increase Age</button>
            <button onClick = {()=> {
                SetAge(--Age);
            }}>Decrease Age</button>
        </div>

    );
}

export default Hi;