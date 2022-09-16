import React from 'react';

import Header from '../components/Header/Header';
import ErrorSection from '../components/Error/Error';
import Footer from '../components/Footer/Footer';

function Error()
{
    return(
        <div>
            <Header color="5685FF"/>
            <ErrorSection />
            <Footer mainColor="#5685FF" accentColor="#F5F8FF"/>
        </div>
    );
}

export default Error;