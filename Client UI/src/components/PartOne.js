import React from 'react';
import './PartOne.css';

export default function PartOne() {
  return (
    <div class="form">

       <h1>Police complaint Manegment System</h1>
       <h2>ENTER YOUR COMPLAIN</h2>

       <p>ආයුබෝවන්...</p>
       <p>ඔබගේ පැමිණිල්ල ඉදිරිපත් කිරීමට පහත තොරතුරු ඇතුලත් කරන්න</p>
       <div>
         <form method="GET">

            <br/>
            <h>ඔබගේ දිස්ත්‍රික්කය තෝරන්න</h><br/>
            <label>Select your disctrict   :  </label> <select value="selectyour dsitrcit" required>
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

            <h>ඔබගේ දිස්ත්‍රික්කයේ පිහිටි පොලිස් ස්ථානය තෝරන්න</h><br/>
            <label>Select Your Police Station    :  </label>
            <select required>
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
            <h></h>
            <label>Select Your Complain Catageroy   :  </label>
            <select> 
				<option selected>Abuse of Women Or Children</option>
				<option> Colombo</option>
				<option>Matale</option>
				<option>Kurunagala</option>
				<option>Kaluthara</option>
				<option>Nuwaraeliya</option>
				<option>jaffna</option>
				<option>Galley</option>
				<option>Hambanthota</option>
            </select>

            <br/><br/>
            <h>ඔබගේ නම ඇතුලත් කරන්න</h><br/>
            <label>Enter Your Name  : </label>
            <input type="text" placeholder="Full name" required/>

            <br/><br/>
            <h>ඔබගේ දුරකථන අංකය ඇතුලත් කරන්න</h><br/>
            <label>Enter Your Telephone Number  : </label>
            <input type="text" placeholder="07X-xxx-xxxx" required/>

            <br/><br/>
            <h>ඔබගේ ඊමේල් අංකය ඇතුලත් කරන්නඔබගේ ඊමේල් අංකය ඇතුලත් කරන්න</h><br/>
            <label>Enter Your E-mail Adress  : </label>
            <input type="text" placeholder="_________@example.com" required/>

            <br/><br/>
            <h>ඔබගේ ලිපිනය ඇතුලත් කරන්න</h><br/>
            <label>Enter Your Adress  :  </label><br/>
            <textarea cols="30" rows="3" maxlength="50" required/>

            <br/><br/>
            <h>ඔබගේ පැමිණිල්ල ඉදිරිපත් කරන්න</h><br/>
            <label>Enter Your Complaint  :  </label><br/>
            <textarea cols="100" rows="10" required/>

            <br/><br/>
            <h>ඔබගේ පැමිණිල්ලට අවශ්‍යය සාක්ෂියක් වේ නම් මෙහි එය අමුණා එවන්න</h><br/>
            <label>Attachment (If you have any document or image related to the complaint, Please attach to this complaint. Maximum attachment size is 5MB. )  : </label>
            <input type="file" name="attachment file"/>

            <br/><br/>
            <h>පැමිණිල්ලට අදාල තොරතුරු සියල්ල ඉදිරිපත් කර ඇත්නම් ඔබගේ පැමිණිල්ල ඉදිරිපත් කිරීමට මෙය කිලික් කරන්න</h><br/>
            <label>Submit Your Complaint  : </label>
            <input type="submit"/>

            <br/><br/>
            <h>ඇතුලත් කරන ලද තොරතුරු සියල්ල මකා දමන්න</h><br/>
            <label>Clear All Entries  : </label>
            <input type="reset" value="Clear all entries"/>
         </form>
       </div>

    </div>
  )
}


