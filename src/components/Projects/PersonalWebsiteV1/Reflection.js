import React from 'react';

import styles from './Reflection.module.css';

function Reflection(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;
    
    return (
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.reflectionContainer}>
                <h1>Reflection & Next Steps</h1>
                <h3>Personal Reflection</h3>
                <p>Looking back at this project, I've learned that moodboarding and low-fidelity wireframe sketches truly lay a foundation for a front-end project. Developing designs on Figma made learning React easier as I was less worried about creating a design while learning about a new library. In the future, I plan to spend more time developing wireframes and prototypes to make coding a functional website a faster process.</p>
                <h3>What Comes Next</h3>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>1. </span>Web Responsiveness</h4>
                        <p>I'm looking forward to learning more about making websites responsive.</p>
                    </div>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>2. </span>SSL Certification</h4>
                        <p>Developing this website made me interested in web security, and I'm excited to learn more.</p>
                    </div>
                </div>
                <a id={styles.githubBtn} href="https://github.com/arianadaris/react-personal-website" target="_blank" rel="noreferrer">View On GitHub</a>
            </div>
            <div className={styles.buttons}>
                <a id={styles.proj1} href="/work/personal-website-v2">
                <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-left-short" data-width="32"></span>
                    <h3>05 Personal Website V2</h3>
                </a>
                <a id={styles.proj1} href="/work/personal-portfolio">
                    <h3>01 Personal Portfolio</h3>
                    <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-right-short" data-width="32"></span>
                </a>
            </div>
        </div>
    );
}

export default Reflection;