import React from 'react';

import styles from './ProjectCards.module.css';

import Cards from '../Cards/Card';

function ProjectCards()
{
    return(
        <div>
            <div className={styles.desktopContainer}>
                <div className={`${styles.introBackground} ${'workIntro'}`}>
                    <h2>My Work</h2>
                    <h3>Here are some of my favorite projects!</h3>
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