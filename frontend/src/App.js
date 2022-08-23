// import logo from './logo.svg';
import './App.css';
import StartPg from './components/start_pg/StartPg';

// import Header from './components/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/LoginPg/Login';
import Register from './components/Register/Register';
const App = () => {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<StartPg />} />
     <Route path="/login" element={<StartPg/>} />
     <Route path="/register" element={<StartPg />} />
   </Routes>
   </BrowserRouter>
  )
};

export default App;
