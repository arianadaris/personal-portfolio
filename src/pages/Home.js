import {React} from 'react';
import MediaQuery from 'react-responsive';

import Header from '../components/Header/Header';
import Intro from '../components/Home/Intro';
import Work from '../components/Home/Work';
import About from '../components/Home/About';
import Footer from '../components/Footer/Footer';

function Home()
{
    return (
        <div>
            <MediaQuery minWidth={415}>
                <div>
                    <Header color='#5685FF' />
                    <Intro />
                    <Work />
                    <About />
                    <Footer mainColor="#5685FF" accentColor="#F5F8FF" />
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={415}>
                <div>
                    <Intro />
                    <Work />
                </div>
            </MediaQuery>
        </div>
    );
}

export default Home;