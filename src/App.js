import Header from './components/Header'
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Navbar />
        <main className='portfolio-view'>
          <LandingPage />
        </main>
      </div>
    </div>
  );
}

export default App;