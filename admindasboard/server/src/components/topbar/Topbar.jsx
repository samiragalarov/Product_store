import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LogoutIcon from '@material-ui/icons/Backspace';

export default function Topbar() {
  function handlelogout() {

    localStorage.removeItem("user")
    window.location.replace("/login")
}

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <LogoutIcon  onClick={handlelogout}/>
   
          </div>
    

         
        </div>
      </div>
    </div>
  );
}
