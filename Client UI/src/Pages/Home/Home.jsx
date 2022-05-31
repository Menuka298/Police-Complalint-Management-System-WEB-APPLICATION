import React from "react";
import logo from "../../../src/assets/images/Logo.png"
import "./Home.css";

export default function homepage() {
  return (
    <div className="Login">
      <div className="d-flex justify-content-center">
            <img
              src={logo}
              alt="logo"
              className="card-img-top"
              style={{ height: 400, width: 500 }}
            />
          </div>
      <div className="Name">
        <h1>Police complaint Manegment System</h1>
      </div>
      <div className="Adminlogin"></div>
      <div className="Complaint">
        <p>ආයුබෝවන්...</p>
        <p>Contact us below to submit your complaint</p>
          <p>ඔබේ පැමිණිල්ල ඉදිරිපත් කිරීම සදහා පහතින් අප හා සම්බන්ධ වන්න</p>
      </div>
    </div>
  );
}
