import React from "react";
import bgimage from "./assets/background_img.png";
import logoimg from "./assets/logo_1.png";
import helthimg from "./assets/health_1.png";
import "./App.scss";
function Newstate() {
  return (
    <div
      className="main_div"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="logo_newstate">
        <img src={logoimg} className="img" alt="logo_pic" />
      </div>
      <div className="healthimg_div">
        <img src={helthimg} alt="health_pic" className="health" />
      </div>
      <div className="content_div">
        <h3 className="content">
          YOUR WRIST BAND IS GENERATING.<br></br>KINDLY PLEASE WAIT.
        </h3>
      </div>
    </div>
  );
}
export default Newstate;
