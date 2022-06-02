import React from 'react';

import Intro from '../components/About/Intro/Intro';
import WhatIHaveDone from '../components/About/WhatIHaveDone/WhatIHaveDone'
import WhatIDo from '../components/About/WhatIDo/WhatIDo';
import WhatIWillDo from '../components/About/WhatIWillDo/WhatIWillDo';

function About()
{
    return (
        <div>
            <Intro />
            <WhatIHaveDone />
            <WhatIDo />
            <WhatIWillDo />
        </div>
    );
}

export default About;