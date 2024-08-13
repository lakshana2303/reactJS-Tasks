
import React from "react";

export function Personal() {


    let form = () => {
        let name = document.getElementById('person').value;
        let age = document.getElementById('person').value;
        let num = document.getElementById('person').value;
        let email = document.getElementById('person').value;
        let dob = document.getElementById('person').value;
        let city = document.getElementById('person').value;
    }
    return (
        <>
            <center>
                <h1> Personal Details</h1><br></br>
                <label>Name</label> <input type="text" id="person" name="person" /><br /><br/>
                <label>Age</label> <input type="number" id="person" /><br /><br/>
                <label>DOB</label> <input type="date" id="person" /><br /><br/>
                <label>Mail id</label> <input type=" mail" id="person" /><br /><br/>
                <label>City</label> <input type="text" id="person" /><br /><br/>
                <label>Country</label> <input type="text" id="person" /><br /><br/>
                <label>Pincode</label> <input type="number" id="person" /><br /><br/>
                <label>Phone</label> <input type="number" id="person" />
            </center>
            </>
    );
}
