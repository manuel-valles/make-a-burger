import React from 'react';
import burgerLogo from '../../assets/images/logo4.png';
import styles from './Logo.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="Burger Logo"/>
    </div>
);

export default logo;