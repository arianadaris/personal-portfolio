import React from 'react';

import styles from './Socials.module.css';

function Socials()
{
    return (
        <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer"><span className={`${styles.iconify} ${"iconify"}`} data-icon="akar-icons:linkedin-box-fill" data-width="64" data-height="64"></span></a>
            <a href="https://www.instagram.com/arianadaris/" target="_blank" rel="noreferrer"><span className={`${styles.iconify} ${"iconify"}`} data-icon="akar-icons:instagram-fill" data-width="64" data-height="64"></span></a>
            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer"><span className={`${styles.iconify} ${"iconify"}`} data-icon="akar-icons:github-fill" data-width="64" data-height="64"></span></a>
        </div>
    );
}

export default Socials;