import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Fragment,useState } from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './Pages/Register/Signup';
import Header from './Pages/Menu/HeaderBar/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Complaint from './Pages/Complaint/Normal/Complaint';
import Anonymous from './Pages/Complaint/Anonymous/Anonymous';
import AccidentComplaint  from './Pages/Complaint/Accident/AccidentComplaint';
import NoneRegisterComplaint from './Pages/Complaint/NonRegister/NoneRegisterComplaint';
import Login from './Pages/Register/Login'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/NormalComplaint/' element={<Complaint/>}></Route>
      <Route path='/AnonymousComplaint' element={<Anonymous/>}></Route>
      <Route path='/AccidentComplaintComplaint' element={<AccidentComplaint/>}></Route>
      <Route path='/NoneRegisterComplaint' element={<NoneRegisterComplaint/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
      {/* <Fragment>
        <Header/>
        <Routes>
          <Route exact path='/' element={< Register />}/>
        </Routes>
      </Fragment> */}
    </BrowserRouter>
  );
}

export default App;
