import './AboutContentStyles.css';

import React from 'react';
import { Link } from 'react-router-dom';

import MEAN1 from '../assets/MEAN1.png';
import MERN2 from '../assets/MERN2.webp';


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>
                I am a Node JS Back-End Developer who uses the MEAN Stack and MERN Stack. I love to create
                the server, schema structures, APIs, the connection to the database
                , as well as working with databases.
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={MEAN1} className='img' alt=''/>
                </div>
            </div>

            <div className='img-container'>
                <div className='img-stack bottom'>
                    <img src={MERN2} className='img' alt=''/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent;