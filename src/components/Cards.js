import React from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import s21 from "../images/S21 Ultra.jfif";
import i10 from "../images/iPhone 10.jfif";
import i11 from "../images/IPhone 11.jfif";
import i12 from "../images/iPhone 12.png";

const Cards = () => {
    return (
        <div className={styles.container}>
            <Card src={s21} name='S21 Ultra' cost='600 $' />
            <Card src={i10} name='iPhone 10' cost='800 $' />
            <Card src={i11} name='iPhone 11' cost='990 $' />
            <Card src={i12} name='iPhone 12' cost='1200 $' />
        </div>
    );
};

export default Cards;