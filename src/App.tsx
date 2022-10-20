import "./App.scss";
import { Layout } from "./routes/Layout";
import { Routes, Route } from "react-router-dom";
import { Contacts } from "./screens/Contacts/Contacts";
import { Overview } from "./screens/Overview/Overview";
import Wrapper from "./components/Wrapper/Wrapper";
import { RequireAuth } from "./hoc/RequireAuth";
import { ForgotPass } from "./screens/ForgotPass/ForgotPass";
import { Login } from "./screens/Login/Login";
import { ResetPass } from "./screens/ResetPass/ResetPass";
import { SignUp } from "./screens/SignUp/SignUp";
import { ROUTES } from "./routes/Routes";
import { Tickets } from "./screens/Tickets/Tickets";
import { Settings } from "./screens/Settings/Settings";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route
            path={ROUTES.OVERVIEW}
            element={
              <RequireAuth>
                <Overview />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.TICKETS}
            element={
              <RequireAuth>
                <Tickets />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <RequireAuth>
                <Contacts />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.SETTINGS}
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path={ROUTES.LOGIN}
          element={<Wrapper component={<Login />} />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<Wrapper component={<ForgotPass />} />}
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<Wrapper component={<ResetPass />} />}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={<Wrapper component={<SignUp />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
