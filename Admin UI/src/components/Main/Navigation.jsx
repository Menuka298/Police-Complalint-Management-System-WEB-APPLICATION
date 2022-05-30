import React from "react";
import "../../assets/css/CustomCSS/Navigation.css";

//class NormalComplaintList extends React.Componen
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: 0 };
  }

  componentDidMount = () => {
    const config = localStorage.getItem("token");
    const usertype = localStorage.getItem("usertype");
    this.setState({ user: usertype });

    //console.log("User Type : " + usertype);

    if (config === null) {
      window.location.href = "/";
    }
  };

  btnLogoutClick = (e) => {
    var answer = window.confirm("Are you sure you want to Logout ?");
    if (answer) {
      localStorage.clear();
      window.location.href = "/";
    } else {
      //some code
    }
  };

  btnAddUserClick = (e) => {
    window.location.href = "/Register";
  };

  render() {
    const isLoggedIn = this.state.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              {(() => {
                if (isLoggedIn == 1) {
                  return (
                    <li className="nav-item">
                      <button
                        className="nav-link btn btn-success mr-1"
                        onClick={this.btnAddUserClick}
                      >
                        <i class="bi bi-person-plus-fill"></i>
                        <span style={{ paddingLeft: 5 }}>Add User</span>
                      </button>
                    </li>
                  );
                } else {
                  return <h6></h6>;
                }
              })()}

              <li className="nav-item">
                <button
                  className="nav-link btn btn-danger"
                  onClick={this.btnLogoutClick}
                >
                  <i class="bi bi-arrow-right-circle-fill " fill="currentColor"></i>
                  <span style={{ paddingLeft: 5 }}>Sign Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;
