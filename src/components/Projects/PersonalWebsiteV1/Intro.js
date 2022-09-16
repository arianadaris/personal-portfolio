import React from 'react';

import styles from './Intro.module.css';

import ProjectImage from '../../../assets/PersonalWebsiteV1.png';

function Intro(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.introSection}>
                <div className={styles.introContent}>
                    <h1 id={styles.number}>06</h1>
                    <h1 id={styles.title}>Personal Website V1</h1>
                    <h3>My first time using React to build a portfolio website.</h3>
                    <img src={ProjectImage} alt="Personal Portfolio" />
                </div>
            </div>
            <div className={`${styles.overview} ${'slide'}`}>
                <h1>Overview</h1>
                <h3>My first attempt at using React to create a portfolio website showing who I am as a software developer.</h3>
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
                    <h3>HMW create a solution that uses React to present myself as a software developer?</h3>
                </div>
            </div>

        </div>
    );
}

export default Intro;