import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './Design.module.css';

import LowFidelity from '../../../assets/TheNook_LFW.png';

function Design(props)
{
    const mainColor = props.mainColor;

    return (
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor}}>
            <div className={styles.designContainer}>
                <h1>Design & Ideate</h1>
                <h3>Low Fidelity Wireframe Sketches</h3>
                <p>Inspired by other Animal Crossing wikipedia pages or related websites, I jumped straight to low wireframe sketches to start forming an idea for the website's layout.</p>
                <div className={styles.designImage}>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <div className={styles.designImage}>
                            <img src={LowFidelity} alt="Low Fidelity Wireframes" />
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Design;