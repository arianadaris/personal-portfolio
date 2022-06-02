import React from 'react';
import { useEffect } from 'react';

import styles from './About.module.css';

import EmailButton from '../../EmailButton';

import Image from '../../../assets/Personal_Image.png';
import SoftDevCircle from '../../../assets/Element_SoftwareDev.png';

function About()
{
    const symbol = "0x1F495";

    return (
        <div className={`${styles.container} ${'aboutIntro'}`} id={styles.about}>
            <div className={styles.text}>
                <h1>Hi! I'm Ariana,</h1>
                <h3>and I'm in love <span className={styles.emoji} role="img" aria-label="Two Hearts">{String.fromCodePoint(symbol)}</span> with web development!</h3>
                <p>
                    My name is Ariana Daris Rajewski, but Ariana Daris was more fun for branding! I’m a senior graduating from Arizona State University with a <span className={styles.bold}>Bachelor’s degree in Computer Science, concentrated in Software Engineering.</span>
                </p>
                <p>
                    I’ve worked with a startup company to develop a mobile application promoting environmental mindfulness.  I’ve also taught programming and game development to 70 kids in the Scottsdale area!
                </p>
                <p>
                    When I’m not in front of a computer, you can find me <span className={styles.bold}>working out at the gym, playing video games, or hanging out with friends!</span> Feel free to send me an email or follow me on social media!
                </p>
                <div className={styles.buttonWrapper}>
                    <EmailButton color="orange" />
                </div>
            </div>
            <div className={styles.image}>
                <img id={styles.softdevCircle} src={SoftDevCircle} alt="Software Developer" />
                <img src={Image} alt="Ariana Daris" />
            </div>
        </div>
    );
}

export default About;