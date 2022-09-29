import './App.scss';
import { Layout } from './routes/Layout';
import { Routes, Route} from 'react-router-dom'
import { ContactsContainer } from './screens/Contacts/ContactsContainer';
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
import { CONTACTS, FORGOT_PASSWORD, LOGIN, OVERVIEW, RESET_PASSWORD, SETTINGS, SIGN_UP, TICKETS } from './routes/Routes';
import { TicketsConteiner } from './screens/Tickets/TicketsConteiner';



function App() {
  
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path={OVERVIEW} element={
              <RequireAuth>
                <UserProvider>
                  <Overview/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path={TICKETS} element={
              <RequireAuth>
                <UserProvider>
                    <TicketsConteiner/>
                </UserProvider>
              </RequireAuth>
            }/>
            <Route path={CONTACTS} element={
            <RequireAuth>
              <UserProvider>
                <ContactsContainer/>
              </UserProvider>
            </RequireAuth>
            }/>
            <Route path={SETTINGS} element={
              <RequireAuth>
                <UserProvider>
                  <SettingsContainer/>
                </UserProvider>
              </RequireAuth>
            }/>
          </Route>
          <Route path={LOGIN} element={<Wrapper component={<Login/>} />}/>
          <Route path={FORGOT_PASSWORD} element={<Wrapper component={<ForgotPass />} />}/>
          <Route path={RESET_PASSWORD} element={<Wrapper component={<ResetPass />} />}/>
          <Route path={SIGN_UP} element={<Wrapper component={<SignUp />} />}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
