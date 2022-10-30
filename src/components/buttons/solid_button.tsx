import React from 'react';
import './solid_button.css'

const SolidButton = ({text}: {text: string}) => {
    return (
        <div className={'solid_button'}>
            <p>{text}</p>
        </div>
    )
};

export default SolidButton;