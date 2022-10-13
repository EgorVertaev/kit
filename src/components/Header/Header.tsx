import React, { FC } from "react";
import "./Header.scss";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actionCreators";

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = ({ title }) => {
  const dispacth = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const logOutFunc = () => {
    localStorage.clear();
    dispacth(logOut());
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to={"/ressetpassword"}>Reset Password</Link>,
        },
        {
          key: "2",
          label: (
            <Link to={"/login"} onClick={() => logOutFunc()}>
              Log Out
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <div className="component-header">
      <div className="component-header__title">{title}</div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="component-header__user">
          <span className="component-header__name">
            {user.firstName} {user.lastName}
          </span>
          <img
            className="component-header__photo"
            src="https://via.placeholder.com/40"
            alt="user"
          />
        </div>
      </Dropdown>
    </div>
  );
};
