import './App.css';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import scrollreveal from 'scrollreveal';

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Error from './pages/Error';
import PersonalPortfolio from './pages/PersonalPortfolio';
import SpotifyAura from './pages/SpotifyAura';
import BlockPalettes from './pages/BlockPalettes';
import TheNook from './pages/TheNook';
import PersonalWebsiteV2 from './pages/PersonalWebsiteV2';
import PersonalWebsiteV1 from './pages/PersonalWebsiteV1';

function loadSkills(el)
{
  var bars = document.getElementsByTagName('div');
  console.log(bars.length);
  for(var i = 0; i < bars.length; i++)
  {
    for(var j = 0; j < bars[i].classList.length; j++)
    {
      if(bars[i].classList[j].includes('Skills_fill'))
      {
        bars[i].classList.add("isLoaded");
        break;
      }
    }
  }
}

function App() {
  useEffect(() => {

    // Scroll Animations
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
        .homeText,
        .homeAbout,
        .contactHuman,
        .contactIntro,
        .contactButtons,
        .slide
        `,
      {
        opacity: 0,
        interval: 300,
        delay: 0
      }
    );
    sr.reveal(
      `
        .skills
      `,
      {
        opacity: 0,
        interval: 300,
        afterReveal: loadSkills
      }
    )
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/work/personal-portfolio" element={<PersonalPortfolio />} />
        <Route exact path="/work/spotify-aura" element={<SpotifyAura />} />
        <Route exact path="/work/block-palettes-recreation" element={<BlockPalettes />} />
        <Route exact path="/work/the-nook" element={<TheNook />} /> 
        <Route exact path="/work/personal-website-v2" element={<PersonalWebsiteV2 />} />
        <Route exact path="/work/personal-website-v1" element={<PersonalWebsiteV1 />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
