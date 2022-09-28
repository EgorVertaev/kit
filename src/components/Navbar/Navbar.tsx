import React, { FC } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { CONTACTS, OVERVIEW, SETTINGS, TICKETS } from "../../routes/Routes";
import { LogoIcon, OverviewIcon, TicketsIcon, ContactIcon, SettingIcon } from "../Icons/Icon";


export const Navbar: FC = () => {
  const isActive = (navData: any) => {
    return navData.isActive
      ? "navbar__link navbar__link--active"
      : "navbar__link";
  };
  return (
    <div className="navbar">
      <div className="navbar__header">
        <div className="navbar__logo">
          <LogoIcon width="32" height="32" />
        </div>
        <span className="navbar__title">Dashboard Kit</span>
      </div>

      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink className={isActive} to={OVERVIEW}>
            <div className="navbar__flex">
              <div className="navbar__icon">
                <OverviewIcon />
              </div>
              <span>Overview</span>
            </div>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className={isActive} to={TICKETS}>
            <div className="navbar__flex">
              <div className="navbar__icon">
                <TicketsIcon />
              </div>
              <span>Tickets</span>
            </div>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className={isActive} to={CONTACTS}>
            <div className="navbar__flex">
              <div className="navbar__icon">
                <ContactIcon />
              </div>
              <span>Contacts</span>
            </div>
          </NavLink>
        </li>
        
        {/* <li className="navbar__item">
          <NavLink className={isActive} to={"/login"}>
            Login
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className={isActive} to={"/SignUp"}>
            Sign Up
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className={isActive} to={"/ForgotPass"}>
            Forgot Password
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className={isActive} to={"/ResetPass"}>
            Reset Password
          </NavLink>
        </li> */}
      </ul>

      <ul className="navbar__list navbar__list--down">
        <li className="navbar__item">
          <NavLink className={isActive} to={SETTINGS}>
            <div className="navbar__flex">
              <div className="navbar__icon">
                <SettingIcon/>
              </div>
              <span>Settings</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
