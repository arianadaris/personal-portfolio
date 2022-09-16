import React from 'react';

import styles from './Prototype.module.css';

function Prototype(props)
{
    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor, '--accentColor': accentColor}}>
            <div className={styles.prototypeContainer}>
                <h1>Prototype & Test</h1>
                <h3>Implementation</h3>
                <p>As I was working through creating the HTML and CSS for this project, I started asking various questions.</p>
                <ul>
                    <li>How can I create a base template for each webpage to avoid including the Header and Footer every time?</li>
                    <li>How do they store block palettes in a database?</li>
                    <li>How do I interact with a database, and what is REST?</li>
                    <li>How do I create dynamic palettes that generate based on data from the database?</li>
                </ul>
                <p>While these questions were not as HTML/CSS related, they prompted me to search Google for answers, and thus inspired me to create a NodeJS project with MongoDB.</p>
                <div className={`${styles.high} ${'slide'}`}>
                    <h3>Testing</h3>
                    <p>After creating a MongoDB database for this project, I proceeded to do testing while implementing full functionality in Javascript.</p>
                    <p>Some tests were programming based. I checked that I could interact with the database correctly and what various REST API calls would return. Additionally, since this was my first time connecting a database to a project, I wanted to ensure that the website was still performing quickly and as expected.</p>
                    <p>I also performed usability tests to check that elements looked and worked as a user would expect it would. I had various friends and family members interact with the website, and based on elements they clicked and pages they searched, I improved the locations of some elements and their visual appearance.</p>
                    <a id={styles.prototypeBtn} href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer">View GitHub</a>
                </div>
                
            </div>
        </div>
    );
}

export default Prototype;