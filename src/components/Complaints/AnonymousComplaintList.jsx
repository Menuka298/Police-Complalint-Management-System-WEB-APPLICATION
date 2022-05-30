import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideNavigation from "../Main/SideNavigation";
import Navigation from "../Main/Navigation";

class AnonymousComplaintList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }
  componentDidMount() {

    const config = localStorage.getItem('token');
    if(config === null)
    {
      window.location.href = "/";
    }

    axios
      .get("https://localhost:7257/api/AnonymousComplaint")
      .then((response) => {
        console.log(response);
        this.setState({ business: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  btnUpdateClick = (e) => {
    var answer = window.confirm(
      "Are you sure you want to update the complait status?"
    );
    if (answer) {
      var complaintid = e.target.id;
      console.log(complaintid);

      axios
        .put("https://localhost:7257/api/AnonymousComplaint/" + complaintid)
        .then((response) => {
          //this.setState({ business: response.data });
          console.log(response);
          if (response.status == 200) {
            alert("States updated successfully.");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      //some code
    }
  };

  btnUndoClick = (e) => {
    var answer = window.confirm(
      "Are you sure you want to Undo the complait status?"
    );
    if (answer) {
      var complaintid = e.target.id;
      console.log(complaintid);

      axios
        .put(
          "https://localhost:7257/api/AnonymousComplaint/UndoAnonymousComplaintStatus/" +
            complaintid
        )
        .then((response) => {
          //this.setState({ business: response.data });
          console.log(response);
          if (response.status == 200) {
            alert("States updated successfully.");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      //some code
    }
  };


  render() {
    return (
      <div className="wrapper">
        <SideNavigation />
        <div id="content">
          <Navigation />
          <div className="line">
            <h4 align="center">Anonymous Complaints List</h4>
            <table className="table table-striped" style={{ marginTop: 10 }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Complaint</th>
                  <th colSpan="4">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.business.map((item) => {
                  return (
                    <tr>                    
                      <td>{new Date(item.date).toLocaleDateString("US")}</td>
                      <td>{item.complaint}</td>
                      <td>
                        <Link
                          to={{
                            pathname: "/ViewAnonymousComplaint/" + item.id,
                            id: { id: item.id },
                          }}
                          className="btn btn-success mr-1"
                        >
                          View
                        </Link>
                        <button
                          id={item.id}
                          className="btn btn-primary mr-1"
                          onClick={this.btnUpdateClick}
                        >
                          Update
                        </button>
                        <button
                          id={item.id}
                          className="btn btn-danger"
                          onClick={this.btnUndoClick}
                        >
                          Undo
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default AnonymousComplaintList;
