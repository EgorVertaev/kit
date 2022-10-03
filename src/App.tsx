import './App.scss';
import { Layout } from './routes/Layout';
import { Routes, Route} from 'react-router-dom'
import { Contacts } from './screens/Contacts/Contacts';
import { Overview } from './screens/Overview/Overview';
import { SettingsContainer } from './screens/Settings/SettingsContainer';
import Wrapper from './components/Wrapper/Wrapper';
import { RequireAuth } from './hoc/RequireAuth';
import { UserProvider } from './hoc/UserProvider';
import { ForgotPass } from './screens/ForgotPass/ForgotPass';
import { Login } from './screens/Login/Login';
import { ResetPass } from './screens/ResetPass/ResetPass';
import { SignUp } from './screens/SignUp/SignUp';
import { AuthProvider } from './hoc/AuthProvider';
import { ROUTES } from './routes/Routes';
import { Tickets } from './screens/Tickets/Tickets';



function App() {
  
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path={ROUTES.OVERVIEW} element={
              <RequireAuth>
                <UserProvider>
                  <Overview/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path={ROUTES.TICKETS} element={
              <RequireAuth>
                <UserProvider>
                  <Tickets/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path={ROUTES.CONTACTS} element={
            <RequireAuth>
              <UserProvider>
                <Contacts/>
              </UserProvider>
            </RequireAuth>
            }/>
            <Route path={ROUTES.SETTINGS} element={
              <RequireAuth>
                <UserProvider>
                  <SettingsContainer/>
                </UserProvider>
              </RequireAuth>
            }/>
          </Route>
          <Route path={ROUTES.LOGIN} element={<Wrapper component={<Login/>} />}/>
          <Route path={ROUTES.FORGOT_PASSWORD} element={<Wrapper component={<ForgotPass />} />}/>
          <Route path={ROUTES.RESET_PASSWORD} element={<Wrapper component={<ResetPass />} />}/>
          <Route path={ROUTES.SIGN_UP} element={<Wrapper component={<SignUp />} />}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
