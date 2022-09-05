// import logo from './logo.svg';
import './App.css';
import StartPg from './components/start_pg/StartPg';
import 'font-awesome/css/font-awesome.min.css';
// import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPg from './components/Screens/LandingPg/LandingPg';
import OrganizeEvents from './components/Screens/OrganizeEvents/OrganizeEvents';
const App = () => {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<StartPg />} />
     <Route path="/login" element={<StartPg/>} />
     <Route path="/register" element={<StartPg />} />
     <Route path="/landingscreen" element={<LandingPg />} />
     <Route path="/organizeevent" element={<OrganizeEvents />} />
    
   </Routes>
   </BrowserRouter>
  )
};

export default App;
