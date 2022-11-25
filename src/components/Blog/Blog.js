import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData';
import styles from '../../styles/blog.module.css';
import Link from '../link';
import SingleBlog from './SingleBlog/SingleBlog';


function Blog() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
            {blogData.length > 0 && (
                <div className={styles.blog} id="blog" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.blogHeader}>
                        <h1 style={{ color: theme.primary }}>Blog</h1>
                    </div>
                    <div className={styles.blogBody}>
                        <div className={styles.blogBodyContainer}>
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                        {blogData.length > 3 && (
                            <div className={styles.blogViewAll}>
                                <Link href="/blog">
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

export default Blog
