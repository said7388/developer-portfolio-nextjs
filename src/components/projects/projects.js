import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import Link from '../link';
import SingleProject from './project-card/project-card';

function Projects() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
            {projectsData.length > 0 && (
                <div className={styles.projects} id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.projectsHeader}>
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className={styles.projectsBody}>
                        <div className={styles.projectsBodyContainer}>
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className={styles.projectsViewAll}>
                                <Link href="/projects">
                                    <button className="text-[#15202B] bg-[#8B98A5] hover:bg-[#1D9BF0] transition-colors">
                                        View All
                                        <HiArrowRight className="text-[#8B98A5] bg-[#15202B] w-[40px] h-[40px] p-2 text-base rounded-[50%] cursor-pointer transition-colors" />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
