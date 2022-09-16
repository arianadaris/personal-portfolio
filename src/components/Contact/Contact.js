import React from 'react';

import styles from './Contact.module.css';

import Personal from '../../assets/Personal_Logo.png';
import Socials from '../Socials/Socials';

function Contact()
{
    return(
        <div className={styles.desktopContainer}>
            <div className={styles.contactContainer}>
                <div className={`${styles.human} ${'contactHuman'}`}>
                    <img id={styles.image} src={Personal} alt="Contact Section Background - 'Let's Get in Touch'" />
                    <Socials color="#5685FF" />
                </div>
                <div className={`${styles.introBackground} ${'contactIntro'}`}>
                    <h1 id={styles.letsGetInTouch}>Let's Get In Touch!</h1>
                    <h2>I'd love to work with you!</h2>
                    <h3>Let's create something great.</h3>
                </div>
                <div className={`${styles.buttons} ${'contactButtons'}`}>
                    <a href="mailto:arianarajewski@gmail.com">Send me an email!</a>
                    <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">Connect on LinkedIn!</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;