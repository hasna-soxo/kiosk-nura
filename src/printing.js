import React from "react";
import healthimg_1 from "./assets/health_2.png";
import bgimage from "./assets/background_img.png";
function Nextstate(){
    return(
        <div className="first_container"
                style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // width: "100%",
        // height: "130vh",
        borderRadius: "20",
        backgroundColor: "rgb(244 248 249)",
      }}>
        <div second_container>
        <img src={healthimg_1}  alt="health_pic" />
        </div>
        <div>
            <p>YOUR WRIST BAND HAS BEEN PRINTED.PLEASE COLLECT.</p>
        </div>
        </div>
    )
}
export default Nextstate;