import React from 'react';
import MediaQuery from 'react-responsive';

import styles from './Header.module.css';
import { useLocation } from 'react-router';
import { motion } from 'framer-motion';

function Header(props)
{
    var location = useLocation();
    var color = props.color;
    
    const aboutUnderline = location.pathname === '/about' ? { textDecoration: 'underline', '--mainColor': color } : { textDecoration: 'none', '--mainColor': color}; 
    const workUnderline = location.pathname === '/work' ? { textDecoration: 'underline', '--mainColor': color } : { textDecoration: 'none', '--mainColor': color }; 
    const contactUnderline = location.pathname === '/contact' ? { textDecoration: 'underline', '--mainColor': color } : { textDecoration: 'none', '--mainColor': color }; 
    
    return ( 
        <div>
            {/* Desktop Render */}
            <MediaQuery minWidth={415}>
                <div className={`${styles.desktopContainer} ${'header'}`}>
                    <div className={styles.logoContainer}>
                        <a href="/"><h1 className={styles.logo} style={{color: color}}>Ariana Daris</h1></a>
                    </div>
                    <div className={styles.navigation}>
                        <ul>
                            <a href="/about" className={styles.link} style={aboutUnderline}>About</a>
                            <a href="/work" className={styles.link} style={workUnderline}>Work</a>
                            <a href="/contact" className={styles.link} style={contactUnderline}>Contact</a>
                        </ul>
                    </div>
                </div>
            </MediaQuery>
            {/* Mobile Render */}
            <MediaQuery maxWidth={415}>

            </MediaQuery>
        </div>
    );
}

export default Header;