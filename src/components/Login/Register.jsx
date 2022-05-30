import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideNavigation from "../Main/SideNavigation";
import Navigation from "../Main/Navigation";

class Register extends Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    nic: "",
    password: "",
    email: "",
    contactNo: "",
    retypepassword: "",
    userType:20
  };

  componentDidMount() {
    const config = localStorage.getItem("token");
    if (config === null) {
      window.location.href = "/";
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  btnClickRegister = (e) => {
    if (this.state.password != this.state.retypepassword) {
      alert("Password mismatch!Please check again.");
    } else {
        console.log(this.state);
      axios
        .post("https://localhost:7257/api/user/RegisterUser", {
          userType: this.state.userType,
          userName: this.state.username,
          fullName: this.state.fullname,
          contactNo: this.state.contactNo,
          nic: this.state.nic,
          password: this.state.password,
          email: this.state.email,
        })
        .then(function(response) {
          //console.log(response);
          if (response.status == 200) {
            alert("Registerd Successfully.");
            window.location.href = "/Main";
          } else {
            alert("Registration issue.");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    console.log(this.state);
  };

  render() {
    return (
      <div div className="wrapper">
        <SideNavigation />
        <div id="content">
          <Navigation />
          <div className="line">
            <div className="container col-md-6">
              <h2>USER REGISTER</h2>
              <form
                className="form-control"
                action="file:///C:/Users/sachi/OneDrive/Desktop/WEB%20PAGE/Complain.html"
              >
                <br></br>
                <select
                  class="form-control"
                  aria-label="Default select example"
                  onChange={this.handleChange}
                  name="userType"
                >
                  <option value="10">System Admin</option>
                  <option selected value="20">
                    System User
                  </option>
                </select>
                <br></br>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full name"
                  required
                  name="fullname"
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  className="form-control"
                  type="text"
                  placeholder="User name"
                  required
                  name="username"
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Contact No"
                  required
                  name="contactNo"
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  className="form-control"
                  type="text"
                  placeholder="NIC"
                  required
                  name="nic"
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  className="form-control"
                  type="password"
                  placeholder="ReType-Password"
                  required
                  name="retypepassword"
                  onChange={this.handleChange}
                />
                <br />
                <div className="btn-toolbar">
                  <button
                    type="submit"
                    className="btn btn-success ml-6"
                    onClick={this.btnClickRegister}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
