import React from 'react';

import Header from '../components/Header/Header';
import ProjectCards from '../components/Work/ProjectCards';
import Footer from '../components/Footer/Footer';

function Work()
{
    return(
        <div>
            <Header color='#5685FF' />
            <ProjectCards />
            <Footer mainColor="#5685FF" accentColor="#F5F8FF" />
        </div>
    );
}

export default Work;