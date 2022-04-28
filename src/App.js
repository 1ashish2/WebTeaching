import logo from './logo.svg';
import './style.css';
import Navbar  from './component/Navbar';
import About  from './component/About';
import Home from './component/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';
import IbCurriculum from './component/IbCurriculum';
import IcgseProgram from './component/IcgseProgram';
import PWA from './PWA';

function App() {
  return (
    <>
    <div className='nav-container'>
    <Navbar />
    </div> 
     <div className='about-container'>   
       <Routes>
       <Route exact path="/" element={ <Home />} />
       <Route exact path="/pwa" element={ <PWA />} />
         <Route exact path="about/:id" element={ <About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="ibcurriculum" element={<IbCurriculum />} />
          <Route exact path="igcse" element={ <IcgseProgram />} />
       </Routes>
     
     </div>
     <div >
     <Footer />
       </div>
    
    </>
 )
}

export default App;
