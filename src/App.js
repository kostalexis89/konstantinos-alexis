import Header from './components/Header'
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom'
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Navbar />
        <main className='portfolio-view'>
          {/* <LandingPage /> */}
          <Routes>
          <Route path='/' element={<LandingPage />} />
            <Route path='/bio' element={<Bio />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;