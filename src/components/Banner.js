import React from 'react';
import styles from './Banner.module.css';
import banner from "../images/banner.jfif";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>Botostart</h1>
                <p>
                    We're learning <span>React.js</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;