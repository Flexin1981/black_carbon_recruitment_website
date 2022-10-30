import React from 'react';
import './hollow_button.css'

const HollowButton = ({text}: {text: string}) => {
    return (
        <div className={'hollow_button'}>
            <p>{text}</p>
        </div>
    )
};

export default HollowButton;