import React from "react";
import axios from "axios";

//class LoginPage extends React.Component
class Signup extends React.Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    nic: "",
    password: "",
    email: "",
    usertype: 2,
    contactNo: "",
    retypepassword: "",
  };
  btnClickRegister = (e) => {
    if (this.state.password != this.state.retypepassword) {
      alert("Password mismatch!Please check again.");
    } else {
      axios
        .post("https://localhost:7257/api/user/RegisterUser", {
          userType: 2,
          userName: this.state.username,
          fullName: this.state.fullname,
          contactNo: this.state.contactNo,
          nic: this.state.nic,
          password: this.state.password,
          email: this.state.email,
        })
        .then(function (response) {
          //console.log(response);
          if (response.status == 200) {
            alert("Registerd Successfully.");
            window.location.href = "/Login";
          } else {
            alert("Registration issue.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <br />

        <div className="container col-md-6">
          <h2>REGISTER</h2>
          <form
            className="form-control"
            action="file:///C:/Users/sachi/OneDrive/Desktop/WEB%20PAGE/Complain.html"
          >
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
    );
  }
}

export default Signup;
