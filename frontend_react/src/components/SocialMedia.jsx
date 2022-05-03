import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href ="https://www.linkedin.com/in/trungdotoan/"><BsLinkedin /></a>
            
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaFacebookF />
        </div>
       
    </div>
  )
}

export default SocialMedia;