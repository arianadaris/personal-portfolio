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
                <p>This project emphasized the importance of developing low, medium, and high fidelity wireframes, and how they are crucial to user testing. Additionally, creating a final prototype streamlined my development process. I noticed I spent less time fiddling with design decisions during development, thus decreasing my time spent in development overall.</p>
                <h3>What Comes Next</h3>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>1. </span>Launch</h4>
                        <p>I anticipate launching this website officially with a custom domain in mid June!</p>
                    </div>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>2. </span>SEO Optimization</h4>
                        <p>I look forward into researching search engine optimization so my website can be found easily.</p>
                    </div>
                </div>
                <a id={styles.githubBtn} href="https://github.com/arianadaris/personal-portfolio" target="_blank" rel="noreferrer">View On GitHub</a>
            </div>
            <div className={styles.buttons}>
                <a id={styles.proj1} href="/work/personal-website-v1">
                <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-left-short" data-width="32"></span>
                    <h3>06 Personal Website V1</h3>
                </a>
                <a id={styles.proj1} href="/work/spotify-aura">
                    <h3>02 Spotify Aura</h3>
                    <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-right-short" data-width="32"></span>
                </a>
            </div>
        </div>
    );
}

export default Reflection;