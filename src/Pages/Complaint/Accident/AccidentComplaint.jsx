import React, { Component, useState, useEffect } from "react";
import axios from "axios";

export default class AccidentComplaint extends Component {
    constructor(props) {
      super(props);
      this.state = {
        District: "",
        PoliceStation: "",
        Catagory: "",
        Name: "",
        DrivingLicence: "",
        VehicleNumber: "",
        Email: "",
        Address: "",
        ComplainType: 0,
        ContactNo: "",
        Attachment: "",
        Attachmentfile: "",
        NIC: "",
        AccidentComplaint: "",
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
  
      const AccidentComplaint = {
        District: this.state.District,
        PoliceStation: this.state.PoliceStation,
        Catagory: this.state.Catagory,
        Name: this.state.Name,
        VehicleNumber:this.state.VehicleNumber,
        DrivingLicence:this.state.DrivingLicence,
        ContactNo: this.state.ContactNo,
        Email: this.state.Email,
        Address: this.state.Address,
        NIC: this.state.NIC,
        AccidentComplaint: this.state.AccidentComplaint,
        Attachmentfile: formData,
      };
  
      formData.append("Attachmentfile", this.state.Attachmentfile);
      formData.append("District", this.state.District);
      formData.append("PoliceStation", this.state.PoliceStation);
      formData.append("Catagory", this.state.Catagory);
      formData.append("Email", this.state.Email);
      formData.append("VehicleNumber", this.state.VehicleNumber);
      formData.append("DrivingLicence", this.state.DrivingLicence);
      formData.append("ContactNo", this.state.ContactNo);
      formData.append("NIC", this.state.NIC);
      formData.append("Complaint", this.state.AccidentComplaint);
      formData.append("Address", this.state.Address);
      formData.append("Name", this.state.Name);
  
      console.log(this.state);
  
      axios({
        method: "post",
        url: "https://localhost:7257/api/AccidentCompalint",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data; boundary=${form._boundary}",
          Accept: "*/*",
        },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          if (response.status === 200) {
            alert("Successfully Saved");
            window.location.reload(false);
          }
        })
        .catch(function (response) {
          //handle error
          console.log(response);
          if (response.status === 500) {
            alert("Internal Server Error");
          } else if (response.status === 500) {
            alert("Bad Request");
          }
        });
  
      /*
      axios
        .post("https://localhost:7257/api/AccidentComplaint", this.state.Name)
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
        District,
        PoliceStation,
        Catagory,
        Name,
        DrivingLicence,
        VehicleNumber,
        Email,
        Address,
        ComplainType,
        ContactNo,
        Attachment,
        Attachmentfile,
        NIC,
        AccidentComplaint,
      } = this.state;
  return (
    <div>
        <div class="form">
      <div className='Home'>
        <h1>Police complaint Manegment System</h1>
    <h2>ENTER YOUR ACCIDENT COMPLAIN</h2>

    <p>ආයුබෝවන්...</p>
    <p>අනතුරු සම්බන්ධ පැමිණිල්ලක් ඉදිරිපත් කිරීමට පහත තොරතුරු ඇතුලත් කරන්න</p>
      </div>
    
    <div>
    <form method="POST" onSubmit={this.OnCreateComplaint}>
          <div className="row">
              <div className="col-md-6">
         <br/><br/>

         <label className="form-label"> ඔබ අනතුරට ලක් වූ ප්‍රදේශය තෝරන්න 
           (Select the area where you were injured)    :  </label>
         <select className="form-control"
                  required
                  name="District"
                  //value={District}
                  onChange={this.ChangeHandler}>
             <option value="kandy">Kandy</option>
             <option selected> Colombo</option>
             <option>Matale</option>
             <option>Kurunagala</option>
             <option>Kaluthara</option>
             <option>Nuwaraeliya</option>
             <option>jaffna</option>
             <option>Galley</option>
             <option>Hambanthota</option>
         </select>

         <br/><br/>

         <label className="form-label"> ඔබ අනතුරට ලක් වූ ප්‍රදේශයේ පොලිස් ස්ථානය තෝරන්න 
           (Select the police station in the area where you were injured)    :  </label>
         <select className="form-control"
                  required
                  name="PoliceStation"
                  //value={PoliceStation}
                  onChange={this.ChangeHandler}>
             <option value="kandy">Kandy</option>
             <option selected> Colombo</option>
             <option>Matale</option>
             <option>Kurunagala</option>
             <option>Kaluthara</option>
             <option>Nuwaraeliya</option>
             <option>jaffna</option>
             <option>Galley</option>
             <option>Hambanthota</option>
         </select>

         <br/>
         <label className="form-label">Select Your Complain Catageroy   :  </label>
         <select className="form-control"
                  name="Catagory"
                  //value={Catagory}
                  onChange={this.ChangeHandler}> 
             <option selected>වාහන අනතුරක් - vehicle crash</option>
             <option>අධිවේගී මාර්ගයේ සිදු වූ අනතුරක් සම්බන්ධයෙන් - In connection with an accident on the highway</option>
             <option>දේපල හානියක් හෝ ජිවිත හානියක් සම්බන්ධ අනතුරක්  - Damage to property or loss of life. </option>
             <option>සතෙක් මාර්ගය හරහා පැනීම නිසා මාර්ගයේ සිදු වූ අනතුරක් - An accident caused by an animal jumping across the road</option>
             <option>වාහනය මාර්ගය මත ලිස්සා යාම නිසා සිදු වූ අනතුරක් - An accident caused by a vehicle slipping on the road</option>
             <option>යතුරුපැදි අනතුරු - Motorcycle Accidents</option>
         </select>

         <br/>
         <label className="form-label"> ඔබගේ නම ඇතුලත් කරන්න Enter Your Name  : </label>
         <input className="form-control"
                  type="text"
                  name="Name"
                  //value={Name}
                  placeholder="Full name"
                  required
                  onChange={this.ChangeHandler}/>

         <br/>
         <label className="form-label">ඔබගේ රියදුරු බලපත්‍ර අංකය Your driver's license number  : </label>
         <input  className="form-control"
                  name="DrivingLicence"
                  type="text"
                  placeholder="xxx-xxx-xxxx"
                  required
                  //value={DrivingLicence}
                  onChange={this.ChangeHandler}/>

         <br/>
         <label className="form-label">ඔබගේ වාහන ලියාපදිංචි අංකය ඇතුලත් කරන්න Enter Your Vehicle number plate  : </label>
         <input  className="form-control"
                  name="VehicleNumber"
                  type="text"
                  placeholder="cp-BCK-xxxx"
                  required
                  //value={VehicleNumber}
                  onChange={this.ChangeHandler}/>

         <br/>
         <label className="form-label">ඔබගේ දුරකථන අංකය ඇතුලත් කරන්න Enter Your Telephone Number  : </label>
         <input  className="form-control"
                  name="ContactNo"
                  type="text"
                  placeholder="07X-xxx-xxxx"
                  required
                  //value={ContactNo}
                  onChange={this.ChangeHandler}/>

         <br/>
         <label>ඔබගේ ඊමේල් අංකය ඇතුලත් කරන්න Enter Your E-mail Adress  : </label>
         <input className="form-control"
                  name="Email"
                  type="text"
                  placeholder="_________@example.com"
                  required
                  //value={Email}
                  onChange={this.ChangeHandler}/>

         <br/>
         <label className="form-label">ඔබගේ ලිපිනය ඇතුලත් කරන්න Enter Your Adress  :  </label><br/>
         <textarea className="form-control"
                  cols="30"
                  rows="5"
                  required
                  name="Address"
                  // value={Address}
                  onChange={this.ChangeHandler}/>

         <br/>
         <label className="form-label">ඔබගේ පැමිණිල්ල ඉදිරිපත් කරන්න Enter Your Complaint  :  </label><br/>
         <textarea className="form-control"
                  name="AccidentComplaint"
                  cols="100"
                  rows="9"
                  required //value={NormalComplaint}
                  onChange={this.ChangeHandler}/>

         <br/>
         <label className="form-label">
                  {" "}
                  ඔබගේ පැමිණිල්ලට අවශ්‍යය සාක්ෂියක් වේ නම් මෙහි එය අමුණා එවන්න
                  (If you have any document or image related to the complaint, Please attach to this complaint. Maximum attachment size is 5MB. )
                </label>
                <input
                  className="form-control"
                  type="file"
                  name="Attachmentfile"
                  onChange={this.ChangeHandlerImage}
                  accept=".jpg, .png"
                  //value={Attachmentfile}
                />

         <br/>
         <label className="form-label">පැමිණිල්ලට අදාල තොරතුරු සියල්ල ඉදිරිපත් කර ඇත්නම් ඔබගේ පැමිණිල්ල ඉදිරිපත් කිරීමට මෙය කිලික් කරන්න 
           Submit Your Complaint  : </label>
           <button type="submit" className="btn btn-primary me-1">
                  Submit Complaintd
                </button>

         <br/>
         <label className="form-label"> ඇතුලත් කරන ලද තොරතුරු සියල්ල මකා දමන්න Clear All Entries  : </label><br/>
         <button type="reset" value="Clear all entries" className="btn btn-primary me-1" >
            Clear All Entries
                </button>
         </div>
        </div>
      </form>
    </div>

 </div>
    </div>
  );
 }
}
