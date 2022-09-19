import './App.css';
// import Wrapper from "./components/Wrapper"
import { Login } from './screens/Login/Login';
import { ForgotPass } from './screens/ForgotPass/ForgotPass';
import { ResetPass } from './screens/ResetPass/ResetPass';
import { SignUp } from './screens/SignUp/SignUp';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar';
import Wrapper from "./components/Wrapper"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>    
        <Routes>
          <Route path='login' element={<Wrapper component={<Login/>} />}/>
          <Route path='ForgotPass' element={<Wrapper component={<ForgotPass />} />}/>
          <Route path='ResetPass' element={<Wrapper component={<ResetPass />} />}/>
          <Route path='SignUp' element={<Wrapper component={<SignUp />} />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
