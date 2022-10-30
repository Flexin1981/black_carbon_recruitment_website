import React from 'react'
import './hero_section.css'
import hero_image from '../../assets/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg'

export function HeroSection() {

    return (
        <div className={'hero_section'}>
            <img src={hero_image}/>
        </div>
    )

}