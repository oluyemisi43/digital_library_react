import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import logo from "./assets/img/logo.jpeg";
import { Home, Dashboard, Login } from './components';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}> {/* New Provider */}
   <Router>
   <Navbar bg='dark' variant='dark'>

   <Navbar.Brand href="/">
   <img
  alt="Book Logo"
  src={logo}
  width="30"
  height="30"
  className="d-inline-block align-top"
  />
   </Navbar.Brand>
   <Nav className='nav' activeKey='/'>
   <Nav.Item>
   <Nav.Link as='div'>
    <Link to='/'> Home </Link>
    </Nav.Link>
   </Nav.Item>

   <Nav.Item>
   <Nav.Link as='div'>
    <Link to='/dashboard'> dashboard </Link>
    </Nav.Link>
   </Nav.Item>

   <Nav.Item>
   <Nav.Link as='div'>
    <Link to='/account'> account </Link>
    </Nav.Link>
   </Nav.Item>
   </Nav>
   </Navbar>

<Routes>
<Route path="/" element={<Home title="digital library "/>} >
        </Route>
        <Route path="/dashboard"element={<Dashboard title="Book Dashboard"/>} >
        </Route>
        <Route path="/account"element={<Login/>} >
        </Route>
</Routes>

   </Router> 
   </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
