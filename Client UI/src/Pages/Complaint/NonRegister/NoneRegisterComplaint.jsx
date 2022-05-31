import React, { Component } from "react";
import axios from "axios";

export default class NoneRegisterComplaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      District: "",
      PoliceStation: "",
      Catagory: "",
      Name: "",
      Email: "",
      Address: "",
      ComplainType: 0,
      ContactNo: "",
      Attachment: "",
      Attachmentfile: "",
      NoneRegisterComplaint: "",
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

    const _Complaint = {
      District: this.state.District,
      PoliceStation: this.state.PoliceStation,
      Catagory: this.state.Catagory,
      Name: this.state.Name,
      ContactNo: this.state.ContactNo,
      Email: this.state.Email,
      Address: this.state.Address,
      NoneRegisterComplaint: this.state.NoneRegisterComplaint,
      Attachmentfile: formData,
    };

    formData.append("Attachmentfile", this.state.Attachmentfile);
    formData.append("Disctrict", this.state.District);
    formData.append("PoliceStation", this.state.PoliceStation);
    formData.append("Catageroy", this.state.Catageroy);
    formData.append("Email", this.state.Email);
    formData.append("TelephoneNumber", this.state.ContactNo);
    formData.append("Complaint", this.state.NoneRegisterComplaint);
    formData.append("Address", this.state.Address);
    formData.append("Name", this.state.Name);

    console.log(this.state);

    axios({
      method: "post",
      url: "https://localhost:7257/api/NonRegisterComplaints",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data; boundary=${form._boundary}",
        Accept: "*/*",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.status == 201) {
          alert("Successfully Saved");
          window.location.reload(false);
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        if (response.status == 500) {
          alert("Internal Server Error");
        } else if (response.status == 500) {
          alert("Bad Request");
        }
      });

    /*
      axios
        .post("https://localhost:7257/api/Complaints", this.state.Name)
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
      Email,
      Address,
      ComplainType,
      ContactNo,
      Attachment,
      Attachmentfile,
      NIC,
      NormalComplaint,
    } = this.state;

    return (
      <div class="form">
        <div className="Home">
          <h1>Police complaint Manegment System</h1>
          <h2>ENTER YOUR NONEREGISTER COMPLAIN</h2>

          <p>ආයුබෝවන්...</p>
          <p>ඔබගේ පැමිණිල්ල ඉදිරිපත් කිරීමට පහත තොරතුරු ඇතුලත් කරන්න</p>
        </div>

        <div>
          <form method="POST" onSubmit={this.OnCreateComplaint}>
          <div className="row">
              <div className="col-md-6">

              <label className="form-label">
                  ඔබගේ දිස්ත්‍රික්කය තෝරන්න (Select your disctrict) :
                </label>
            <select className="form-control"
                  required
                  name="District"
                  //value={District}
                  onChange={this.ChangeHandler}
                  >
              <option value="kandy">Kandy</option>
              
              <option>Ampara</option>
              <option>Anuradhapura</option>
              <option>Badulla</option>
              <option selected> Colombo</option>
              <option>Dambulla</option>
              <option>Gampaha</option>
              <option>Galle</option>
              <option>Hambanthota</option>
              <option>jaffna</option>
              <option>Kagalle</option>
              <option>Kurunagala</option>
              <option>Kilinochchi</option>
              <option>Kaluthara</option>
              <option>Matale</option>
              <option>Mullaithivu</option>
              <option>Mannar</option>
              <option>Monaragala</option>
              <option>Nuwaraeliya</option>
              <option>Polonnaruwa</option>
              <option>Puththalama</option>
              <option>Trinco</option>
              <option>Rathnapura</option>
            </select>
            <br />

            <label className="form-label">
                  ඔබගේ දිස්ත්‍රික්කයේ පිහිටි පොලිස් ස්ථානය තෝරන්න (Select Your
                  Police Station) :
                </label>
            <select className="form-control"
                  required
                  name="PoliceStation"
                  //value={PoliceStation}
                  onChange={this.ChangeHandler}>
              <option value="kandy">Kandy</option>
              <option selected> Colombo</option>
              <option>Agarapathna</option>
	<option>Ahangama </option>
	<option>Ahungalla</option>
	<option>Akkaraipattu</option>
	<option>Akmeemana</option>
	<option>Akuressa</option>
	<option>Alampil</option>
	<option>Alawathugoda</option>
	<option>Alawwa</option>
	<option>Aluthgama</option>
	<option >Ambalangoda</option>
	<option >Ambalantota</option>
	<option >Ambanpola</option>
	<option >Ampara</option>
	<option >Anamaduwa</option>
	<option >Angulana</option>
	<option >Angunukolapelessa</option>
	<option >Anguruwatota</option>
	<option >Ankumbura</option>
	<option >Anuradhapura</option>
	<option >Aralaganvila</option>
	<option >Aranayaka</option>
	<option >Atchuvely </option>
	<option >Athurugiriya</option>
	<option >Avissawella</option>
	<option >Awissawella</option>
	<option >Ayagama</option>
	<option >Ayithiyamalai </option>
	<option >Badalkumbura</option>
	<option >Baddegama</option>
	<option >Badulla</option>
	<option >Baduraliya</option>
	<option>Bakamoona</option>
	<option >Bakkiella</option>
	<option >Balagolla</option>
	<option>Balangoda</option>
	<option>Bambalapitiya</option>
	<option >Bandaragama</option>
	<option >Bandarawela</option>
	<option >Batticaloa</option>
	<option>Beliatta</option>
	<option>Bentota</option>
	<option>Beruwala</option>
	<option>Bibila</option>
	<option >Bingiriya</option>
	<option >Biyagama</option>
	<option >Bogawanthalawa</option>
	<option >Boralesgamuwa</option>
	<option >Borella</option>
	<option >Bulathkohupitiya</option>
	<option >Bulathkohupitiya</option>
	<option >Bulathsinhala</option>
	<option >Buttala</option>
	<option >CCD</option>
	<option >Central Camp </option>
	<option >Chalai</option>
	<option >Chavakachcheri</option>
	<option >Chavalakade</option>
	<option >Chilaw</option>
	<option >China Bay</option>
	<option  >Chunnakam </option>
	<option  >CID</option>
	<option  >Cinnamon Garden</option>
	<option  >Colombo Fraud Investigation Bureau</option>
	<option  >Dam street</option>
	<option  >Damana</option>
	<option  >Dambagalla</option>
	<option  >Dambulla</option>
	<option >Dankotuwa</option>
	<option >Davulagala</option>
	<option >Dedigama</option>
	<option  >Dehiattakandiya</option>
	<option  >Dehiwala</option>
	<option  >Delft</option>
	<option  >Dematagoda</option>
	<option  >Deniyaya</option>
	<option  >Deraniyagala</option>
	<option  >Deraniyagala</option>
  <option  >Dickwella</option>
	<option  >Divulapathana</option>
	<option  >Divulapitiya</option>
	<option  >Diyathalawa</option>
	<option >Dodangoda</option>
	<option  >Dompe</option>
	<option  >Dummalasooriya</option>
	<option  >Eheliyagoda</option>
	<option  >Elephantpass</option>
	<option  >Ella</option>
	<option  >Elpitiya</option>
	<option >Embilipitiya</option>
	<option  >Eppawala</option>
	<option  >Eravur </option>
	<option  >Etampitiya</option>
	<option >Forshore</option>
	<option >Fort</option>
	<option  >Galagedara</option>
	<option >Galaha</option>
	<option >Galenbidunuwawe</option>
	<option >Galewela</option>
	<option >Galewela</option>
	<option >Galgamuwa</option>
	<option  >Galkiriyagama</option>
	<option  >Galle</option>
	<option  >Galle</option>
	<option    >Galle Harbour</option>
	<option   >Galnewa</option>
	<option   >Gampaha</option>
	<option  >Gampola</option>
	<option >Gandara</option>
	<option  >Ganemulla</option>
	<option  >Ginigathhena</option>
	<option  >Girandurukotte</option>
	<option >Giribawa</option>
	<option  >Giriulla</option>
	<option >Godakawela</option>
	<option >Gokarella</option>
	<option >Gomarankadawela</option>
	<option >Gonaganara</option>
	<option >Grandpass</option>
	<option >Habaraduwa</option>
            </select>
            <br />

            <label className="form-label">ඔබේ පැමිණිලි වර්ගය තෝරන්න (Select Your Complain Catageroy) : </label>
            <select className="form-control"
                  required
                  name="Catagory"
                  //value={PoliceStation}
                  onChange={this.ChangeHandler}>

              <option selected>Abuse of Women Or Children - කාන්තාවන් හෝ ළමුන් අපයෝජනය කිරීම</option>
	<option>Archeological Issue - පුරාවිද්‍යා ගැටලුව</option>
	<option >Assault - පහරදීම</option>
	<option >Bribery and Corruption - අල්ලස සහ දූෂණය</option>
	<option >Complaint against Police - පොලිසියට එරෙහි පැමිණිල්ල</option>
	<option>Criminal Offence - අපරාධ වරද</option>
	<option >Cybercrime - සයිබර් අපරාධ</option>
	<option >Demonstration / Protest / Strike - පෙළදීම / විරෝධතාව / වර්ජනය</option>
	<option >Environmental Issue - පාරිසරික ගැටළුව</option>
	<option >Exchange Fault - හුවමාරු දෝෂය</option>
	<option >Foreign Employment Issue - විදේශීය රැකියා ගැටලුව</option>
	<option >Frauds / Cheating - වංචා</option>
	<option >House Breaking - නිවස කැඩීම</option>
	<option >Illegal Mining - නීතිවිරෝධී පතල් කැණීම</option>
	<option >Industrial / Labour Dispute - කාර්මික / කම්කරු ආරවුල</option>
	<option>Intellectual Property Dispute - බුද්ධිමය දේපල ආරවුල</option>
	<option >Miscellaneous - විවිධ</option>
	<option >Mischief / Sabotage - අනර්ථය / කඩාකප්පල් කිරීම</option>
	<option >Murder - ඝාතනය</option>
	<option >Narcotics / Dangerous Drugs - මත්ද්‍රව්‍ය / භයානක ඖෂධ</option>
	<option >National Security - ජාතික ආරක්ෂාව</option>
	<option>Natural Disaster - ස්වාභාවික ව්‍යසනය</option>
	<option >Offence / Act against Public Health - මහජන සෞඛ්‍යයට එරෙහි වරද / පනත</option>
	<option>Offence against Public Property - පොදු දේපළවලට එරෙහි වරද</option>
	<option >Organized Crime - සංවිධානාත්මක අපරාධ</option>
	<option >Personal Complaint - පුද්ගලික පැමිණිල්ල</option>
	<option >Police Clearance - පොලිස් නිෂ්කාශනය</option>
	<option >Property Disputes - දේපල ආරවුල්</option>
	<option >Robbery - කොල්ලය</option>
	<option >Sexual Offences - ලිංගික වැරදි</option>
	<option >Terrorism Related - ත්‍රස්තවාදය සම්බන්ධ</option>
	<option >Theft - සොරකම්</option>
	<option >Threat / Intimidation තර්ජනය / බිය ගැන්වීම</option>
	<option >Tourist Harassment / සංචාරක හිරිහැර</option>
	<option >Traffic / Road Safety - රථවාහන සහ මාර්ග ආරක්ෂාව</option>
	<option >Treasure Hunting - නිධන් සෙවීම</option>
	<option >Vice Related - උප සම්බන්ධ</option>
	<option >Violation of Immigration Laws - ආගමන නීති උල්ලංඝනය කිරීම</option>
            </select>
            <br />


            <label className="form-label">
                  ඔබගේ නම ඇතුලත් කරන්න (Enter Your Name){" "} :
                </label>
            <input className="form-control"
                  type="text"
                  name="Name"
                  //value={Name}
                  placeholder="Full name"
                  required
                  onChange={this.ChangeHandler} />
            <br />


            <label className="form-label">
                  ඔබගේ දුරකථන අංකය ඇතුලත් කරන්න (Enter Your Telephone Number){" "} :
                </label>
            <input className="form-control"
                  name="ContactNo"
                  type="text"
                  placeholder="07X-xxx-xxxx"
                  required
                  //value={ContactNo}
                  onChange={this.ChangeHandler} />
            <br />

            <label className="form-label">
                  ඔබගේ ඊමේලය ඇතුලත් කරන්න (Enter Your E-mail Address) :
                </label>
            <input className="form-control"
                  name="Email"
                  type="text"
                  placeholder="_________@example.com"
                  required
                  //value={Email}
                  onChange={this.ChangeHandler} />
            <br />

            <label className="form-label">
                  ඔබගේ ලිපිනය ඇතුලත් කරන්න (Enter Your Address){" "} :
                </label>
            <br />
            <textarea className="form-control"
                  cols="30"
                  rows="5"
                  required
                  name="Address"
                  // value={Address}
                  onChange={this.ChangeHandler} />
            <br />

            <label className="form-label">
                  ඔබගේ පැමිණිල්ල ඉදිරිපත් කරන්න (Enter Your Complaint){" "} :
                </label>
            <br />
            <textarea className="form-control"
                  name="NoneRegisterComplaint"
                  cols="100"
                  rows="9"
                  required //value={NormalComplaint}
                  onChange={this.ChangeHandler} />
            <br />

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

            <br />
            <label className="form-label">පැමිණිල්ලට අදාල තොරතුරු සියල්ල ඉදිරිපත් කර ඇත්නම් ඔබගේ පැමිණිල්ල
              ඉදිරිපත් කිරීමට මෙය කිලික් කරන්න 
              (Submit Your Complaint) : </label> <br />
              <button type="submit" className="btn btn-primary me-1">
                  Submit Complaintd
                </button>
            <br />
            <br />
            <label className="form-label">ඇතුලත් කරන ලද තොරතුරු සියල්ල මකා දමන්න 
            (Clear All Entries) : </label> <br />
            <button type="reset" value="Clear all entries" className="btn btn-primary me-1" >
            Clear All Entries
                </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
