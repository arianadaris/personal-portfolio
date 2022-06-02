import React from 'react';

import styles from './WhatIDo.module.css';

import Knowledge from '../../../assets/Background_MyKnowledge.png';

function WhatIDo()
{
    return(
        <div className={`${styles.desktopContainer} ${'whatIDo'}`}>
            <div className={styles.introBackground}>
                <img id={styles.introImage} src={Knowledge} alt="Education Section Background - 'Knowledge'" />
                <h1 id={styles.section}>What I Do</h1>
            </div>
            <div className={`${styles.education} ${'education'}`}>
                <h2 id={styles.title}>My Education</h2>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <span className={`${styles.iconify} ${"iconify"}`}data-icon="maki:college" data-height="64" data-width="64"></span>
                        <div className={styles.cardText}>
                            <h1>Bachelor of Computer Science</h1>
                            <h2>Arizona State University</h2>
                            <h3>December 2022</h3>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <span className={`${styles.iconify} ${"iconify"}`}data-icon="maki:college" data-height="64" data-width="64"></span>
                        <div className={styles.cardText}>
                            <h1>Associates Degree in Arts (AA)</h1>
                            <h2>Rio Salado Community College</h2>
                            <h3>May 2019</h3>
                        </div>
                    </div>
                </div>
                <div className={`${styles.skills} ${'skills'}`}>
                    <h2 id={styles.title}>My Skills</h2>
                    <div className={styles.skillContainer}>
                        <div className={styles.languages}>
                            <h1>Languages</h1>
                            <div className={styles.languageContainer}>
                                <h2>HTML</h2>
                                <div className={styles.bar} id={styles.onehundred} ></div>
                                <h2>CSS3</h2>
                                <div className={styles.bar} id={styles.onehundred} ></div>
                                <h2>Javascript ES6</h2>
                                <div className={styles.bar} id={styles.ninety} ></div>
                                <h2>Figma</h2>
                                <div className={styles.bar} id={styles.eighty} ></div>
                                <h2>Java</h2>
                                <div className={styles.bar} id={styles.eighty} ></div>
                                <h2>Python</h2>
                                <div className={styles.bar} id={styles.seventyfive} ></div>
                                <h2>C++</h2>
                                <div className={styles.bar} id={styles.seventy} ></div>
                                <h2>AdobeXD</h2>
                                <div className={styles.bar} id={styles.fiftyfive} ></div>
                            </div>
                        </div>
                        <div className={styles.other}>
                            <div className={styles.frameworks}>
                                <span className={`${styles.iconify} ${"iconify"}`} data-icon="akar-icons:react-fill" data-width="64"></span>
                                <h2>Frameworks & Databases</h2>
                                <p>ReactJS, NodeJS, MongoDB, MySQL</p>
                            </div>
                            <div className={styles.software}>
                                <span className={`${styles.iconify} ${"iconify"}`} data-icon="akar-icons:vscode-fill" data-width="64"></span>
                                <h2>Software</h2>
                                <p>Figma, AdobeXD, MS Visual Studio & Visual Studio Code</p>
                            </div>
                        </div>
                    </div>
                    <a href="/work">Check out how I use these skills!</a>
                </div>
            </div>
            
        </div>
    );
}

export default WhatIDo;