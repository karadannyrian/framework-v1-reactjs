import React, { useState } from 'react';

function UnderConstruction() {
    const [message] = useState('Under Construction');

    return (
        <div id='error-page'>
            <h1>{message}</h1>
        </div>
    );
}

export default UnderConstruction;