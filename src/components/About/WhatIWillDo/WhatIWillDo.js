import React from 'react';

import styles from './WhatIWillDo.module.css';

import EmailButton from '../../EmailButton';

import MyGoal from '../../../assets/Background_MyGoal.png';
import SoftDevCircle from '../../../assets/Element_SoftwareDev_Pink.png';
import Image from '../../../assets/Personal_Image2.png';

function WhatIWillDo()
{
    return (
        <div className={`${styles.desktopContainer} ${'whatIWillDo'}`}>
            <div className={styles.introBackground}>
                <img id={styles.introImage} src={MyGoal} alt="Goal Section Background - 'My Goal'" />
                <h1 id={styles.section}>What I Will Do</h1>
            </div>
            <h2 id={styles.getter}>I strive to create a beautiful, inclusive world through compassion and empathy.</h2>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        With every project I develop, it is my highest priority to ensure the product is a unique, personal reflection of the person, business or mission behind it. I ensure both <span className={styles.bold}>product owners and product users are heard, understood, and acknowledged.</span> Through compassion and empathy, I aspire to create experiences that all people can enjoy.
                    </p>
                    <p>
                        If you are interested in creating a product with similiar goals, feel free to send me an email or connect with me on social media!
                    </p>
                    <div className={styles.buttonWrapper}>
                        <EmailButton color="pink" />
                </div>
                </div>
                <div className={styles.image}>
                    <img id={styles.softdevCircle} src={SoftDevCircle} alt="Software Developer" />
                    <img id={styles.image} src={Image} alt="Ariana Daris" />
                </div>
            </div>
        </div>
    );
}

export default WhatIWillDo;