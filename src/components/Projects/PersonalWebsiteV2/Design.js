import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './Design.module.css';

import LowFidelity from '../../../assets/PersonalWebsiteV2_LFW.png';

function Design(props)
{
    const mainColor = props.mainColor;

    return (
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor}}>
            <div className={styles.designContainer}>
                <h1>Design & Ideate</h1>
                <h3>Low Fidelity Wireframe Sketches</h3>
                <p>After performing a review and competitive analysis, I created lo-fi wireframes to start mapping out design decisions.</p>
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