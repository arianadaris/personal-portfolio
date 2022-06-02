import React from 'react';

import styles from './ProjectCards.module.css';

import CheckOutWork from '../../assets/Background_CheckOutWork.png';

import Cards from '../Cards/Card';

function ProjectCards()
{
    return(
        <div>
            <div className={styles.desktopContainer}>
                <div className={`${styles.introBackground} ${'workIntro'}`}>
                    <img id={styles.introImage} src={CheckOutWork} alt="Work Section Background - 'Check Out My Work'" />
                    <h1>My Work</h1>
                    <h2>Here are some of my favorite projects!</h2>
                </div>
                <div className={styles.cardContainer}>
                    <Cards />
                </div>
                <a className={styles.gitHubButton} href="https://github.com/arianadaris" target="_blank" rel="noreferrer">Check me out on GitHub!</a>
            </div>
        </div>
    );
}

export default ProjectCards;