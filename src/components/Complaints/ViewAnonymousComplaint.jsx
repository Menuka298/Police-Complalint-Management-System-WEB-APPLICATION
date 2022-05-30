import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import SideNavigation from "../Main/SideNavigation";
import Navigation from "../Main/Navigation";

export default function ViewAnonymosComplaint() {
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
      .get("https://localhost:7257/api/AnonymousComplaint/" + id)
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
          <h1>View Complaint</h1>
          <form className="row g-3">
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
