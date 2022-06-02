import React from 'react';
import MediaQuery from 'react-responsive';

import styles from './Header.module.css';
import { useLocation } from 'react-router';

function Header()
{
    var location = useLocation();
    const headerColor = location.pathname === '/about' ? { color: '#FF708D' } : { color: '#5685FF' }
    
    const aboutUnderline = location.pathname === '/about' ? { textDecoration: 'underline' } : { textDecoration: 'none' }; 
    const workUnderline = location.pathname === '/work' ? { textDecoration: 'underline' } : { textDecoration: 'none' }; 
    const contactUnderline = location.pathname === '/contact' ? { textDecoration: 'underline' } : { textDecoration: 'none' }; 
    
    return ( 
        <div>
            <MediaQuery minWidth={415}>
                <div className={`${styles.desktopContainer} ${'header'}`}>
                    <a href="/"><h1 className={styles.logo} style={headerColor}>Ariana Daris</h1></a>
                    <div className={styles.navigation}>
                        <ul>
                            <a href="/about" className={styles.link} style={aboutUnderline}>About</a>
                            <a href="/work" className={styles.link} style={workUnderline}>Work</a>
                            <a href="/contact" className={styles.link} style={contactUnderline}>Contact</a>
                        </ul>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={415}>
                <div className={styles.mobileContainer}>
                    <a href="/"><h1 id="logo">Ariana Daris</h1></a>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Header;