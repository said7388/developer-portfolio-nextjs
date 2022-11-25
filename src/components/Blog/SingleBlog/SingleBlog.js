import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../../../styles/singleBlog.module.css';


import placeholder from '../../../assets/png/placeholder.png';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <Fade bottom>
            <a className={styles.singleBlog} key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.quaternary}}>
                <div className={styles.singleBlogImage} style={{backgroundColor: theme.secondary}}>
                    <img src={image ? image : placeholder} alt={title} />
                </div>
                <div className={styles.singleBlogBody}>
                    <p style={{color: theme.primary}}>{date}</p>
                    <h3 style={{color: theme.tertiary}}>{title}</h3>
                    <h6 style={{color: theme.tertiary}}>{desc}</h6>
                </div>
            </a>
        </Fade>
    )
}

export default SingleBlog
