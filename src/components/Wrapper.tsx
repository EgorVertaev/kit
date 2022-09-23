import React, {FC} from "react";
import { ContactIcon } from "../icons/icon"
import './Wrapper.css'

interface ILoginWrapperProps {
  component: any
}

const LoginWrapper: FC<ILoginWrapperProps> = ({ component }) => {

  return (
    <div className='wrapper'>
      <div className="wrapper__inner">
        <div className='wrapper__header'> 
          {<ContactIcon width="48" height="48"/>}
          <h1 className="wrapper__title">Dashboard Kit</h1>
        </div>
        {component}
      </div>
    </div>
  )
}

export default LoginWrapper