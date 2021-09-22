import React from 'react'
import './SidebarOption';

const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption;