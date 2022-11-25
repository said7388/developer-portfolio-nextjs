import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import education from '../../assets/lottie/education.json';
import { ThemeContext } from '../../contexts/ThemeContext';
import { educationData } from '../../data/educationData';
import styles from '../../styles/education.module.css';
import AnimationLottie from '../Animation';
import EducationCard from './EducationCard';


function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.education} id="resume">
                <div className={styles.educationBody}>
                    <div className={styles.educationImage}>
                        <AnimationLottie animationPath={education} />
                    </div>
                    <div className={styles.educationDescription}>
                        <h1 style={{ color: theme.primary }}>Education</h1>
                        {educationData.map(edu => (
                            <EducationCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education
