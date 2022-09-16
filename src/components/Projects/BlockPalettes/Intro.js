import React from 'react';

import styles from './Intro.module.css';

import ProjectImage from '../../../assets/BlockPalettes.png';

function Intro(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.introSection}>
                <div className={styles.introContent}>
                    <h1 id={styles.number}>03</h1>
                    <h1 id={styles.title}>Block Palettes</h1>
                    <h3>A recreation of a Minecraft palette generator website.</h3>
                    <img src={ProjectImage} alt="Block Palletes" />
                </div>
            </div>
            <div className={`${styles.overview} ${'slide'}`}>
                <h1>Overview</h1>
                <h3>A recreation project of a Minecraft palette generator website to test my skills with HTML/CSS and Javascript.</h3>
                <div className={styles.overviewItems}>
                    <div className={styles.item}>
                        <h1>Role</h1>
                        <h3>Developer</h3>
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
                        <h3>Javascript, NodeJS, MongoDB</h3>
                    </div>
                </div>
                <div className={styles.challenge}>
                    <h1>Challenge</h1>
                    <h3>HMW create a solution that challenges my CSS skills but is also functional?</h3>
                </div>
            </div>

        </div>
    );
}

export default Intro;