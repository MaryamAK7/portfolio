import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { animateScroll as scroll } from "react-scroll";

import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import WorkPage from './Pages/WorkPage/WorkPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  const [top, setTop] = useState('notDisplayed')

  const changeBackground = () => {
      if(window.scrollY >= 500){
          setTop('display')
      } else {
          setTop('notDisplayed')
      }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <div className="App">
        <NavBar />
        <Header />
          <WorkPage />
          <AboutPage />
          <ContactPage />
        <Footer />
        <button className={top}  onClick={()=>{
                    scroll.scrollToTop()
                }}>
        <i class="fas fa-arrow-up"></i>
        </button> 
    </div>
  );
}

export default App;
