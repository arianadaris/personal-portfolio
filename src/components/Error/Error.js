import React from 'react';

import styles from './Error.module.css';

import Personal from '../../assets/Personal_Logo.png';

function Error()
{
    return(
        <div className={styles.desktopContainer}>
            <div className={styles.errorContainer}>
                <div classNmae={styles.image}>
                    <img src={Personal} alt="Logo" />
                </div>
                <h1>Coming Soon!</h1>
                <h2>Looks like this page is still in development!</h2>
                <a href="/">Back to Home</a>
            </div>
        </div>
    );
}

export default Error;