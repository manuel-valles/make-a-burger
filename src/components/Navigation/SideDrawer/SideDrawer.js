import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];

    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return(
        <Auxiliar>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliar>
    );
};

export default sideDrawer;