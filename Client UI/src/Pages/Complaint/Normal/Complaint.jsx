import React, { Component, useState, useEffect } from "react";
import "./Complaint.css";
import axios from "axios";

export default class complaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      District: "",
      PoliceStation: "",
      Catagory: "",
      Name: "",
      Email: "",
      Address: "",
      ComplainType: 0,
      ContactNo: "",
      Attachment: "",
      Attachmentfile: "",
      NIC: "",
      NormalComplaint: "",
    };
  }

  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  ChangeHandlerImage = (e) => {
    // console.log({ [e.target.name]: e.target.value });
    //this.setState({ [e.target.name]: e.target.value });
    // this.setState({ Name: e.target.value });
    this.setState({ Attachmentfile: e.target.files[0] });
  };

  OnCreateComplaint = (event) => {
    event.preventDefault();
    const formData = new FormData();

    const _Complaint = {
      District: this.state.District,
      PoliceStation: this.state.PoliceStation,
      Catagory: this.state.Catagory,
      Name: this.state.Name,
      ContactNo: this.state.ContactNo,
      Email: this.state.Email,
      Address: this.state.Address,
      NIC: this.state.NIC,
      NormalComplaint: this.state.NormalComplaint,
      Attachmentfile: formData,
    };

    formData.append("Attachmentfile", this.state.Attachmentfile);
    formData.append("District", this.state.District);
    formData.append("PoliceStation", this.state.PoliceStation);
    formData.append("Catagory", this.state.Catagory);
    formData.append("Email", this.state.Email);
    formData.append("ContactNo", this.state.ContactNo);
    formData.append("NIC", this.state.NIC);
    formData.append("NormalComplaint", this.state.NormalComplaint);
    formData.append("Address", this.state.Address);
    formData.append("Name", this.state.Name);

    console.log(this.state);

    axios({
      method: "post",
      url: "https://localhost:7257/api/Complaints",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data; boundary=${form._boundary}",
        Accept: "*/*",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status == 201) {
          alert("Successfully Saved");
          window.location.reload(false);
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        if (response.status == 500) {
          alert("Internal Server Error");
        } else if (response.status == 500) {
          alert("Bad Request");
        }
      });

    /*
    axios
      .post("https://localhost:7257/api/Complaints", this.state.Name)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error.status);
      });
      */
  };

  render() {
    const {
      District,
      PoliceStation,
      Catagory,
      Name,
      Email,
      Address,
      ComplainType,
      ContactNo,
      Attachment,
      Attachmentfile,
      NIC,
      NormalComplaint,
    } = this.state;
    return (
      <div className="form">
        <div className="Home">
          <h1>Police complaint Manegment System</h1>
          <h2>ENTER YOUR COMPLAIN</h2>

          <p>ආයුබෝවන්...</p>
          <p>ඔබගේ පැමිණිල්ල ඉදිරිපත් කිරීමට පහත තොරතුරු ඇතුලත් කරන්න</p>
        </div>
        <hr></hr>
        <div>
          <form method="POST" onSubmit={this.OnCreateComplaint}>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">
                  ඔබගේ දිස්ත්‍රික්කය තෝරන්න (Select your disctrict)
                </label>
                <select
                  className="form-control"
                  required
                  name="District"
                  //value={District}
                  onChange={this.ChangeHandler}
                >
                  <option defaultValue="kandy">Kandy</option>
                  <option> Colombo</option>
                  <option>Matale</option>
                  <option>Kurunagala</option>
                  <option>Kaluthara</option>
                  <option>Nuwaraeliya</option>
                  <option>jaffna</option>
                  <option>Galle</option>
                  <option>Hambanthota</option>
                </select>
                <br></br>
                <label className="form-label">
                  ඔබගේ දිස්ත්‍රික්කයේ පිහිටි පොලිස් ස්ථානය තෝරන්න (Select Your
                  Police Station)
                </label>
                <select
                  className="form-control"
                  required
                  name="PoliceStation"
                  //value={PoliceStation}
                  onChange={this.ChangeHandler}
                >
                  <option defaultValue="kandy">Kandy</option>
                  <option> Colombo</option>
                  <option>Matale</option>
                  <option>Kurunagala</option>
                  <option>Kaluthara</option>
                  <option>Nuwaraeliya</option>
                  <option>jaffna</option>
                  <option>Galle</option>
                  <option>Hambanthota</option>
                </select>
                <br />
                <label className="form-label">
                  Select Your Complain Catageroy
                </label>
                <select
                  className="form-control"
                  name="Catagory"
                  //value={Catagory}
                  onChange={this.ChangeHandler}
                >
                  <option>Abuse of Women Or Children</option>
                  <option> Accident</option>
                  <option>Robbery</option>
                </select>
                <br></br>
                <label className="form-label">
                  ඔබගේ නම ඇතුලත් කරන්න (Enter Your Name){" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="Name"
                  //value={Name}
                  placeholder="Full name"
                  required
                  onChange={this.ChangeHandler}
                />
                <br />
                <label className="form-label">
                  ඔබගේ දුරකථන අංකය ඇතුලත් කරන්න (Enter Your Telephone Number){" "}
                </label>
                <input
                  className="form-control"
                  name="ContactNo"
                  type="text"
                  placeholder="07X-xxx-xxxx"
                  required
                  //value={ContactNo}
                  onChange={this.ChangeHandler}
                />
                <br></br>
                <label className="form-label">
                  ඔබගේ හැදුනුම්පත් අංකය ඇතුලත් කරන්න (Enter Your ID Number)
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="NIC"
                  placeholder="xxxx-xxxx-xxxx"
                  required
                  // value={NIC}
                  onChange={this.ChangeHandler}
                />

                <br />
                <label className="form-label">
                  ඔබගේ ඊමේලය ඇතුලත් කරන්න (Enter Your E-mail Address)
                </label>
                <input
                  className="form-control"
                  name="Email"
                  type="text"
                  placeholder="_________@example.com"
                  required
                  //value={Email}
                  onChange={this.ChangeHandler}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  ඔබගේ ලිපිනය ඇතුලත් කරන්න (Enter Your Address){" "}
                </label>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="5"
                  required
                  name="Address"
                  // value={Address}
                  onChange={this.ChangeHandler}
                />
                <br />
                <label className="form-label">
                  ඔබගේ පැමිණිල්ල ඉදිරිපත් කරන්න (Enter Your Complaint){" "}
                </label>
                <br />
                <textarea
                  className="form-control"
                  name="NormalComplaint"
                  cols="100"
                  rows="9"
                  required //value={NormalComplaint}
                  onChange={this.ChangeHandler}
                />
                <br />
                <label lassName="form-label">
                  {" "}
                  ඔබගේ පැමිණිල්ලට අවශ්‍යය සාක්ෂියක් වේ නම් මෙහි එය අමුණා එවන්න
                  (If you have any document or image related to the complaint, Please attach to this complaint. Maximum attachment size is 5MB. )
                </label>
                <input
                  className="form-control"
                  type="file"
                  name="Attachmentfile"
                  onChange={this.ChangeHandlerImage}
                  accept=".jpg, .png"
                  //value={Attachmentfile}
                />

                <h5>
                  පැමිණිල්ලට අදාල තොරතුරු සියල්ල ඉදිරිපත් කර ඇත්නම් ඔබගේ
                  පැමිණිල්ල ඉදිරිපත් කිරීමට මෙය කිලික් කරන්න
                </h5>
                <button type="submit" className="btn btn-primary me-1">
                  Submit Complaintd
                </button>
              </div>
            </div>

            <br />
            <br />
          </form>
        </div>
      </div>
    );
  }
}
