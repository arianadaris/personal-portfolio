import React from 'react';
import MediaQuery from 'react-responsive';

import Cards from '../Cards/Card';

import {ReactComponent as Star} from '../../assets/Star.svg';

import styles from './Work.module.css';

function Work()
{
    return (
        <div>
            {/* Desktop Render */}
            <MediaQuery minWidth={415}>
                <div id={styles.work} className={`${styles.desktopContainer}`}>
                    <div className={styles.cardContainer}>
                        <Cards num="6"/>
                    </div>
                    <a className={styles.workButton} href="/work">Click here to see more of my work!</a>
                </div>
            </MediaQuery>
            {/* Mobile Render */}
            <MediaQuery maxWidth={415}>
                <div id={styles.work} className={styles.mobileContainer}>
                    <h1 id={styles.title}>My Work</h1>
                    <div className={styles.cardContainer}>
                        <a href="https://github.com/arianadaris/personal-portfolio" target="_blank" rel="noreferrer"><div className={styles.card}>
                            <div className={styles.cardImage}>
                                <div className={styles.image} style={{backgroundColor: '#F5F8FF'}}>
                                    <img src={require('../../assets/Card_1_PersonalPortfolio.png')} alt="Personal Portfolio" />
                                </div>
                                <Star fill='#F5F8FF' id={styles.right}/>
                            </div>
                            <div className={styles.cardText}>
                                <h1>Personal Portfolio</h1>
                                <h3>The behind-the-scenes of how I created my Internet home.</h3>
                            </div>
                        </div></a>
                        <a href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer"><div className={styles.card}>
                            <div className={styles.cardImage}>
                                <div className={styles.image} style={{backgroundColor: '#FFF2E9'}}>
                                    <img src={require('../../assets/Card_3_BlockPalettes.png')} alt="Block Palettes" />
                                    <Star fill='#FFF2E9' id={styles.left}/>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <h1>Block Palettes</h1>
                                <h3>A recreation of a Minecraft block palette generator website.</h3>
                            </div>
                        </div></a>
                        <a href="https://github.com/arianadaris/spotify-aura" target="_blank" rel="noreferrer"><div className={styles.card}>
                            <div className={styles.cardImage}>
                                <div className={styles.image} style={{backgroundColor: '#FFF0F3'}}>
                                    <img src={require('../../assets/Card_2_SpotifyAura.png')} alt="Spotify Aura Website" />
                                    <Star fill='#FFF0F3' id={styles.right}/>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <h1>Spotify Aura</h1>
                                <h3>Create an aura based on your recent listening on Spotify.</h3>
                            </div>
                        </div></a>
                        <a href="http://thenook.arianadaris.com/" target="_blank" rel="noreferrer"><div className={styles.card}>
                            <div className={styles.cardImage}>
                                <div className={styles.image} style={{backgroundColor: '#EDFFE9'}}>
                                    <img src={require('../../assets/Card_4_TheNook.png')} alt="The Nook" />
                                    <Star fill='#EDFFE9' id={styles.left}/>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <h1>The Nook</h1>
                                <h3>A website about Animal Crossing New Horizons using REST API calls.</h3>
                            </div>
                        </div></a>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Work;