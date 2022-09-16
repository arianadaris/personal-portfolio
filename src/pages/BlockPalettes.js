import React from 'react';

import Header from '../components/Header/Header';
import Intro from '../components/Projects/BlockPalettes/Intro';
import Empathize from '../components/Projects/BlockPalettes/Empathize';
import Design from '../components/Projects/BlockPalettes/Design';
import Prototype from '../components/Projects/BlockPalettes/Prototype';
import Reflection from '../components/Projects/BlockPalettes/Reflection';
import Footer from '../components/Footer/Footer';

function BlockPalettes()
{
    const mainColor = '#FF8B37';
    const accentColor = '#FFF2E9';

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

export default BlockPalettes;