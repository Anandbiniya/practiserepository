import React from "react";
import { Text } from "@chakra-ui/react";
import "./starttrack.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import save from "./Images/ajith.jpg";
import save2 from "./Images/save2.jpg";

function Starttrack() {
  return (
    <div className="starttraccontainer">
      <Text className="starttracktext">
        Toggl Track saves you <span>time and money,</span> no matter how you use
        it.
      </Text>
      <div>
        <div>
          <Text className="starttrackhead">BILLING AND INVOICING</Text>
          <Text className="startboxtext">
            Do you sell your time? We'll help you get the numbers right. Every
            time.
          </Text>
          <Button className="starttrackbutton">Learn More</Button>
          <div>
            <img src={save} alt="" />
          </div>
          <Text className="wesaved">
            "We saved $18,000 by identifying missing billable hours, thanks to
            Toggl Track"
          </Text>
          <a>— Platinum Companies, Operations Consulting</a>
        </div>
        <div>
          {" "}
          <Text className="starttrackhead">EMPLOYEE TIME TRACKING</Text>
          <Text className="startboxtext">
            Improve team productivity and happiness without the micromanagement.
          </Text>
          <Button className="starttrackbutton">Learn More</Button>
          <div>
            <img src={save2} alt="" />
            <Text className="wesaved">
              "We saved $18,000 by identifying missing billable hours, thanks to
              Toggl Track"
            </Text>
            <a>— Platinum Companies, Operations Consulting</a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Starttrack;
