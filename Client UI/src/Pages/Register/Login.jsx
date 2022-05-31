import React from "react";
import logo from "../../../src/assets/images/Logo.png"
import axios from "axios";

class Login extends React.Component {
  state = { nic: "", password: "" };

  btnSignin = (e) => {
    //window.location.href = "/NormalComplaint";
    //console.log(this.state);

    axios
      .get(
        "https://localhost:7257/api/user/GetUserByNic/" +
          this.state.nic +
          "/" +
          this.state.password
      )
      .then((response) => {
        //console.log(response);
        if (response.status == 200) {
          window.location.href = "/NormalComplaint";
        } else {
          alert("Incorrect Password or NIC.Please check!");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  btnSignup = (e) => {
    //console.log(this.state);
    window.location.href = "/Register";
    
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="col-md-3" style={{ marginLeft: 500, marginTop: 50 }}>
        <form>
          <div className="d-flex justify-content-center">
            <img
              src={logo}
              alt="logo"
              className="card-img-top"
              style={{ height: 250, width: 300 }}
            />
          </div>

          <div className="d-flex justify-content-center">
            <h1>Login</h1>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="nic"
              placeholder="NIC"
              name="nic"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="row" style={{paddingLeft:45}}>
          <button
            type="button"
            className="btn btn-primary btn-block col-md-5 me-1"
            onClick={this.btnSignin}
            
          >
            Sign in
          </button>       
          <button
            type="button"
            className="btn btn-success btn-block col-md-5 ml-1"
            onClick={this.btnSignup}
          >
            Sign Up
          </button>
          </div>         
        </form>
      </div>
    );
  }
}

export default Login;
