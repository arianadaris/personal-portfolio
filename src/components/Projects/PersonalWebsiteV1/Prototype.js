import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './Prototype.module.css';

import MediumFidelity from '../../../assets/PersonalWebsiteV1_MFW_Home.png';
import MobileMediumFidelity from '../../../assets/PersonalWebsiteV1_MFW_Work.png';

function Prototype(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.prototypeContainer}>
                <h1>Prototype & Test</h1>
                <h3>Medium Fidelity Wireframes</h3>
                <p>Completing my lo-fi sketches, I was ready to design a medium wireframe I could use to effectively test navigation and task completion. I performed testing at this stage to guage what features should be emphasized, relocated and removed.</p>
                <div className={styles.medium}>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <img id={styles.desktop} src={MediumFidelity} alt="Medium Fidelity Wireframe" />
                    </Zoom>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <img id={styles.mobile} src={MobileMediumFidelity} alt="Mobile Medium Fidelity Wireframe" />
                    </Zoom>
                </div>
                <div className={`${styles.high} ${'slide'}`}>
                    <h3>High Fidelity Wireframe</h3>
                    <p>After finishing some medium fidelity wireframes, I created a high-fidelity wireframe which I used to test different colors and typography. This step in my process allowed me to experiment more with Figma and vector grahpics.</p>
                    <a id={styles.prototypeBtn} href="https://www.figma.com/file/wf5JJbMhWzOggwJAkrOr6G/Personal-Website-V1?node-id=0%3A1" target="_blank" rel="noreferrer">View Final Prototype</a>
                </div>
                
            </div>
        </div>
    );
}

export default Prototype;