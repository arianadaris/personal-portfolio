import React from 'react';

import styles from './Empathize.module.css';

function Empathize(props)
{
    const mainColor = props.mainColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor}}>
            <div className={styles.empathizeContainer}>
                <h1>Empathize</h1>
                <h3>Research</h3>
                <p>I performed a review of my previous portfolio page to gain a better understanding of how I want to display myself as a developer.</p>
                <h3>Goals</h3>
                <p>During my review, I created a list of research goals which streamlined my research plan and process.</p>
                <ul>
                    <li>Improve interaction and loading performance</li>
                    <li>Prioritize screen-size responsiveness</li>
                    <li>Develop individual pages that explain specific projects</li>
                    <li>Add more interactive animations</li>
                    <li>Develop an easy way to update projects and pages</li>
                </ul>
                <h3>Competitive Analysis</h3>
                <p>Following my review, I researched a variety of competitive portfolios to evaluate trends in their strengths and weaknesses. The insights gained were key to developing a high-quality portfolio while building upon identified strengths.</p>
                <div className={`${styles.analysis} ${'slide'}`}>
                    <h1>Portfolios</h1>
                    <div className={styles.gridWrapper}>
                        <div className={styles.col}>
                            <h2>Software Developer</h2>
                            <h3>Strengths</h3>
                            <ul>
                                <li>Engaging with animations</li>
                                <li>Skills section</li>
                                <li>Downloadable resume</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h2>Front-end Developer</h2>
                            <h3>Strengths</h3>
                            <ul>
                                <li>Engaging with animations</li>
                                <li>Skills section</li>
                                <li>Testimonials</li>
                                <li>Project filtering</li>
                                <li>Familiar structure</li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h2>UX/UI Designer</h2>
                            <h3>Strengths</h3>
                            <ul>
                                <li>Great project descriptions (case studies)</li>
                                <li>Feels more personal</li>
                                <li>Familiar Structure</li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h3>Weaknesses</h3>
                            <ul>
                                <li>Lack of white space</li>
                                <li>Lack of project descriptions</li>
                                <li>Slow performance</li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h3>Weaknesses</h3>
                            <ul>
                                <li>Navigation bar is not always available to user</li>
                                <li>Lack of project descriptions</li>
                                <li>Slow performance</li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h3>Weaknesses</h3>
                            <ul>
                                <li>Navigation bar is not always available to user</li>
                                <li>Lack of animations</li>
                                <li>No contact section</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>As a user, I spent more time interacting with portfolios with animations. I enjoyed looking through portfolios with a familiar structure, but I had a negative experience when elements were placed in abnormal positions and I had to spend time to find them.</p>
            </div>
        </div>
    )
}

export default Empathize;