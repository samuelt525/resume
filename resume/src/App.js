import './App.css';
import Hero from './pages/Hero'
import Header from './components/Header';
import About from   './pages/About'
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
