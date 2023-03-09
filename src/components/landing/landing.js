import Image from 'next/image';
import React, { useContext } from 'react';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/theme-context';
import { headerData } from '../../data/header-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/landing.module.css';
import Link from '../link';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className={styles.landing} style={{
            backgroundColor: theme.quaternary
        }}>
            <div className={styles.landingContainer}>
                <div
                    className={styles.landingContainerLeft}
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className={styles.lclContent}>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.facebook && (
                            <a
                                href={socialsData.facebook}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaFacebook
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <Image
                    src={headerData.image}
                    alt=''
                    width={350}
                    height={350}
                    className={styles.landingImg}
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className={styles.landingContainerRight}
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className={styles.lcrContent}
                        style={{ color: theme.tertiary }}
                    >
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Backend Developer',
                                'Frontend Developer',
                                'Fullstack Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className={styles.typedHeader}
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className={styles.lcrButtonContainer}>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button
                                        className="sm:w-[180px] text-[#1D9BF0] 
                                        rounded-[30px] no-underline	w-36 text-base 
                                        font-medium h-12 border-[3px] border-[#1D9BF0] 
                                        transition duration-100 ease-out 
                                        hover:bg-[#8B98A5] hover:text-[#15202B]
                                         hover:border-[#8B98A5] "
                                    >
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <Link
                                href='/#contacts'
                            >
                                <button className="sm:w-[180px] bg-[#1D9BF0] 
                                text-[#15202B] rounded-[30px] no-underline	
                                w-36 text-base font-medium h-12 border-[3px]
                                 border-[#1D9BF0] transition duration-100 
                                 ease-out hover:bg-[#8B98A5] hover:text-[#15202B]
                                  hover:border-[#8B98A5] hidden sm:block "
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Landing;
