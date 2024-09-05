import React,{useState} from "react";
import "./styles/cartTable.css"
function AccountComponent(){
    return <div className="account-info">
        <h1>Your Account :</h1>

        <div className="account-info-table">
            <tr>
                <th>Your Account : </th>
                <td>User</td>
            </tr>
            <tr>
                <th>Email : </th>
                <td>User@example.com</td>
            </tr>
            <tr>
                <th>Mobile : </th>
                <td>9876543210</td>
            </tr>
        </div>

        <div className="account-info-edit flex-div">
            <button className="button-31">
                Edit info
            </button>
            <button className="button-31">
                Change Password
            </button>
        </div>

    </div>;
}

export default AccountComponent;