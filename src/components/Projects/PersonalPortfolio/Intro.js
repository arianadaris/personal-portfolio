import React from 'react';

import styles from './Intro.module.css';

import ProjectImage from '../../../assets/PersonalPortfolio.png';

function Intro(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.introSection}>
                <div className={styles.introContent}>
                    <h1 id={styles.number}>01</h1>
                    <h1 id={styles.title}>Personal Portfolio</h1>
                    <h3>The behind-the-scenes of how I designed my Internet home.</h3>
                    <img src={ProjectImage} alt="Personal Portfolio" />
                </div>
            </div>
            <div className={`${styles.overview} ${'slide'}`}>
                <h1>Overview</h1>
                <h3>A React portfolio website showcasing my skills and experience as a software developer and designer.</h3>
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
                        <h3>3 Weeks</h3>
                    </div>
                    <div className={styles.item}>
                        <h1>Tools</h1>
                        <h3>React, VS Code, Figma</h3>
                    </div>
                </div>
                <div className={styles.challenge}>
                    <h1>Challenge</h1>
                    <h3>HMW create a solution that showcases who I am in an engaging way?</h3>
                </div>
            </div>

        </div>
    );
}

export default Intro;