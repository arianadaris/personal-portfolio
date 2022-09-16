import React from 'react';

import Header from '../components/Header/Header';
import Intro from '../components/Projects/PersonalWebsiteV2/Intro';
import Empathize from '../components/Projects/PersonalWebsiteV2/Empathize';
import Design from '../components/Projects/PersonalWebsiteV2/Design';
import Prototype from '../components/Projects/PersonalWebsiteV2/Prototype';
import Reflection from '../components/Projects/PersonalWebsiteV2/Reflection';
import Footer from '../components/Footer/Footer';

function PersonalWebsiteV2()
{
    const mainColor = '#FF708D';
    const accentColor = '#FFF0F3';

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

export default PersonalWebsiteV2;