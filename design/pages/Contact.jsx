import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Accounts.jsx'


function Contact(){
    return(
    <div style={{textAlign:"center", marginTop:"18px", padding:"12px"}}>
        <Link to="profile" style={{padding:"14px", backgroundColor:"coral"}}>Profile</Link>
        <Link to="accounts" style={{padding:"14px", backgroundColor:"coral"}}>Accounts</Link>
        <Outlet></Outlet>
    </div>
    )
}
export default Contact;