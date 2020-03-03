import React, { useState, useEffect } from "react";
import "./Main.css";

import TopImage from "../assets/background.jpg";

function TopLevel({handleChange,handleSubmit,formSubmitted}) {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? TopImage : TopImage;

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="top center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container">
        <div className="nav">BirdView Travels</div>
        <div className="top-content">
          <h3>Where do you want to go?</h3>
          <h5>Fill this form and our manager will contact you</h5>
        </div>
        
          {formSubmitted ? 
            <div className="card"> <h3>Your form was successfully sumitted, our manager will contact you very soon</h3> </div>
            :
            <div className="form">
        <div className="row top-div">
          <div className="col s3 m3 white margin-b">
            <input type="text" placeholder="Destination, city" onChange={handleChange}
            id="city"/>
          </div>
          <div className="col s3 m3  white margin-left ">
            <input type="date" placeholder="Date" onChange={handleChange}
            id="date"/>
          </div>
          <div className="col s3 m3 white margin-left">
            <input type="text" placeholder="Phone Number" onChange={handleChange}
            id="mobile" />
          </div>
          <div className="col margin-left">
            <button onClick={handleSubmit} type="submit" value="submit" className="button button:hover button:focus">
              Request
            </button>
          </div>
          </div>
          </div>
          }
        
        
        
      </div>
    </div>
  );
}
export default TopLevel;
