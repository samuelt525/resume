import './App.css';
import Hero from './pages/Hero'
import Header from './components/Header'
import About from './pages/About'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
