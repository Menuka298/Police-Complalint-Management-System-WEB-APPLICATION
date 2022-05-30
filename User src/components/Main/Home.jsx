import React, { Component } from "react";
import Normalcomplaints from "../../../src/assets/images/Normalcomplaints.jpg";
import Accidentcomplaints from "../../../src/assets/images/Accidentcomplaints.jpg";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NormalComolaintCount: 0,
      NormalCheckedCount: 0,
      AccComplaintCount: 0,
      AccComplaintCheckedCount: 0,
      NonRegComplaintsCount: 0,
      NonRegComplaintsCheckedCount: 0,
      AnnCompalintCount: 0,
      AnnComplaintCheckedCount: 0,
    };
  }

  componentDidMount = () => {

    const config = localStorage.getItem('token');
    if(config === null)
    {
      window.location.href = "/";
    }


    //*Get Details About Normal Complaints *//
    axios
      .get("https://localhost:7257/api/Complaints/GetComplaintsCount",config)
      .then((response) => {
        this.setState({ NormalComolaintCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("https://localhost:7257/api/Complaints/GetComplaintsCheckedCount")
      .then((response) => {
        this.setState({ NormalCheckedCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    //*****//

    //*Get Details About Accident Complaints *//
    axios
      .get(
        "https://localhost:7257/api/AccidentCompalint/GetAccidentComplaintsCount"
      )
      .then((response) => {
        this.setState({ AccComplaintCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(
        "https://localhost:7257/api/AccidentCompalint/GetAccidentComplaintsCheckedCount"
      )
      .then((response) => {
        this.setState({ AccComplaintCheckedCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });
    //*****//

    //*Get Details About Non-Register Complaints *//
    axios
      .get(
        "https://localhost:7257/api/NonRegisterComplaints/GetNonRegisterComplaintsCount"
      )
      .then((response) => {
        this.setState({ NonRegComplaintsCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(
        "https://localhost:7257/api/NonRegisterComplaints/GetNonRegisterComplaintsCheckedCount"
      )
      .then((response) => {
        this.setState({ NonRegComplaintsCheckedCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    //*****//

    //*Get Details About Anonymous Complaints *//
    axios
      .get(
        "https://localhost:7257/api/AnonymousComplaint/GetAnonymousComplaintsCount"
      )
      .then((response) => {
        this.setState({ AnnCompalintCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(
        "https://localhost:7257/api/AnonymousComplaint/GetAnonymousComplaintsCheckedCount"
      )
      .then((response) => {
        this.setState({ AnnComplaintCheckedCount: response.data });
        //debugger;
      })
      .catch(function(error) {
        console.log(error);
      });

    //*****//
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Normal Complaints</h5>
                {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" className="btn btn-primary">
                      Total :{this.state.NormalComolaintCount}
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-dark">
                      Checked :{this.state.NormalCheckedCount}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Accident Complaints</h5>
                {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" className="btn btn-primary">
                      Total :{this.state.AccComplaintCount}
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-dark">
                      Checked :{this.state.AccComplaintCheckedCount}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Non-Register Complaints</h5>
                {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" className="btn btn-primary">
                      Total :{this.state.NonRegComplaintsCount}
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-dark">
                      Checked :{this.state.NonRegComplaintsCheckedCount}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Anonymous Complaints</h5>
                {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" className="btn btn-primary">
                      Total :{this.state.AnnCompalintCount}
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-dark">
                      Checked :{this.state.AnnComplaintCheckedCount}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
