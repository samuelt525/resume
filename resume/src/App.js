import './App.css';
import Hero from './pages/Hero'
import Header from './components/Header';
import About from   './pages/About'
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <Testimonials />
      <Contact/> 
    </div>
  );

  
}

export default App; 