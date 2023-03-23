import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from './components/StartingPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Globalprovider from './store/Globalprovider';
import Users from './components/Users';
import Appointment from './components/Appointment';
import Prescription from './components/Prescription';
import Edituser from './components/Edituser';
import Useroptions from './components/Useroptions';
import { useContext, useEffect, useState } from 'react';
import Homepage from './components/Homepage';
import About from './components/About';
import Fitness from './components/Fitness';
import axios from 'axios';
import Cookies from 'js-cookie'
import GlobalObj from './store/global-object';
import Chatpage from './components/Chatpage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userOpt, setUseropt] = useState(false)
  const [userData, setUserData] = useState({})
  useEffect(() => {
    const token = Cookies.get('loginCookie')
    if (token) {
      setLoggedIn(true)
    }
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Globalprovider>
          <Navbar opt={userOpt} setOpt={setUseropt} loggedIn={loggedIn}></Navbar>
          {userOpt && <Useroptions></Useroptions>}
          <Routes>
            <Route path='/home' element={<StartingPage setOpt={setUseropt} setLoggedIn={setLoggedIn}></StartingPage>}></Route>
            <Route path='/login' element={<Login setOpt={setUseropt} setLoggedIn={setLoggedIn}></Login>}></Route>
            <Route path='/register' element={<Register setOpt={setUseropt}></Register>}></Route>
            <Route path='/' element={<Homepage setOpt={setUseropt}></Homepage>}></Route>
            <Route path='/about' element={<About setOpt={setUseropt}></About>}></Route>
            <Route path='/chatpage' element={<Chatpage></Chatpage>}></Route>
            <Route path='/fitness' element={<Fitness setOpt={setUseropt}></Fitness>}></Route>
            <Route path='/userDashboard' element={<Home setOpt={setUseropt}></Home>}></Route>
            <Route path='/users' element={<Users setOpt={setUseropt}></Users>}></Route>
            <Route path='/appointment' element={<Appointment setOpt={setUseropt}></Appointment>}></Route>
            <Route path='/prescription' element={<Prescription setOpt={setUseropt}></Prescription>}></Route>
            <Route path='/edituser' element={<Edituser />}></Route>
          </Routes>
        </Globalprovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
