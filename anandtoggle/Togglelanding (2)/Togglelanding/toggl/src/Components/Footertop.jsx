import React from "react";
import Top from "./Images/top.png";
import "./footertop.css";
import { Heading } from "@chakra-ui/react";
// import SignupHome from "./SignupHome";
import HomeSameSignUp from "./SignupHome";

function Footertop() {
  return (
    <div className="footertop">
      <h1 className="headerready">
        Ready to get on <span>Track</span>?
      </h1>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <HomeSameSignUp />
      </div>

      <img src={Top} className="footertop_images" />
      <br />
    </div>
  );
}

export default Footertop;
