import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Auxiliar>
        <Toolbar />
        <SideDrawer />
        <main className={styles.Content}>
            <p className={styles.Temp}><i className="fa fa-spinner" aria-hidden="true"></i> Under construction</p>
            {props.children}
        </main>
    </Auxiliar>
);

export default layout;