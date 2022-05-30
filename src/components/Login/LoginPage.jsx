import React from "react";
import logo from "../../../src/assets/images/logo.jpg";
import axios from "axios";

class LoginPage extends React.Component {
  state = { username: "", password: "" };

  btnSignin = (e) => {
    //console.log(this.state);

    axios
      .get(
        "https://localhost:7257/api/user/GetUserByUserName/" +
          this.state.username +
          "/" +
          this.state.password
      )
      .then((response) => {
        //console.log(response);
        if (response.status == 200) {
          localStorage.setItem("token",response.data.password);
          localStorage.setItem("usertype",response.data.userType);

          window.location.href = "/Main";
        } else {
          alert("User Name or Password incorrect.Please check again!");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
          <div class="mb-3">
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="user name"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={this.btnSignin}
          >
            Sign in
          </button>
          {/* <Link to="/Main" className="btn btn-primary btn-block mb-4">
            Sign In
          </Link> */}
        </form>
      </div>
    );
  }
}

export default LoginPage;
