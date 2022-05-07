import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {
    const {src, name, cost} = props;
    return (
        <div className={styles.container}>
            <img src={src} alt="img" />
            <h3>{name}</h3>
            <p>{cost}</p>
        </div>
    );
};

export default Card;