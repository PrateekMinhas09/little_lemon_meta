import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonial';
import About from './components/About'
function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
      
      <Hero/>

      <Highlights/>
      <Testimonial/>
      <About/>
    </div>
    </>
  );
}

export default App;
