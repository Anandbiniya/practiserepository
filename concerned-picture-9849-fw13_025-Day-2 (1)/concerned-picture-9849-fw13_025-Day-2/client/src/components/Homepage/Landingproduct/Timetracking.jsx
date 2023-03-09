import React from "react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import "./Timetrack.css";
import watch from "./Images/watch1.jpg";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Designed from "./Images/Designed.jpg";
import work from "./Images/workwhere.jpg";
import int from "./Images/100+int.jpg";

function Timetracking() {
  return (
    <>
      <div className="timetrackcontainer">
        <div>
          <Heading className="timetrackingheading">
            A time tracking tool <span>anyone</span> can use
          </Heading>
          <Text className="timetrackingtext">
            Whether you are a team of one or a thousand, we understand that
            being productive is different for everyone. This is why Toggl Track
            is built into any workflow.
          </Text>
        </div>
        <div>
          <img src={watch} alt="" />
          <Button className="buttonsIcons">Watch 1 minute video</Button>
        </div>
      </div>
      <div className="iconswithtext">
        <div>
          <div>
            <img src={int} alt="" />
          </div>
          <Text className="headIcons">100+ integrations</Text>
          <Text>
            Use Toggl Track with the tools you already use. Track time in 100+
            popular tools with the Toggl Track browser extension.
          </Text>
        </div>
        <div>
          <div>
            <img src={work} alt="" />
          </div>
          <Text className="headIcons"> Works where you work</Text>
          <Text>
            Track time on our web app, desktop, and mobile apps. You can even
            start the timer from your stopwatch!
          </Text>
        </div>
        <div>
          <div>
            <img src={Designed} alt="" />
          </div>
          <Text className="headIcons">Designed to be easy</Text>
          <Text>
            Designed to be easy No instruction manual needed. But if you ever
            need help, our support team has a track record of responding within
            3 hours!
          </Text>
        </div>
      </div>
    </>
  );
}

export default Timetracking;
