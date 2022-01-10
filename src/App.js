import Header from './components/Header'
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Wordpress from './components/Wordpress';
import FullStack from './components/FullStack';
import Contributions from './components/Contributions';

function App() {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Navbar />
      
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects/wordpress' element={<Wordpress />} />
            <Route path='/projects/fullstack' element={<FullStack />} />
            <Route path='/projects/contributions' element={<Contributions />} />
          </Routes>
        
      </div>
    </div>
  );
}

export default App;