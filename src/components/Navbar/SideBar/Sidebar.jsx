import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {
  return (
    <div className={classes.activ_friends}>
      {/* лого активныйх друзей в Navbar*/}
      <div className={classes.best_friend}>
        <NavLink className={classes.best_activ_friend} to="/friend/0" activeClassName={classes.active}>
          <div className={classes.activ_friend_logo}>
            <img className={classes.active_friend_icon}
              src="https://instalook.ru/uploads/news/2020/06/ideya-dlya-fotosessii-v-stile-kiber-punk.jpg"></img>
          </div>
          <div className={classes.active_friend_name}>Sasha</div>
        </NavLink>
      </div>
      <div className={classes.best_friend}>
        <NavLink className={classes.best_activ_friend} to="/friend/1" activeClassName={classes.active}>
          <div className={classes.activ_friend_logo}>
            <img className={classes.active_friend_icon}
              src="https://img3.goodfon.ru/original/960x854/d/fb/kiberpank-devushka-lico-ochki-4004.jpg"></img>
          </div>
          <div className={classes.active_friend_name}>Irina</div>
        </NavLink>
      </div>
      <div className={classes.best_friend}>
        <NavLink className={classes.best_activ_friend} to="/friend/2" activeClassName={classes.active}>
          <div className={classes.activ_friend_logo}>
            < img className={classes.active_friend_icon}
              src="https://yt3.ggpht.com/a/AATXAJwFrCP14_2GC24y3P_bXjEMNYvlJDetEEaeeP8JkA=s900-c-k-c0xffffffff-no-rj-mo"></img>
          </div>
          <div className={classes.active_friend_name}>Dmitriy</div>
        </NavLink>
      </div>

    </div>

  )
}
export default Sidebar;