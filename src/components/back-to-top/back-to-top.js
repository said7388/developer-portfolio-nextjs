import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/backToTop.module.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);


    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className={styles.backToTop}
        >
            <button
                onClick={scrollToTop}
                aria-label='Back to top'>
                <IoIosArrowDropupCircle
                    className={`text-[2rem] text-[${theme.primary}] 
                    hover:scale-[1.08] hover:text-[${theme.tertiary}]`} />
            </button>
        </div>
    );
}

export default BackToTop;
