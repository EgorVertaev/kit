import React from "react"
import './Main.css'
import { Login } from '../../screens/Login/Login';
import { ForgotPass } from '../../screens/ForgotPass/ForgotPass';
import { ResetPass } from '../../screens/ResetPass/ResetPass';
import { SignUp } from '../../screens/SignUp/SignUp';
import { Routes, Route } from "react-router-dom"
import Wrapper from "../../components/Wrapper"
import { Overview } from "../Overview/Overview";
import { RequireAuth } from "../../Hoc/RequireAuth";
import { AuthProvider } from "../../Hoc/AuthProvider";
import { UserProvider } from "../../Hoc/UserProvider";
import { Tickets } from "../Tickets/Tickets"
import { Contacts } from "../Contacts/Contacts";
import {  SettingsContainer } from '../Settings/SettingsContainer'

export const Main = () => {
  return (
    <div className="main">
      <AuthProvider>
        <Routes>
            <Route path='overview' element={
              <RequireAuth>
                <UserProvider>
                  <Overview/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path='tikets' element={
              <RequireAuth>
                <UserProvider>
                    <Tickets/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path='contacts' element={
            <RequireAuth>
              <UserProvider>
                <Contacts/>
              </UserProvider>
            </RequireAuth>
            }/>
            <Route path='settings' element={
              <RequireAuth>
                <UserProvider>
                  <SettingsContainer/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path='login' element={<Wrapper component={<Login/>} />}/>
            <Route path='ForgotPass' element={<Wrapper component={<ForgotPass />} />}/>
            <Route path='ResetPass' element={<Wrapper component={<ResetPass />} />}/>
            <Route path='SignUp' element={<Wrapper component={<SignUp />} />}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}