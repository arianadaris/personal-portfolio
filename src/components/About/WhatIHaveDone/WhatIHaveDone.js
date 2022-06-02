import React from 'react';

import styles from './WhatIHaveDone.module.css';

import Exp from '../../../assets/Background_Experience.png';

function WhatIHaveDone()
{
    return(
        <div className={`${styles.desktopContainer} ${'whatIHaveDone'}`}>
            <div className={styles.introBackground}>
                <img id={styles.introImage} src={Exp} alt="Experience Section Background - 'Experience'" />
                <h1>What I Have Done</h1>
            </div>
            <div className={styles.text}>
                <div className={styles.cardContainer}>
                    <div className={styles.work}>
                        <h2>Work Experience</h2>
                        <div className={styles.card}>
                            <h3>Coding Instructor - <span className={styles.bold}>Code Ninjas</span></h3>
                            <p>
                                I taught 75 kids in the Scottsdale area about programming and game development with Javascript and C#. I encouraged my students to think outside the box when completing games in the curriculum. I loved helping students bring their crazy coding ideas to life!
                            </p>
                            <p><span className={`${styles.bold} ${styles.orange}`}>Skills Improved:</span> <span className={styles.italic}>Communication & Problem-Solving</span></p>
                        </div>
                        <div className={styles.card}>
                            <h3>IT Consultant - <span className={styles.bold}>ASU</span></h3>
                            <p>
                                I worked with a startup company to develop a mobile application promoting social and environmental awareness. I designed and implemented settings features with user choice and freedom in mind.
                            </p>
                            <p><span className={`${styles.bold} ${styles.orange}`}>Skills Improved:</span> <span className={styles.italic}>Communication & Problem-Solving</span></p>
                        </div>
                    </div>
                    <div className={styles.projects}>
                    <h2>Project Experience</h2>
                        <div className={styles.card}>
                            <h3>Software Developer - <span className={styles.bold}>Etherea</span></h3>
                            <p>
                                I worked with a startup company to develop a mobile application promoting social and environmental awareness. I designed and implemented settings features with user choice and freedom in mind.
                            </p>
                            <p><span className={`${styles.bold} ${styles.orange}`}>Skills Improved:</span> <span className={styles.italic}>Communication & Time Management</span></p>
                        </div>
                        <div className={styles.card}>
                            <h3>Software Deverloper - <span className={styles.bold}>SC Surf</span></h3>
                            <p>
                                I designed and implemented the Golfball Drop Fundraiser event website. I developed low and high fidelity prototypes and presented designs to the client often to ensure satisfaction.
                            </p>
                            <p><span className={`${styles.bold} ${styles.orange}`}>Skills Improved:</span> <span className={styles.italic}>Communication & Collaboration</span></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default WhatIHaveDone;