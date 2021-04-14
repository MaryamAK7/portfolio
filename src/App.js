import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router ,Route  } from "react-router-dom";

import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import WorkPage from './Pages/WorkPage/WorkPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
          <WorkPage />
          <AboutPage />
          <ContactPage />
        <Footer />
    </div>
  );
}

export default App;
