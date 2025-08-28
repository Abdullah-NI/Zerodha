import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [selectedMenu,setSelecetedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

  const menuClass="menu";
  const activeMenuClass="menu selected"

  const handleManuClick=(index)=>{
    setSelecetedMenu(index);
  }

  const handleProfileClick=(index)=>{
    setSelecetedMenu(!isProfileDropdownOpen);
  }
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleManuClick(0)}>
              <p className={selectedMenu===0? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleManuClick(1)}>
              <p className={selectedMenu===1? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleManuClick(2)}>
              <p className={selectedMenu===2? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleManuClick(3)}>
              <p className={selectedMenu===3? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleManuClick(4)}>
              <p className={selectedMenu===4? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          {/* <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleManuClick(5)}>
              <p className={selectedMenu===5? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li> */}
        </ul>
        <hr />
        {/* onClick={handleProfileClick} */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
