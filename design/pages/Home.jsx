import React from "react";
import naruto from "../src/assets/naruto.png";
import './Home.css'


function Home(){
    return(
    <div className="home">
      
      <img src={naruto} alt="Naruto" width="100%"/>
      <p className="para">Feel free to explore our website!</p>
      <div className="image-row">
        <img src={naruto} alt="Naruto"  width="100%"/>
        <img src={naruto} alt="Naruto"width="100%"/>
        <img src={naruto} alt="Naruto"width="100%"/>
        <img src={naruto} alt="Naruto"width="100%"/>
      </div>
    </div>
    )
}
export default Home;