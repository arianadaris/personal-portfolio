import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './Design.module.css';

import Moodboard from '../../../assets/PersonalWebsiteV1_Moodboard.png';
import LowFidelityHome from '../../../assets/PersonalWebsiteV1_LFW_Home.png';
import LowFidelityWork from '../../../assets/PersonalWebsiteV1_LFW_Work.png';

function Design(props)
{
    const mainColor = props.mainColor;

    return (
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor}}>
            <div className={styles.designContainer}>
                <h1>Design & Ideate</h1>
                <h3>Moodboarding</h3>
                <p>When starting this project, I felt disorganized and unsure of how I wanted to create a website based on who I am personally. I went straight to moodboarding, drawing inspiration from Pinterest, Dribbble and my own personal photo gallery to get an idea of what direction to go.</p>
                <div className={styles.designImage}>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <div className={styles.moodboardImage}>
                            <img src={Moodboard} alt="Personal Website V1 Moodboard" />
                        </div>
                    </Zoom>
                </div>
                <h3>Low Fidelity Wireframe Sketches</h3>
                <p>After organizing inspiration and colors on the moodboard, I started with low-fidelity wireframe sketches so I could start mapping out the layout of the website..</p>
                <div className={styles.designImage}>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <div className={styles.designImage}>
                            <img src={LowFidelityHome} alt="Low Fidelity Wireframes" />
                        </div>
                    </Zoom>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <div className={styles.designImage}>
                            <img src={LowFidelityWork} alt="Low Fidelity Wireframes" />
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Design;