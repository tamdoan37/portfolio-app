import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="site-header">
        <h1>Tam Doan Portfolio</h1>
      </header>

      <nav className="site-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* This will help to renders the current page based on the URL */}
      <main style={{ marginTop: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer" style={{ marginTop: '40px' }}>
        <address>Tam Doan • 5159 W Abraham Ln, Wausau, WI 54403 • (715) 235-4523
        </address>
        <p className="small mt-1" style={{ margin: '8px 0 0', color: 'white' }}>
          &copy; {new Date().getFullYear()} Tam Doan — All Rights Reserved
        </p>  
       </footer>
    </div>
  );
}

export default App;