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
                <p>These goals helped me streamline my design process and gave me the opportunity to work more with Figma and its Prototype feature.</p>
            </div>
        </div>
    )
}

export default Empathize;