import React from 'react';
import MediaQuery from 'react-responsive';

import Developer from '../../../assets/Human_Developer.png';
import Develop from '../../../assets/Background_Develop.svg';

import Socials from '../../Socials/Socials';

import Mobile_Develop from '../../../assets/Mobile_Develop.png';

import styles from './Intro.module.css';

function Intro()
{
    return (
        <div>
            <MediaQuery minWidth={415}>
                <div id="intro" className={`${styles.desktopContainer} ${'homeIntro'}`}>
                    <div className={styles.introBackground}>
                        <img src={Develop} alt="Intro Section Background - 'Develop'" />
                    </div>
                    <div className={styles.introSlide}>
                        <div className={styles.text}>
                            <h6>I am a...</h6>
                            <h1>Developer</h1>
                            <p>I am a <span className={styles.bold}>full-stack software developer</span> with a passion for finding beautiful solutions for not-so-beautiful problems.</p>
                            <div className={styles.sliders}>
                                <div className={`${styles.slider} ${styles.active}`} />
                                <div className={styles.slider} />
                                <div className={styles.slider} />
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img id={styles.developer} src={Developer} alt="Developer Illustration" />
                            <Socials />
                        </div>
                       
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={415}>
                <div className={styles.mobileContainer}>
                    <img id={styles.developer} src={Developer} alt="Developer Illustration" />
                    <div id={styles.introBackground}>
                        <img src={Mobile_Develop} alt="Developer" />
                    </div>
                    <div className={styles.introText}>
                        <h1>Hi, I'm Ariana!</h1>
                        <p>I am a <span className={styles.bold}>full-stack software developer</span> with a passion for creating beautiful solutions for not-so-beautiful problems.</p>
                        <Socials />
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Intro;