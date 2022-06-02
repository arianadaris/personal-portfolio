import {React, Component} from 'react';
import MediaQuery from 'react-responsive';

import Intro from '../components/Home/Intro/Intro';
import Work from '../components/Home/Work/Work';
import About from '../components/Home/About/About';

class Home extends Component
{
    render()
    {
        return (
            <div>
                <MediaQuery minWidth={415}>
                    <div>
                        <Intro />
                        <Work />
                        <About />
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
    
}

export default Home;