import Navigation from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import Socials from './components/socials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Socials />
    </div>
  );
}

export default App;
