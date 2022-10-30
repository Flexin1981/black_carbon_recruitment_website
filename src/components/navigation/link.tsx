import React from 'react';
import './link.css'

const NavigationLink = ({text, link}: {text: string, link: string}) => {
    return (
        <a className={'link'} href={link}>{text}</a>
    )
};

export default NavigationLink;