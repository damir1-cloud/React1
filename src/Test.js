import React, {useState} from 'react';

let Test = () => {

    let [IsLit, SetLit] = useState(true);

    return (

        <div>
            The room is {IsLit ? "Lit" : "Dark"}
            <br/>
            <button onClick = {()=> {
                SetLit(!IsLit);
            }}>Toggle light</button>
        </div>
    );
}
export default Test;