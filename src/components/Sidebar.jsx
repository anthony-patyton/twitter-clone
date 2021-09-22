import React from 'react';
import "./Sidebar";
import SidebarOption from './SidebarOption';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {/* Twitter Icon */}
        <TwitterIcon />

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
        {/* SidebarOption  */}
        {/* SidebarOption  */}
        {/* SidebarOption  */}
        {/* SidebarOption  */}
        {/* SidebarOption  */}
        {/* SidebarOption  */}

        {/* SidebarButton */}
      </div>
      
    </>
  )
}

export default Sidebar
