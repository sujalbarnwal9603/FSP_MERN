import React from "react";
import { useState } from "react";

function Services(){

    const [value, setValue]= useState(0);
    const handleIncrement=()=>{
        setValue(value+1);
    }
    const handleDecrement=()=>{
        setValue(value-1);
    }
    console.log("Value", value);
    


    return(
    <div className="services">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Current Value: {value}</p>
    </div>
    )
}
export default Services;