import React from 'react';
import './hello.css';

let Hi = ({newage}) => {

    return (
        <div className = "hdiv">
            This is going to be my new age {newage + 1}
        </div>

    );
}

export default Hi;