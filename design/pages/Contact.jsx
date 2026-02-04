import React,{useState, useRef} from "react";
import { Link, Outlet } from "react-router-dom";
import './Accounts.jsx'


function Contact() {

    const [value, setValue] = useState("");
    const [data, setData] = useState(null);
    const inputRef = useRef(null);    

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputRef.current.value);
        setData(inputRef.current.value);
    }
    return (
        <div style={{ textAlign: "center", marginTop: "18px", padding: "12px" }}>
            <Link to="profile" style={{ padding: "14px", backgroundColor: "coral" }}>Profile</Link>
            <Link to="accounts" style={{ padding: "14px", backgroundColor: "coral" }}>Accounts</Link>
            <Outlet></Outlet>

            <hr />

            <form>
                <input type="text"
                    name='name'
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter Name" />
                <button type="submit">Click</button>
            </form>
            <h3>{value}</h3>
            <hr />
            <h2>Uncontrolled Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} placeholder="Enter name" />
                <button type="submit">Click</button>
            </form>
            <h3>{data}</h3>


        </div>
    )
}
export default Contact;