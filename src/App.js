import Navigation from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Project from './components/project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
