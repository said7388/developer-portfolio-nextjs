import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import codings from '../../assets/lottie/coding.json';
import { ThemeContext } from '../../contexts/theme-context';
import { aboutData } from '../../data/about-data';
import styles from '../../styles/about.module.css';
import AnimationLottie from '../Animation';


function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.about} id="about">
                <div className={styles.lineStyling}>
                    <div className={styles.styleCircle} style={{ backgroundColor: theme.primary }}></div>
                    <div className={styles.styleCircle} style={{ backgroundColor: theme.primary }}></div>
                    <div className={styles.styleLine} style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className={styles.aboutBody}>
                    <div className={styles.aboutDescription}>
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                    </div>
                    <div className={styles.aboutAnimation}>
                        <AnimationLottie animationPath={codings} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
