import React, {useEffect} from 'react'
import Button from "react-bootstrap/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css'
import pic from './MaryamAK.jpeg'
export default function AboutPage() {
 useEffect(()=>{
   AOS.init({duration: 1000});
 },[])
    return (
        <div className='AboutPage' id='about' >
            <div className='abtPage-content'> 
            <img src={pic} alt='my pic' className='my-pic'data-aos="fade-right"/>
            <div className='abtPage-text' 
            data-aos="fade-right"
            >
            <h2 className='abt-header'>About me</h2>
            <p className='bio'>
            Energetic Front-End Web Developer, with previous experience as a physicist, teacher and a relentless drive for continuous improvement in all of my endeavors. I have experience using HTML, CSS, Javascript, React, Bootstrap, AntDesign, Figma and Git/GitHub. I've just started diving into Python, SQL and UX designing. I also have quite a bit of older experience coding in C/C++ and Java. My specialities include quickly learning new skills and programming languages, problem solving and responsive design principles. I'm still enthusiastically grabbing onto any other programming languages and frameworks. 
            </p>
            <div> 
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/maryam-abdel-karim-9548771bb' className='social-link'> <i class="fab fa-linkedin"></i></a>
              <a target="_blank" rel="noreferrer" href="mailto:maryam.abdelkarim7@gmail.com?body=My custom mail body" className='social-link'><i class="far fa-envelope"></i></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/MaryamAK7" className='social-link'><i class="fab fa-github"></i></a>
            </div>
            <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1Emg2fhacylQFvlS-MQBJPsmSMPDKAwlp/view?usp=sharing'> 
            <Button variant="dark" type="submit" className="btn-resume">
              Resume
            </Button>
            </a>
            </div>
            </div>
        </div>
    )
}
