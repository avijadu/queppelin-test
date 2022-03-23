import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Home from './component/Home'
import Info from './component/Info'
import User from './component/User';
import Reports from './component/Reports'
import Login from './component/Login'
import './style/app.css'
import Sidemenu from './Sidemenu';
function App() {
  const [role, setRole] = useState();

  const handleLogin = (childData) => {
    setRole(childData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <h3>Quepplien</h3>
          <div className='role'>
            <h5>{role} </h5>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
          </div>
        </div>
        <div className="content">
          <div className="sidebar">
            <p>allowed pages for you based on your role</p>
            <Sidemenu profile={role} />
          </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login parentCallBack={handleLogin} />} />
            <Route path='/report' element={<Reports />} />
            <Route path='/info' element={<Info />} />
            <Route path='/user' element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
