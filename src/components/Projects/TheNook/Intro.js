import React from 'react';

import styles from './Intro.module.css';

import ProjectImage from '../../../assets/TheNook.png';

function Intro(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.introSection}>
                <div className={styles.introContent}>
                    <h1 id={styles.number}>04</h1>
                    <a href="http://thenook.arianadaris.com/" target="_blank" rel="noreferrer"><h1 id={styles.title}>The Nook</h1></a>
                    <h3>A website about Animal Crossing New Horizons using REST API calls.</h3>
                    <a href="http://thenook.arianadaris.com/" target="_blank" rel="noreferrer"><img src={ProjectImage} alt="The Nook" /></a>
                </div>
            </div>
            <div className={`${styles.overview} ${'slide'}`}>
                <h1>Overview</h1>
                <h3>A tribute website to Animal Crossing New Horizons that displays information from REST API calls.</h3>
                <div className={styles.overviewItems}>
                    <div className={styles.item}>
                        <h1>Role</h1>
                        <h3>Developer & Designer</h3>
                    </div>
                    <div className={styles.item}>
                        <h1>Team</h1>
                        <h3>Solo</h3>
                    </div>
                    <div className={styles.item}>
                        <h1>Duration</h1>
                        <h3>2 Weeks</h3>
                    </div>
                    <div className={styles.item}>
                        <h1>Tools</h1>
                        <h3>React, VS Code, Figma</h3>
                    </div>
                </div>
                <div className={styles.challenge}>
                    <h1>Challenge</h1>
                    <h3>HMW create a solution that gets data from external APIs about Animal Crossing New Horizons?</h3>
                </div>
            </div>

        </div>
    );
}

export default Intro;