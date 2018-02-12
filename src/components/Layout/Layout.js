import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    render(){
        return (
            <Auxiliar>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    <p className={styles.Temp}><i className="fa fa-spinner" aria-hidden="true"></i> Under construction</p>
                    {this.props.children}
                </main>
            </Auxiliar>
        )
    }
}

export default Layout;