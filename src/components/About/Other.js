import React from 'react';

import styles from './Other.module.css';

import {ReactComponent as Star} from '../../assets/Star.svg';

import Friends from '../../assets/About_Other_Friends.png';
import Beach from '../../assets/About_Other_Beach.png';
import Boyfriend from '../../assets/About_Other_Boyfriend.png';
import Bird from '../../assets/About_Other_Bird.png';

function Other()
{
    const workOut = "0x1F4AA";
    const videoGames = "0x1F47E";
    const microphone = "0x1F3A4";

    return(
        <div className={`${styles.desktopContainer} ${'slide'}`}>
            <div className={styles.otherContainer}>
                <div className={styles.otherWrapper}>
                    <h1 id={styles.title}>Other Things I Enjoy</h1>
                    <h3>When I'm not in front of a computer, I love working out at the gym, playing video games with friends, and making music!</h3>
                    <ul>
                        <li><span className={styles.bold}>Working Out</span> <span className={styles.emoji} role="img" aria-label="Wave">{String.fromCodePoint(workOut)}</span> I work out with my friends 4-5 times a week. The gym has become a happy place where I can destress and focus on my mental and physical health!</li>
                        <li><span className={styles.bold}>Video Games</span> <span className={styles.emoji} role="img" aria-label="Wave">{String.fromCodePoint(videoGames)}</span> I love playing video games with my friends! I grew up playing Minecraft and Animal Crossing, two games which have a special place in my heart. Currently, I’ve been playing Minecraft, League of Legends, and Stardew Valley.</li>
                        <li><span className={styles.bold}>Making Music</span> <span className={styles.emoji} role="img" aria-label="Wave">{String.fromCodePoint(microphone)}</span> I’ve always loved the piano - I’ve been playing since I was 5! I played violin in the top orchestra and sang soprano in the top choirs in high school. I enjoy writing songs with piano accompaniment, and have written an album before.</li>
                    </ul>
                    <div className={styles.images}>
                        <Star id={styles.leftStar} fill="#FFBECB" />
                        <img src={Friends} alt="My friends!" />
                        <img src={Beach} alt="I love spending time at the beach." />
                        <img src={Boyfriend} alt="My favorite person is my boyfriend Cooper!" />
                        <img src={Bird} alt="My best bird friend, Maui" />
                        <Star id={styles.rightStar} fill="#FFBECB" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Other;