import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './Design.module.css';

import About from '../../../assets/BlockPalettes_About.png';
import OriginalAbout from '../../../assets/BlockPalettes_OriginalAbout.png';

function Design(props)
{
    const mainColor = props.mainColor;

    return (
        <div className={`${styles.desktopContainer} ${'slide'}`} style={{'--mainColor': mainColor}}>
            <div className={styles.designContainer}>
                <h1>Design & Ideate</h1>
                <h3>Design Decisions</h3>
                <p>As I worked through the recreation, I felt inspired to redesign certain elements to learn about how changing various CSS properties affected the design. For example, I redesigned the About page to give some information about the project. The first image below is the redesign, and the second image is the original About page for comparison.</p>
                <div className={styles.imageWrapper}>
                    <p>My Redesign</p>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <div className={styles.designImage}>
                            <img src={About} alt="The About Page I Designed for the Recreation" />
                        </div>
                    </Zoom>
                    <p>The Original Design</p>
                    <Zoom overlayBgColorStart="rgba(0, 0, 0, 0.25)" overlayBgColorEnd="rgba(0, 0, 0, 0.15)">
                        <div className={styles.designImage}>
                        <img src={OriginalAbout} alt="The About Page on the Original Block Palettes Website" />
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Design;