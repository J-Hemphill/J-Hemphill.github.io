import './FooterStyles.css';

import React from 'react';

import { GiChessPawn } from "react-icons/gi";
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='email'>
                    <h4>
                    <FaGoogle size={20} style={{ color: 'white', marginRight: '2rem' }} />
                    jeff.d4.hemphill@gmail.com
                    </h4>
                    <h4>
                    <FaGithub size={20} style={{ color: 'white', marginRight: '2rem' }} />
                    https://github.com/J-Hemphill                    
                    </h4>
                    <h4>
                    <FaLinkedin size={20} style={{ color: 'white', marginRight: '2rem' }} />
                    https://www.linkedin.com/in/jeffry-hemphill-9646b1231/                    
                    </h4>
                    <h4>
                    <GiChessPawn size={20} style={{ color: 'white', marginRight: '2rem' }} />
                    https://www.chess.com/member/jeffry-lynn                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>
                    I love to play and study chess, and I have a strong 
                    passion for back-end development and data 
                    engineering. My Tech Stacks are: 
                    MEAN Stack and MERN Stack.
                </p>
            </div>
        </div>
    </div>
  )
};

export default Footer;