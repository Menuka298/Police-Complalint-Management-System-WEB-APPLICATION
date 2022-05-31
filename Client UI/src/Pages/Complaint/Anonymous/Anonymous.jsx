import React, { Component, useState, useEffect } from "react";
import "./Anonymous.css";
import axios from "axios";

export default class Anonymous extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Attachment: "",
        Attachmentfile: "",
        Complaint: "",
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
  
      const _Anonymous = {
        Anonymous: this.state.Anonymous,
        Attachmentfile: formData,
      };
  
      formData.append("Attachmentfile", this.state.Attachmentfile);
      formData.append("Complaint", this.state.Complaint);
      formData.append("Name", this.state.Name);
  
      console.log(this.state);
  
      axios({
        method: "post",
        url: "https://localhost:7257/api/AnonymousComplaint",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data; boundary=${form._boundary}",
          Accept: "*/*",
        },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          if (response.status == 200) {
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
        .post("https://localhost:7257/api/Anonymous", this.state.Name)
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
        Attachment,
        Attachmentfile,
        Complaint,
      } = this.state;
  return (
    <div className='Name'>
        <h1>Police complaint Manegment System</h1>
        <h2>ENTER YOUR ANONYMOUS COMPLAIN</h2>

    <p>ආයුබෝවන්...</p>
    <p>නිර්නාමික පැමිණිල්ලක් හෝ නිර්නාමික තොරතුරක් අප වෙත ඉදිරිපත් කිරීමට සදහා මේ හරහා පැමිණිලි ඉදිරිපත් කරන්න</p>
        <br/><br/>
        <div className="form">
        <div className="Home">

        </div>
        <hr></hr>
        <div>
          <form method="POST" onSubmit={this.OnCreateComplaint}>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">
                  ඔබගේ පැමිණිල්ල ඉදිරිපත් කරන්න (Enter Your Complaint){" "}
                </label>
                <br /><br />
                <textarea
                  className="form-control"
                  name="Complaint"
                  cols="100"
                  rows="9"
                  required //value={Complaint}
                  onChange={this.ChangeHandler}
                />
                <br /><br />
                <label className="form-label">
                  {" "}
                  ඔබගේ පැමිණිල්ලට අවශ්‍යය සාක්ෂියක් වේ නම් මෙහි එය අමුණා එවන්න
                  (If you have any document or image related to the complaint, Please attach to this complaint. Maximum attachment size is 5MB. )
                </label><br />
                <input
                  className="form-control"
                  type="file"
                  name="Attachmentfile"
                  onChange={this.ChangeHandlerImage}
                  accept=".jpg, .png"
                  //value={Attachmentfile}
                />
                <br /><br />
                 <label  className="form-label">පැමිණිල්ලට අදාල තොරතුරු සියල්ල ඉදිරිපත් කර ඇත්නම් ඔබගේ පැමිණිල්ල
                 ඉදිරිපත් කිරීමට මෙය කිලික් කරන්න Submit Your Complaint : </label>
                 <br />
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
      </div>
  );
 }
}
