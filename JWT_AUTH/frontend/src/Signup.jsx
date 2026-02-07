import React from "react";

function Signup(){
    const handleSignUp=async(e)=>{
        e.preventDefault();
        const {name, email, password}= signupInfo;
        try{
            const url=``;
            const response=await fetch(url, {
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body: JSON.stringify
            })
        }
    }
}