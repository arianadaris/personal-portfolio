import React from 'react';

import styles from './Contact.module.css';

import HumanDev from '../../assets/Human_Developer.png';
import GetInTouch from '../../assets/Background_GetInTouch.png';

function Contact()
{
    return(
        <div className={styles.desktopContainer}>
            <div className={`${styles.human} ${'contactHuman'}`}>
                <img id={styles.image} src={HumanDev} alt="Contact Section Background - 'Let's Get in Touch'" />
            </div>
            <div className={`${styles.introBackground} ${'contactIntro'}`}>
                <img src={GetInTouch} alt="Contact Section Background - 'Let's Get in Touch'" />
                <h1>I'd love to work with you!</h1>
                <h3>Let's create something great.</h3>
            </div>
            <div className={`${styles.buttons} ${'contactButtons'}`}>
                <a href="mailto:arianarajewski@gmail.com">Send me an email!</a>
                <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">Connect on LinkedIn!</a>
            </div>
        </div>
    );
}

export default Contact;