import React from 'react';
import MediaQuery from 'react-responsive';

import Socials from '../Socials/Socials';

import {ReactComponent as BackToTopArrow} from '../../assets/Component_BackToTop.svg';

import styles from './Footer.module.css';

function Footer(props)
{
    const toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
    };

    const mainColor = props.mainColor;
    const accentColor = props.accentColor;

    return (
        <div>
            <MediaQuery minWidth={415}>
                <div className={styles.container}>
                    <h1 style={{'--mainColor': mainColor}}>© 2022 Ariana Rajewski</h1>
                    <div className={styles.rightSide}>
                        <Socials color={mainColor} />
                        <div className={styles.button} style={{'--mainColor': mainColor, '--accentColor': accentColor}} onClick={toTop}>
                            <BackToTopArrow fill={mainColor} />
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