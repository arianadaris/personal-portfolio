import React from 'react';

import Header from '../components/Header/Header';
import Intro from '../components/Projects/SpotifyAura/Intro';
import Empathize from '../components/Projects/SpotifyAura/Empathize';
import Design from '../components/Projects/SpotifyAura/Design';
import Prototype from '../components/Projects/SpotifyAura/Prototype';
import Reflection from '../components/Projects/SpotifyAura/Reflection';
import Footer from '../components/Footer/Footer';
function SpotifyAura()
{
    const mainColor = '#5685FF';
    const accentColor = '#F5F8FF';

    return(
        <div>
            <Header color={mainColor} />
            <Intro mainColor={mainColor} accentColor={accentColor}/>
            <Empathize mainColor={mainColor}/>
            <Design mainColor={mainColor}/>
            <Prototype mainColor={mainColor} accentColor={accentColor}/>
            <Reflection mainColor={mainColor} accentColor={accentColor}/>
            <Footer mainColor={mainColor} accentColor={accentColor} />
        </div>
    );
}

export default SpotifyAura;