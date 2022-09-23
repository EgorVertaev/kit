import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/Main/Main'

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Main />    
      </BrowserRouter>
    </div>
  );
}

export default App;
