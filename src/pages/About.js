import React from 'react';

import Header from '../components/Header/Header'
import Intro from '../components/About/Intro';
import Goal from '../components/About/Goal';
import Skills from '../components/About/Skills';
import Work from '../components/About/Work';
import Other from '../components/About/Other';
import Footer from '../components/Footer/Footer';

function About()
{
    return (
        <div>
            <Header color='#FF708D' />
            <Intro />
            <Goal />
            <Skills />
            <Work />
            <Other />
            <Footer mainColor='#FF708D' accentColor='#FFF0F3' />
        </div>
    );
}

export default About;