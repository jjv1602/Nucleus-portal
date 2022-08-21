// import logo from './logo.svg';
import './App.css';
import StartPg from './components/start_pg/StartPg';

// import Header from './components/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/LoginPg/Login';
const App = () => {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<StartPg />} />
     <Route path="/login" element={<Login />} />
   </Routes>
   </BrowserRouter>
  )
};

export default App;
