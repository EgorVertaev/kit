import React, { FC } from 'react'
import { UserState } from '../../hooks/userState'
import './Header.scss'
import { Dropdown, Menu} from 'antd';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
interface IHeaderProps {
  title: string
}


export const Header: FC<IHeaderProps> = ({title}) => {
  const userInfo = UserState()
  const isAuth = useAuth() 
 
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link to={'/ressetpassword'}>Reset Password</Link>
          ),
        },
        {
          key: '2',
          label: (
            <button onClick={() =>isAuth?.logOut() }>Log Out</button>
          ),
        }
      ]}
    />
  );

  return (
      <div className='component-header'>
        <div className="component-header__title">
          {title}
        </div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="component-header__user">
            <span className="component-header__name">{userInfo?.firstName} {userInfo?.lastName}</span>
            <img className='component-header__photo' src="https://via.placeholder.com/40" alt="user" />
          </div>
        </Dropdown>
      </div>
    
  )
}
