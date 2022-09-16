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
                <p>I knew from the start that this project would test my skills in HTML and CSS especially based on the grid element on the Home page alone. At this time I was unfamiliar with using the display property, so this was a great challenge!</p>
                <h3>Goals</h3>
                <p>With this recreation, I set a few personal goals for myself.</p>
                <ul>
                    <li>Gain experience with various CSS properties, such as "display"</li>
                    <li>Create a comparable design to the existing website</li>
                    <li>Add minor functionality with Javascript</li>
                    <li>Learn about what NodeJS is and when/why/how you would use it</li>
                    <li>Implement full functionality using MongoDB to store and modify data</li>
                </ul>
                <p>I started this project in Visual Studio Code with a simple index.html, styles.css, and scripts.js setup. Eventually, this grew into a full-fledged NodeJS application.</p>
            </div>
        </div>
    )
}

export default Empathize;