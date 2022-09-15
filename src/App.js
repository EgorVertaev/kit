import './App.css';
import Wrapper from "./components/Wrapper"
import { Login } from './components/Login/Login';
import { ForgotPass } from './components/ForgotPass/ForgotPass';
import { ResetPass } from './components/ResetPass/ResetPass';
import { SignUp } from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Wrapper component={<Login />}/>
      <Wrapper component={<ForgotPass />}/>
      <Wrapper component={<ResetPass />}/>
      <Wrapper component={<SignUp />}/>
    </div>
  );
}

export default App;
