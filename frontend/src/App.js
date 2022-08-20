// import logo from './logo.svg';
import './App.css';
import StartPg from './components/start_pg/StartPg';

// import Header from './components/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<StartPg />} />
   </Routes>
   </BrowserRouter>
  )
};

export default App;
