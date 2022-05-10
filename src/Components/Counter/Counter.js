import React from 'react';
import './counter.css'

function Counter({numberX, numberO}) {
    return (
        <div className="counter">
            {`player one : ${numberX}`}
            <br/>
            {`player two : ${numberO}`}

        </div>
    );
}

export default Counter;