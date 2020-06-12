import React, {useState} from 'react';

let Gate = ({IsOpen}) => {
    
    let [IsGate, SetGate] = useState(true);

    return (
        <div>
            The gate is {IsGate? "Open" : "Closed"}
            <br/>
            <button onClick = {()=> {
                SetGate(!IsGate);
            }}>Toggel the gate</button>
        </div>
    );
}

export default Gate;