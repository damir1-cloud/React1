import React, {useState} from 'react';

let Test = () => {

    let [IsLit, SetLit] = useState(true);

    return (

        <div>
            The room is {IsLit ? "Lit" : "Dark"}
        </div>
    );
}

export default Test;