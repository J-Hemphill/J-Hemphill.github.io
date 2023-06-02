import './HeroImgStyles.css';

import React from 'react';

import IntroImg from '../assets/computer_science_art-3.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={ IntroImg } alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>Welcome! My name is, Jeffry Hemphill.</p>
            <h1> JavaScript Programmer</h1>
            <h1>(Node Js Developer)</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg