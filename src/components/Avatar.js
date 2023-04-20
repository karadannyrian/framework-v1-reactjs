import React from 'react';
import Image from 'react-bootstrap/Image';

function Avatar(props) {
    const { src, width, type } = props
    return (
        <div style={{ width: width || 120 }}>
            <Image src={src}
                roundedCircle={type === 'roundedCircle'}
                rounded={type === 'rounded'}
                thumbnail={type === 'thumbnail'}
                fluid />
        </div>
    );
}

export default Avatar;