import React from 'react';

import Header from '../components/Header/Header';
import Intro from '../components/Projects/PersonalWebsiteV1/Intro';
import Design from '../components/Projects/PersonalWebsiteV1/Design';
import Prototype from '../components/Projects/PersonalWebsiteV1/Prototype';
import Reflection from '../components/Projects/PersonalWebsiteV1/Reflection';
import Footer from '../components/Footer/Footer';

function PersonalWebsiteV1()
{
    const mainColor = '#FF708D';
    const accentColor = '#FFF0F3';

    return(
        <div>
            <Header color={mainColor} />
            <Intro mainColor={mainColor} accentColor={accentColor}/>
            <Design mainColor={mainColor}/>
            <Prototype mainColor={mainColor} accentColor={accentColor}/>
            <Reflection mainColor={mainColor} accentColor={accentColor}/>
            <Footer mainColor={mainColor} accentColor={accentColor} />
        </div>
    );
}

export default PersonalWebsiteV1;