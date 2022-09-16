import React from 'react';
import MediaQuery from 'react-responsive';

import Personal from '../../assets/Personal_Logo.png';

import Socials from '../Socials/Socials';

import styles from './Intro.module.css';

function Intro()
{
    const symbol = '0x1F44B';

    return (
        <div>
            {/* Desktop Render */}
            <MediaQuery minWidth={415}>
                <div id="intro" className={styles.desktopContainer}>
                    <div className={styles.introBackground}>
                        <h1 id={styles.develop}>Develop</h1>
                    </div>
                    <div className={`${styles.introSlide} ${'slide'}`}>
                        <div className={styles.text}>
                            <h6>I am a...</h6>
                            <h1>Developer</h1>
                            <p>I am a <span className={styles.bold}>full-stack software developer</span> with a passion for finding beautiful solutions for not-so-beautiful problems.</p>
                        </div>
                        <div className={`${styles.image} ${'slide'}`}>
                            <img id={styles.personal} src={Personal} alt="Personal" />
                            <Socials color="#5685FF" />
                        </div>
                       
                    </div>
                </div>
            </MediaQuery>
            {/* Mobile Render */}
            <MediaQuery maxWidth={415}>
                <div className={styles.mobileContainer}>
                    <div className={styles.background} />
                    <img id={styles.personal} src={Personal} alt="Personal" />
                    <div className={styles.text}>
                        <h1>Hi <span className={styles.emoji} role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span> I'm Ariana!</h1>
                        <h3>Full-stack Developer & Designer</h3>
                        <Socials color="#5685FF" />
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Intro;