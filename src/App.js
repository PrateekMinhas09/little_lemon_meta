import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Highlights from './components/Highlights';
function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
      
      <Hero/>

      <Highlights/>
    </div>
    </>
  );
}

export default App;
