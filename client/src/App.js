import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import { useAuthContext } from './Hooks/useAuthContext';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import SignIn from './Components/Account/SignIn'
import SignUp from './Components/Account/SignUp'
// import LogOut from './Components/Account/LogOut'
import Navbar from './Components/Navbar/Navbar';
 function App() {
  const {user}=useAuthContext()
  return (
    <>
      <div className="app">
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={user ? <Home/> :<Navigate to="/signin"/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/service' element={<Services/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/signup' element={!user ? <SignUp/>:<Navigate to="/signin"/>}/>
              <Route path='/signin' element={!user ? <SignIn/>:<Navigate to="/"/>}/>
              {/* <Route path='/logout' element={<LogOut/>}/> */}
            </Routes>
          </Router>
      </div>
  
    </>
  );
}

export default App;
