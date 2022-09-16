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
                <p>While I never completed this project, I would love to recreate the recreation as I feel I have more experience with front-end development and databases. There are a variety of things that I would do differently now and changes I'd make to the redesign.</p>
                <h3>What Comes Next</h3>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>1. </span>Do It Again</h4>
                        <p>I look forward to restarting this project from scratch and seeing how my designing and programming has changed over a year.</p>
                    </div>
                    <div className={styles.step}>
                        <h4><span className={styles.bold}>2. </span>Functionality</h4>
                        <p>I look forward to creating a fully-functional re-recreation that allows users to create and share their own block palettes.</p>
                    </div>
                </div>
                <a id={styles.githubBtn} href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer">View On GitHub</a>
            </div>
            <div className={styles.buttons}>
                <a id={styles.proj1} href="/work/spotify-aura">
                    <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-left-short" data-width="32"></span>
                    <h3>02 Spotify Aura</h3>
                </a>
                <a id={styles.proj1} href="/work/the-nook">
                    <h3>04 The Nook</h3>
                    <span className={`${'iconify'} ${styles.iconify}`} data-icon="bi:arrow-right-short" data-width="32"></span>
                </a>
            </div>
        </div>
    );
}

export default Reflection;