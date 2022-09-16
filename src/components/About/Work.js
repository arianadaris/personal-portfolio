import React from 'react';

import styles from './Work.module.css';

function Work()
{
    return(
        <div className={styles.desktopContainer}>
            <h1 id={styles.title} className={'slide'}>Work Experience</h1>
            <div className={`${styles.workContainer} ${'slide'}`}>
            <div className={styles.job}>
                    <h1>Full-stack Developer - <span className={styles.bold}>Etherea</span></h1>
                    <ul>
                        <li>Work with product managers and graphic designers to finalize and implement designs</li>
                        <li>Collaborate with a team of 10 developers to create and test various application features using Git</li>
                        <li>Maintain product backlog, sprint backlog, sprint planning, and sprint retrospectives</li>
                    </ul>
                    <h3><span className={styles.pink}>Skills Improved:</span> Communication & Collaboration</h3>
                </div>
                <div className={styles.job}>
                    <h1>IT Consultant - <span className={styles.bold}>Arizona State University</span></h1>
                    <ul>
                        <li>Supported 70 people in the Fulton Center, providing leadership and support for various technical projects</li>
                        <li>Maintained a selection of databases, policies and profiles</li>
                        <li>Worked through hardware and software difficulties while maintaining thorough communication with clients</li>
                    </ul>
                    <h3><span className={styles.pink}>Skills Improved:</span> Collaboration & Time Management</h3>
                </div>
                <div className={styles.job}>
                    <h1>Coding Instructor - <span className={styles.bold}>Code Ninjas</span></h1>
                    <ul>
                        <li>Taught 75 kids about programming and game development in Javascript and C#</li>
                        <li>Explain fundamental coding concepts in an engaging way</li>
                        <li>Interact with a various age groups in person and online through Zoom</li>
                        <li>Encouraged out-of-the-box thinking and problem-solving techniques</li>
                    </ul>
                    <h3><span className={styles.pink}>Skills Improved:</span> Communication & Problem Solving</h3>
                </div>
            </div>
        </div>
    );
}

export default Work;