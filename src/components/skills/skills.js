import Image from 'next/image';
import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../contexts/theme-context';
import { skillsData } from '../../data/skills-data';
import styles from "../../styles/skills.module.css";
import { skillsImage } from '../../utils/skills-image';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 12px ${theme.primary}`
    }

    return (
        <div className={styles.skills} style={{ backgroundColor: theme.secondary }}>
            <div className={styles.skillsHeader}>
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skillScroll}>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className={styles.skillBox} key={id} style={skillBoxStyle}>
                                <Image src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
