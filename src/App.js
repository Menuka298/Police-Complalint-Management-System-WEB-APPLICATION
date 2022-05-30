import React from "react";
import "./assets/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalComplaintList from "./components/Complaints/NormalComplaintList";
import LoginPage from "./components/Login/LoginPage";
import ViewNormalComplaint from "./components/Complaints/ViewNormalComplaint"
import AccidentComplaintList from "./components/Complaints/AccidentComlaintList";
import ViewAccidentComplaint from "./components/Complaints/ViewAccidentComplaint"
import NoneRegisterCompalintList from "./components/Complaints/NoneRegisterCompalintList"
import ViewNoneRegisterComplaint from "./components/Complaints/ViewNoneRegisterComplaint"
import AnonymousComplaintList from  "./components/Complaints/AnonymousComplaintList"
import ViewAnonymousComplaint from "./components/Complaints/ViewAnonymousComplaint"
import Register from "./components/Login/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/NormalComplaintList" element={<NormalComplaintList />}></Route>
        <Route path="/ViewNormalComplaint/:id" element={<ViewNormalComplaint />}></Route>
        <Route path="/AccidentComplaintList" element={<AccidentComplaintList />}></Route>
        <Route path="/ViewAccidentComplaint/:id" element={<ViewAccidentComplaint />}></Route>
        <Route path="/NoneRegisterCompalintList" element={<NoneRegisterCompalintList />}></Route>
        <Route path="/ViewNoneRegisterComplaint/:id" element={<ViewNoneRegisterComplaint />}></Route>
        <Route path="/AnonymousComplaintList" element={<AnonymousComplaintList />}></Route>
        <Route path="/ViewAnonymousComplaint/:id" element={<ViewAnonymousComplaint />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
