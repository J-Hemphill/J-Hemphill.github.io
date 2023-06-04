import './FormStyles.css';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const form = useRef('');

  const sendEmail = (e) => {
    e.preventDefault();
    setUserName('');
    setUserEmail('');
    setUserSubject('');
    setUserMessage('');
  
    emailjs.sendForm('service_n5ya5wg', 'template_cx78kms', form.current, 'vLMnzsuLEMcl2pNjP')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name='user_name' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <label>Your Email</label>
            <input type='email' name='user_email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
            <label>Subject</label>
            <input type='text' name='subject' value={userSubject} onChange={(e) => setUserSubject(e.target.value)}></input>
            <label>Message</label>
            <textarea name='message' rows='6' placeholder='Type your message here...' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default Form;