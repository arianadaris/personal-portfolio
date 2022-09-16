import React from 'react';

import Header from '../components/Header/Header';
import Intro from '../components/Projects/TheNook/Intro';
import Design from '../components/Projects/TheNook/Design';
import Prototype from '../components/Projects/TheNook/Prototype';
import Reflection from '../components/Projects/TheNook/Reflection';
import Footer from '../components/Footer/Footer';

function TheNook()
{
    const mainColor = '#FF8B37';
    const accentColor = '#FFF2E9';

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

export default TheNook;