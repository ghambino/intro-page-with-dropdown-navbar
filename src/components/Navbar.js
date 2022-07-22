import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import { featuresList, companyList } from "./helper";

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [farrowdown, setFarrowDown] = useState(false);
  const [carrowdown, setCarrowDown] = useState(false);

  return (
    <div className="header">
      <span className="logoHolder">
        <img src={logo} alt="snaplogo" className="logo" />
      </span>
      <div className="menu-button">
        <img
          src={menuClicked ? closeMenu : menu}
          alt="menuBar"
          onClick={() => setMenuClicked(!menuClicked)}
        />
      </div>
      <nav className={menuClicked ? "nav-menu active" : "nav-menu"}>
        <ul className="narr">
          <li
            onClick={() => {
              setFarrowDown(!farrowdown);
              setCarrowDown(false);
            }}
            className="nav-link"
          >
            features{"  "}
            <span>
              <img src={farrowdown ? arrowUp : arrowDown} alt="nav arrows" />
            </span>
            <ul className={farrowdown ? "innerNav inactive" : "innerNav"}>
              {featuresList.map((unit, index) => (
                <li key={index} className="iinn">
                  <img src={unit.imgSrc} alt="icon" />
                  {unit.name}
                </li>
              ))}
            </ul>
          </li>
          <li
            onClick={() => {
              setCarrowDown(!carrowdown);
              setFarrowDown(false);
            }}
            className="nav-link"
          >
            company{" "}
            <span>
              <img src={carrowdown ? arrowUp : arrowDown} alt="nav arrows" />
            </span>
            <ul className={carrowdown ? "innerNav inactive" : "innerNav"}>
              {companyList.map((unit, index) => (
                <li key={index} className='iinn'>{unit}</li>
              ))}
            </ul>
          </li>
          <li className="nav-link">careers</li>
          <li className="nav-link">about</li>
        </ul>
        <div className="loginSection">
          <button className="login">login</button>
          <button className="register">register</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
