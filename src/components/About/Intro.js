import React from 'react';

import styles from './Intro.module.css';

import Socials from '../Socials/Socials';

function Intro()
{
    console.log(window.innerWidth);
    const symbol = "0x1F44B";
    return (
        <div className={`${styles.desktopContainer} ${'slide'}`}>
            <div className={styles.helloSection}>
                <div className={styles.helloBackground} />
                <div className={styles.helloText}>
                    <h1 className="homeText">Hi, I'm Ariana! <div className={styles.shake}><span className={styles.emoji} role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span></div></h1>
                    <h3>I'm so glad you're here!</h3>
                    <img src={require('../../assets/Personal_Logo2.png')} alt="Me" />
                    <Socials color="#FF708D"/>
                </div>
            </div>
            <div className={`${styles.overview} ${'slide'}`}>
                <h1>Overview</h1>
                <h3>I am an <span className={styles.bold}>impact-driven</span> Full-Stack Developer and UX/UI designer who loves creating beautiful solutions to not-so-beautiful problems.</h3>
                <p>I’m a senior at Arizona State University studying <span className={styles.bold}>Computer Science with a concentration in Software Engineering.</span> I am graduating in December of 2022 with my Bachelor’s degree, and anticipate earning a Master’s degree in Computer Science the following December.</p>
                <p>Outside of school, I enjoy learning about <span className={styles.bold}>front-end development and UX/UI design.</span> I’m a people person, and I love that I can use code to get to know people and create something beautiful with them! With front-end development, it’s a gratifying feeling seeing how a few lines of code can make the biggest difference for someone else.</p>
            </div>
        </div>
    );
}

export default Intro;