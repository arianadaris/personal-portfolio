import React from 'react';
import MediaQuery from 'react-responsive';

import Mobile_MyWork from '../../../assets/Mobile_My_Work.png';

import Cards from '../../Cards/Card';

import styles from './Work.module.css';

function Work()
{
    return (
        <div>
            <MediaQuery minWidth={415}>
                <div id={styles.work} className={`${styles.desktopContainer} ${'homeWork'}`}>
                    <div className={styles.cardContainer}>
                        <Cards num="6"/>
                    </div>
                    <a className={styles.workButton} href="/work">Click here to see more of my work!</a>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={415}>
                <div id={styles.work} className={styles.mobileContainer}>
                    <div id="introBackground">
                        <img src={Mobile_MyWork} alt="Developer" />
                    </div>
                    <h1>Check out my work!</h1>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span className="iconify" data-icon="emojione:desktop-computer" data-width="64" data-height="64"></span>
                            </div>
                            <h3>Personal Portfolio</h3>
                            <p>The behind the scenes of how I designed my Internet home.</p>
                            <a href="https://github.com/arianadaris/react-personal-website-v2" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span className="iconify" data-icon="fxemoji:golfer" data-width="64" data-height="64"></span>
                            </div>
                            <h3>Golf Raffle Website</h3>
                            <p>A raffle ticket website for a golfball drop event.</p>
                            <a href="/" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span className="iconify" data-icon="icon-park:planet" data-width="64" data-height="64"></span>
                            </div>
                            <h3>The Planets Project</h3>
                            <p>A website with information and images about planets using REST API calls.</p>
                            <a href="/" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span className="iconify" data-icon="clarity:block-solid" data-width="64" data-height="64"></span>
                            </div>
                            <h3>Palette Recreation</h3>
                            <p>A recreation of a Minecraft block palette generator website.</p>
                            <a href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span className="iconify" data-icon="emojione:laptop-computer" data-width="64" data-height="64"></span>
                            </div>
                            <h3>Personal Website V2</h3>
                            <p>My second attempt at creating a personal portfolio website using ReactJS.</p>
                            <a href="https://github.com/arianadaris/react-personal-website-v2" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span className="iconify" data-icon="emojione-v1:old-personal-computer" data-width="64" data-height="64"></span>
                            </div>
                            <h3>Personal Website V1</h3>
                            <p>My first attempt at learning about ReactJS and web design.</p>
                            <a href="https://github.com/arianadaris/react-personal-website" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Work;
