// import logo from './logo.svg';
import './App.css';
import StartPg from './components/start_pg/StartPg';

// import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";
const App= ()=> (
  <>
  <BrowserRouter>
  <main>
    <Route path='/' component={StartPg} exact /> 
    {/* important keyword exact see video 7  */}
  </main>
 </BrowserRouter>
  </>
)

export default App;
