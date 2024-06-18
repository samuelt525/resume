import './App.css';
import Hero from './pages/Hero'
import Header from './components/Header';
import About from   './pages/About'
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ProjectExperience from './pages/ProjectExperience';
import { CiMail } from "react-icons/ci";
import { Link } from 'react-scroll';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <ProjectExperience/>
      <Testimonials />
      <Contact/>
      <Footer/>
      <Link to="contact" smooth={true} className="fixed bottom-[10%] right-[10%] border border-gray-400 bg-white rounded-full py-4 px-4 items center hover:bg-blue-300 transition duration-300">
        <CiMail size="32"></CiMail>
      </Link>
    </div>
  ); 
}

export default App; 