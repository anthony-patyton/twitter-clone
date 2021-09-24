import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>

      <SidebarOption active Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Notifications"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
