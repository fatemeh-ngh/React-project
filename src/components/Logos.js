import React from 'react';
import styles from "./Logos.module.css";
import apple from "../images/apple logo.png";
import Samsung from "../images/Samsung Logo.png";
import Xiaomi from "../images/Xiaomi logo.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <img src={apple} alt="logo"/>
            <img src={Samsung} alt="logo"/>
            <img src={Xiaomi} alt="logo"/>
        </div>
    );
};

export default Logos;