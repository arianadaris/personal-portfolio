import React from 'react';

import GetToKnowMe from '../../../assets/Background_GetToKnowMe.png';

import styles from './Intro.module.css';

function Intro()
{
    const symbol = "0x1F44B";
    return (
        <div className={`${styles.desktopContainer} ${'aboutIntro'}`}>
            <div className={styles.introBackground}>
                <img id={styles.introImage} src={GetToKnowMe} alt="Intro Section Background - 'Get To Know Me'" />
            </div>
            <div className={styles.text}>
                <div className={styles.header}>
                    <h1>Hi, I'm Ariana! </h1>
                    <h2>I'm so glad you're here!<span className={styles.emoji} role="img" aria-label="Wave">{String.fromCodePoint(symbol)}</span></h2>
                    <div className={styles.content}>
                        <p>
                            I’m a senior at Arizona State University studying <span className={styles.bold}>Computer Science with a concentration in Software Engineering.</span> I am graduating in December of 2022 with my Bachelor’s degree, and anticipate earning a Master’s degree in Computer Science the following December.
                        </p>
                        <p>
                            My passion for computer science began when I was introduced to Java during my freshman year of college. At the time, I was majoring in Chemical Engineering, but I spent my time coding console-based chemistry calculators to get me through my science classes. I switched to Computer Science after my freshman year, and have loved it since!
                        </p>
                        <p>
                            Outside of school, I enjoy learning more about <span className={styles.bold}>front-end development and UX/UI design.</span> I’m a people person, and I love that I can use code to get to know people and create something beautiful with them! With front-end development, it’s a gratifying feeling seeing how a few lines of code can make the biggest difference for someone else.
                        </p>
                        <p>
                            I am <span className={styles.bold}>outgoing, curious, and determined</span> to create beautiful experiences that make all users feel at home.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;