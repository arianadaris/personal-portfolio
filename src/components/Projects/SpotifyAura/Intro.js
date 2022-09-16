import React from 'react';

import styles from './Intro.module.css';

import ProjectImage from '../../../assets/SpotifyAura.png';

function Intro(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.introSection}>
                <div className={styles.introContent}>
                    <h1 id={styles.number}>02</h1>
                    <h1 id={styles.title}>Spotify Aura</h1>
                    <h3>A website that generates a colorful aura based on your recent listening.</h3>
                    <img src={ProjectImage} alt="Personal Portfolio" />
                </div>
            </div>
            <div className={`${styles.overview} ${'slide'}`}>
                <h1>Overview</h1>
                <h3>A website that generates a colorful aura about your mood based on what you've recently listened to.</h3>
                <h4 style={{fontSize: '0.75rem', fontWeight: 'normal'}}>* Heavily inspired by the Audio Aura feature in Spotify's Wrapped marketing campaign in 2021. I take no credit for the concept.</h4>
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
                    <h3>HMW create a solution that generates a colorful aura based on the user's recently-listened-to songs?</h3>
                </div>
            </div>

        </div>
    );
}

export default Intro;