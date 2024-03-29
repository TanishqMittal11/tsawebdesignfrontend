import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//auth
import {isAuth} from './util/auth.util';

//component
import App from './App.js';
import AboutComponent from './pages/about.page';
import NavbarComponent from './component/navbar.component';
import UserHomePage from './pages/userhome.page';
import LoginPage from './pages/login.page';
import EventsPage from './pages/events.page';
import RegisterPage from './pages/register.page';
import EventDisplayPage from './pages/eventdisplay.page.js';
import UserNavbarComponent from './component/usernavbar.component';
import Footer from './component/footer.component';

//protocted route
import ProtectedRoute from './util/auth.util';

import {HashRouter, Routes, Route} from 'react-router-dom';

if (window.location.href === 'http://localhost:3000/') {
    window.location.href = 'http://localhost:3000/#/';
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/' >
     <NavbarComponent /> 

      <Routes>
        <Route path="/about" element={<AboutComponent/>}></Route>
        
        <Route path="/home" element={<ProtectedRoute><UserHomePage/></ProtectedRoute>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/events" element={<ProtectedRoute><EventsPage/></ProtectedRoute>}></Route>
        <Route path="/event/" element={<ProtectedRoute><EventDisplayPage/></ProtectedRoute>}></Route>
        <Route path="/" element={<App/>}></Route>
        <Route path="*" element={() => {
          return (
          <div className='404-container'>
            <h1 className='404-title'>404</h1>
            <h3 className='404-text'> Seems like you might of entered an incorrect URL </h3>
          </div>)
        }}></Route>
      </Routes>
      <Footer />
    </HashRouter>

    
  </React.StrictMode>
, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
