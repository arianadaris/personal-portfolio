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
                <p>With this project, I was able to learn about APIs and how to parse and manipulate the JSON files REST APIs return. I feel more comfortable with APIs and handling the data I receive from other services to complete my project. I loved that I was able to find a way to combine my love for coding with my love for the Animal Crossing game series!</p>
                <h3>What Comes Next</h3>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>1. </span>Web Security</h4>
                        <p>I anticipate learning more about SSL certificates to make my website fully secure!</p>
                    </div>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>2. </span>Responsiveness</h4>
                        <p>I look forward to designing and developing mobile-friendly and tablet-friendly versions of this website.</p>
                    </div>
                </div>
                <a id={styles.githubBtn} href="https://github.com/arianadaris/the-nook" target="_blank" rel="noreferrer">View On GitHub</a>
            </div>
            <div className={styles.buttons}>
                <a id={styles.proj1} href="/work/block-palettes-recreation">
                <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-left-short" data-width="32"></span>
                    <h3>03 Block Palettes Recreation</h3>
                </a>
                <a id={styles.proj1} href="/work/personal-website-v2">
                    <h3>05 Personal Website V2</h3>
                    <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-right-short" data-width="32"></span>
                </a>
            </div>
        </div>
    );
}

export default Reflection;