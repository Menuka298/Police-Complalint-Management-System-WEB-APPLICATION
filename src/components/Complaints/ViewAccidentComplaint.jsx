import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import SideNavigation from "../Main/SideNavigation";
import Navigation from "../Main/Navigation";

export default function ViewAccidentComplaint() {
  const { id } = useParams();
  console.log(id);
  const [business, setbusiness] = useState("");

  useEffect(() => {

    const config = localStorage.getItem('token');
    if(config === null)
    {
      window.location.href = "/";
    }

    axios
      .get("https://localhost:7257/api/AccidentCompalint/" + id)
      .then((response) => {
        //this.setState({ business: response.data });
        setbusiness(response.data);
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [null]);
  console.log(business);

  return (
    <div className="wrapper">
      <SideNavigation />
      <div id="content">
        <Navigation />
        <div className="line">
          <h1>View Accidental Complaint</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                disabled
                value={business.name}
                type="email"
                className="form-control"
                id="name"
              ></input>
            </div>
            <div className="col-md-6">
              <label className="form-label">District</label>
              <input
                disabled
                value={business.district}
                type="text"
                className="form-control"
                id="District"
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">policeStation</label>
              <input
                disabled
                value={business.policeStation}
                type="text"
                className="form-control"
                id="policeStation"
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">Catagory</label>
              <input
                disabled
                value={business.catagory}
                type="text"
                className="form-control"
                id="catagory"
              ></input>
            </div>
            
            <div className="col-6">
              <label className="form-label">Vehicle Number</label>
              <input
                disabled
                value={business.vehicleNumber}
                type="text"
                className="form-control"
                id="nic"
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">Driving Licence</label>
              <input
                disabled
                value={business.drivingLicence}
                type="text"
                className="form-control"
                id="nic"
              ></input>
            </div>
           
            <div className="col-6">
              <label className="form-label">Contact No</label>
              <input
                disabled
                value={business.contactNo}
                type="text"
                className="form-control"
                id="contactNo"
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">Email</label>
              <input
                disabled
                value={business.email}
                type="text"
                className="form-control"
                id="email"
              ></input>
            </div>
            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                disabled
                value={business.address}
                type="text"
                className="form-control"
                id="address"
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">Complaint Date</label>
              <input
                disabled
                value={new Date(business.date).toLocaleDateString("US")}
                type="text"
                className="form-control"
                id="date"
              ></input>
            </div>
            <hr></hr>
            <div className="col-12">
              <label className="form-label">Complaint</label>
              <textarea
                disabled
                value={business.complaint}
                type="text"
                className="form-control"
                id="normalComplaint"
                rows="3"
              ></textarea>
            </div>
            <div className="col-6">
              <label className="form-label">Attachment</label>
              <img
                style={{ height: 200, width: 500 }}
                src={"http://127.0.0.1:8887/" + business.attachment}
                alt="icons"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
