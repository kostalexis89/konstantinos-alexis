import Header from './components/Header'
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Navbar />
        <main className='portfolio-view'>
          Portfolio view
        </main>
      </div>
    </div>
  );
}

export default App;