import React, { Component } from "react";
import "../../assets/css/CustomCSS/Main.css";
import Navigation from "./Navigation";
import SideNavigation from "./SideNavigation";
import Home from "./Home";

class Main extends Component {
  
  componentDidMount = () => {

    const config = localStorage.getItem('token');
    //const usertype = localStorage.getItem('usertype');

    //console.log("User Type : "+usertype);

    if(config === null)
    {
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div className="wrapper">
        <SideNavigation />
        <div id="content">
          <Navigation />
          <div className="line">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
