import React from 'react';

import styles from './Skills.module.css';
import styled, { keyframes } from 'styled-components';

function Skills()
{
    return(
        <div className={styles.desktopContainer}>
            <div className={styles.skills}>
                <h1 id={styles.title} className={'skills'}>Skills & Interests</h1>
                <div className={`${styles.skillContainer} ${'slide'}`}>
                    <div className={styles.languages}>
                        <h1>Languages</h1>
                        <div className={styles.row}>
                            <h2>HTML5</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f100} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>CSS3</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f100} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>Javascript ES6</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f95} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>Figma</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f85} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>Java</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f85} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>Python</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f80} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>C++</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f75} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                        <div className={styles.row}>
                            <h2>AdobeXD</h2>
                            <Bar className={styles.bar}>
                                <div className={styles.fill} id={styles.f60} />
                                <div className={styles.outline} />
                            </Bar>
                        </div>
                    </div>
                    <div className={styles.otherContainer}>
                        <div className={styles.frameworks}>
                            <span className={`${styles.iconify} ${'iconify'}`} data-icon="akar-icons:react-fill" data-width="64"></span>
                            <h1>Frameworks & Libraries</h1>
                            <h3>ReactJS, NodeJS, React Native</h3>
                        </div>
                        <div className={styles.software}>
                            <span className={`${styles.iconify} ${'iconify'}`} data-icon="bxl:visual-studio" data-width="64"></span>
                            <h1>Software</h1>
                            <h3>Figma, AdobeXD, MS Visual Studio and Visual Studio Code</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

const fill = keyframes`
    0%
    {
        width: 0;
    }
    100%
    {
        width: var(--w);
    }
`


const Bar = styled.div`
    :root
    {
        --w: 3rem;
    }

    #f100
    {
        --w: 12.25rem;
    }

    #f95
    {
        --w: 11.5rem;
    }

    #f85
    {
        --w: 10.75rem;
    }

    #f80
    { 
        --w: 10rem;
    }

    #f75
    {
        --w: 9.5rem;
    }

    #f60
    {
        --w: 8rem;
    }

    .isLoaded
    {
        animation: ${fill} 2s 1 forwards;
    }
`
