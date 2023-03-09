import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/blog.module.css';
import Link from '../link';
import SingleBlog from './blog-card/blog-card';


function Blog({blogs}) {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {blogs.length > 0 && (
                <div
                    className={styles.blog}
                    id="blog"
                    style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.blogHeader}>
                        <h1 style={{ color: theme.primary }}>Blog</h1>
                    </div>
                    <div className={styles.blogBody}>
                        <div className={styles.blogBodyContainer}>
                            {blogs.slice(0, 3).reverse().map(blog => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.published_at}
                                    image={blog.cover_image}
                                    url={blog.canonical_url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                        {blogs.length > 3 && (
                            <div className={styles.blogViewAll}>
                                <Link href="/blog">
                                    <button
                                        className="text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0] transition-colors">
                                        View All
                                        <HiArrowRight
                                            className="text-[#8B98A5] bg-[#15202B] 
                                        w-[40px] h-[40px] p-2 text-base 
                                        rounded-[50%] cursor-pointer transition-colors" />
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
