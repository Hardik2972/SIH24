import React, { useState } from "react";
import './styles/admin.css'
import './styles/profile.css'
import { MdDashboard } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import AdminMuseumForm from "./AdminMuseumForm";
import Dashboard from "./Dashboard";

function AdminDiv() {
    
    const [show,setShow] = useState("dashboard");


    const adminLinks = [{ "text": "Dashboard" , "func": ()=>setShow("dashboard") }, { "text": "Form", "func":()=>setShow("form") }];
    

    
    return <div className="admin-div flex-div">
        <div className="admin-profile-box brown-grad flex-div">
        <h1>ADMIN</h1>
        <div className="admin-links">
            <div className="flex-div" onClick={adminLinks[0].func}>
                <MdDashboard />
                <a >{adminLinks[0].text}</a>
            </div>
            <div className="flex-div" onClick={adminLinks[1].func}>
                <FaWpforms />
                <a >{adminLinks[1].text}</a>
            </div>
        </div>


    </div>
        {show==="form"&& <AdminMuseumForm />}
        {show==="dashboard"&& <Dashboard /> }
    </div>;
}

export default AdminDiv;