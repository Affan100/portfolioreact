// import portfolioicon from './portfolioicon.png';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skill from './components/skill/Skill';
import { useState } from 'react';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    // <Router>
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Skill />
        <Contact />
      </div>
    </div>
    // </Router >
  )
}

export default App;
