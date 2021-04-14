import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='portfolio-footer'>
            <div className='footer-desc'> 
               © Maryam Abdel-Karim 2021 | Front-end Web Developper | maryam.abdelkarim7@gmail.com
            </div>
            <div className='footer-links'>
              <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/maryam-abdel-karim-9548771bb' className='linkedin-link'> <i class="fab fa-linkedin"></i></a>
              <a target="_blank" rel="noreferrer" href="mailto:maryam.abdelkarim7@gmail.com?body=My custom mail body" className='linkedin-link'><i class="far fa-envelope"></i></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/MaryamAK7" className='linkedin-link'> <i class="fab fa-github"></i></a>
              
             
            </div>
        </div>
    )
}
