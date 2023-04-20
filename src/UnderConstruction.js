import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UnderConstruction() {
    const navigate = useNavigate()
    const [message] = useState('Under Construction');
    useEffect(() => {
        setTimeout(() => {
            navigate('auth/signin')
        }, 2000);
    }, []);
    return (
        <div id='error-page'>
            <h1>{message}</h1>
        </div>
    );
}

export default UnderConstruction;