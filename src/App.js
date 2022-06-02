import './App.css';
import { useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import scrollreveal from 'scrollreveal';

import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 1250,
      reset: false,
      opacity: 1
    });
    sr.reveal(
      `
        .homeIntro,
        .homeAbout,
        .aboutIntro,
        .whatIDo,
        .whatIWillDo,
        .education,
        .skills,
        .card,
        .contactHuman,
        .contactIntro,
        .contactButtons,
        .workIntro,
        .whatIHaveDone`,
      {
        opacity: 0,
        interval: 300
      }
    );
  }, []);

  return (
    <BrowserRouter>
        <div className="App">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} r/>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
