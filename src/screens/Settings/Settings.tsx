import React from "react";
import "./Settings.scss";
import { Image } from "antd";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { SettingForm } from "./SettingForm/SettingForm";

export const Settings = () => {
  const user = useSelector((state: any) => state.user.user);
  
  return (
    <>
      <Header title={'Settings'}/>

      <div className="settings">
        <div className="settings__body">
          <Image src={user.image} alt={"user-picture"} />
          <div>First name: {user.firstName}</div>
          <div>Last name: {user.lastName}</div>
          <div>Email: {user.email}</div>
          <div>Adress: {user.adress}</div>
        </div>
        <div className="settings__form">
          <SettingForm/>
        </div>
      </div>
    </>
  );
};
