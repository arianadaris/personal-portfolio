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
                <p>I read several articles on auras, audio auras, and Spotify's aura feature before diving into this project to get a better understanding of how auras work and why Spotify created an aura feature for their 2021 Wrapped campaign.</p>
                <h3>Goals</h3>
                <p>During my research, I created a list of goals I wanted to accomplish when creating a spin-off of the aura feature.</p>
                <ul>
                    <li>Make it clearer what each color represents</li>
                    <li>Find a way to associate a song with a color</li>
                    <li>Create an aura based off of songs a user listened to in the last few days</li>
                    <li>Add animations to draw attention to the aura</li>
                </ul>
                <p>When interacting with Spotify's aura as a user, I felt as though the aura was plain to look at, and didn't fully understand how the colors were associated with the moods I was identified with. Therefore, a priority during this project was to make it clearer how songs reflect moods and how colors are related to moods.</p>
            </div>
        </div>
    )
}

export default Empathize;