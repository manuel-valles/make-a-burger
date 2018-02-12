import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import styles from './Layout.css';

const layout = (props) => (
    <Auxiliar>
        <p className={styles.Temp}><i className="fa fa-spinner" aria-hidden="true"></i> Under construction</p>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Auxiliar>
);

export default layout;