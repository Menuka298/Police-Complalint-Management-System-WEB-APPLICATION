import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/CustomCSS/SideNavigation.css";
import "../../assets/js/SideNavigation.js";
import logo from "../../../src/assets/images/logo.jpg"; // use props to get the image and nav bar color from the db

class SideNavigation extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="logo" />
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/Main">
              <i className="bi bi-house-fill"></i>
              <span style={{ paddingLeft: 5 }}>Home</span>
            </Link>
          </li>
          <li>
            <a
              href="#StudentSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i class="bi bi-briefcase-fill"></i>
              <span style={{ paddingLeft: 5 }}> Complaints</span>
            </a>
            <ul className="collapse list-unstyled" id="StudentSubmenu">
              <li>
                <Link to="/NormalComplaintList">
                  <i class="bi bi-arrow-right-circle-fill"></i>
                  <span style={{ paddingLeft: 5 }}>Normal Complaints</span>
                </Link>
              </li>
              <li>
                <Link to="/AccidentComplaintList">
                  <i class="bi bi-arrow-right-circle-fill"></i>
                  <span style={{ paddingLeft: 5 }}>Accident Complaints</span>
                </Link>
              </li>
              <li>
                <Link to="/NoneRegisterCompalintList">
                  <i class="bi bi-arrow-right-circle-fill"></i>
                  <span style={{ paddingLeft: 5 }}>
                    {" "}
                    Non-Register Complaints
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/AnonymousComplaintList">
                  <i class="bi bi-arrow-right-circle-fill"></i>
                  <span style={{ paddingLeft: 5 }}> Anonymous Complaints</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* <ul class="list-unstyled CTAs">
                    <li>
                        <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                    </li>
                    <li>
                        <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                    </li>
                </ul> */}
      </nav>
    );
  }
}

export default SideNavigation;
