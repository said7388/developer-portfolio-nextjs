import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import experience from '../../assets/lottie/development.json';
import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';
import styles from '../../styles/experience.module.css';
import AnimationLottie from '../Animation';
import ExperienceCard from './ExperienceCard';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.experience} id="experience">
                <div className={styles.experienceBody}>
                    <div className={styles.experienceImage}>
                        <AnimationLottie animationPath={experience} />
                    </div>
                    <div className={styles.experienceDescription}>
                        <h1 style={{ color: theme.primary }}>Experience</h1>
                        {experienceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
