import React from 'react';
import MediaQuery from 'react-responsive';
import {animateScroll as scroll} from 'react-scroll';

import Socials from '../Socials/Socials';

import BackToTopArrow from '../../assets/Component_BackToTop.png';

import styles from './Footer.module.css';

function Footer()
{
    const toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
    }
    return (
        <div>
            <MediaQuery minWidth={415}>
                <div className={styles.container}>
                    <h1>© 2022 Ariana Rajewski</h1>
                    <div className={styles.rightSide}>
                        <Socials />
                        <div className={styles.button} onClick={toTop}>
                            <img src={BackToTopArrow} alt="Back to Top" />
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={415}>

            </MediaQuery>
        </div>
    );
}

export default Footer;