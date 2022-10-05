import React, { FC } from 'react'
import { UserState } from '../../hooks/userState'
import './Header.scss'
import { Dropdown, Menu} from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/Slices/AuthSlice'
interface IHeaderProps {
  title: string
}

export const Header: FC<IHeaderProps> = ({title}) => {
  const userInfo = UserState()
  const isAuth = useSelector((state: any) => state.auth.isAuth)
  console.log(isAuth)
  const dispatch = useDispatch()

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
            <button onClick={() => {
              dispatch(logOut(false))
            }}>Log Out</button>
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
