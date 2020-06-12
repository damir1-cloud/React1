import React from 'react';

let Test = () => {

    let [IsLit, SetLit] = React.useState(true);

    return (

        <div>
            The room is {IsLit ? "Lit" : "Dark"}
        </div>
    );
}

export default Test;