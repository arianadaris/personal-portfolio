import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './Prototype.module.css';

import MediumHome from '../../../assets/TheNook_MFW_Home.png';
import MediumEncyclopedia from '../../../assets/TheNook_MFW_Encyclopedia.png';
import High from '../../../assets/TheNook_HFW.png';

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
                        <img id={styles.desktop} src={MediumHome} alt="Home Medium Fidelity Wireframe" />
                    </Zoom>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <img id={styles.desktop} src={MediumEncyclopedia} alt="Encyclopedia Medium Fidelity Wireframe" />
                    </Zoom>
                </div>
                <div className={`${styles.high} ${'slide'}`}>
                    <h3>High Fidelity Wireframe & Prototype</h3>
                    <p>After completing my medium-fidelity wireframes, I created a high-fidelity prototype which I used for final user testing. This process involved several color and typography changes, as well as a variety of CTA button options.</p>
                    <div className={styles.medium}>
                        <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                            <img id={styles.desktop} src={High} alt="Home Medium Fidelity Wireframe" />
                        </Zoom>
                    </div>
                    <a id={styles.prototypeBtn} href="https://www.figma.com/file/EidEBC7pvg0nDUnJze5NJb/The-Nook?node-id=0%3A1" target="_blank" rel="noreferrer">View Final Prototype</a>
                    <h1>Programming & Launch</h1>
                    <h3>Development</h3>
                    <p>Developing this project required me to learn more about RESTful APIs and how to manipulate calls and returned data to achieve the expected outcome. I also was able to work with search and filtering functions on the Encyclopedia and Villager pages.</p>
                    <a id={styles.prototypeBtn} href="http://thenook.arianadaris.com/" target="_blank" rel="noreferrer">View Website</a>
                </div>
            </div>
        </div>
    );
}

export default Prototype;