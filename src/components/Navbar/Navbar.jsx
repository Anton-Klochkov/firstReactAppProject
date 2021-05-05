import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './SideBar/Sidebar'


const Navbar = (props) => {

/*   let friendsData = 
  props.state.sideBar.map */

  return (






    <nav className={classes.nav}>
      <div className={classes.navbar}>
        <NavLink className={classes.way} to="/profile" activeClassName={classes.active}> Profile </NavLink>
      </div>
      <div className={classes.navbar}>
        <NavLink className={classes.way} to="/messages" activeClassName={classes.active}> Messages </NavLink>
      </div>
      <div className={classes.navbar}>
        <NavLink className={classes.way} to="/news" activeClassName={classes.active}> News </NavLink>
      </div>
      <div className={classes.navbar}>
        <NavLink className={classes.way} to="/music" activeClassName={classes.active}> Music </NavLink>
      </div>

      <div className={classes.navbar}>
        <NavLink className={classes.way} to="/friends" activeClassName={classes.active}> Friends </NavLink>
        <div>
          {
            <Sidebar />
          }
        </div>
      </div>
      <div className={classes.navbarSetting}>
        <NavLink className={classes.way} to="/settings" activeClassName={classes.active}> Settings </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;