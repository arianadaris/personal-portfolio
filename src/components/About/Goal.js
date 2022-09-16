import React from 'react';

import styles from './Goal.module.css';

import {ReactComponent as Star} from '../../assets/Star.svg';
import EmailButton from '../EmailButton';

function Goal()
{
    return(
        <div className={styles.desktopContainer}>
            <div className={`${styles.goal} ${'slide'}`}>
                <h1>My Goal</h1>
                <h3>I strive to create a beautiful, inclusive world through compassion and empathy.</h3>
                <Star id={styles.star} fill="#FFBECB" />
            </div>
            <div className={`${styles.textWrapper} ${'slide'}`}>
                <div className={styles.text}>
                    <p>With every project I develop, it is my highest priority to ensure the product is a unique, personal reflection of the person, business or mission behind it. I ensure both <span className={styles.bold}>product owners and product users are heard, understood, and acknowledged.</span> Through compassion and empathy, I aspire to create experiences that all people can enjoy.</p>
                    <p>If you are interested in creating a product with similiar goals, feel free to send me an email or connect with me on social media!</p>
                    <div className={styles.email}>
                        <EmailButton color="pink"/>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={require('../../assets/Personal_Image2.png')} alt="Me" />
                    <Star id={styles.star} fill="#FFBECB" />
                </div>
            </div>
        </div>
    );
}

export default Goal;