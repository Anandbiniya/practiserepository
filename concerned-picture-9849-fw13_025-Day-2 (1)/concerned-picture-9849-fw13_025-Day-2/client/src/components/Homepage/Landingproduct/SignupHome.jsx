import React from "react";
import { Heading } from "@chakra-ui/react";
import "./signuphomebox.css";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import google from "./Images/google.png";
import apple from "./Images/Apple.png";
import { PhoneIcon, AddIcon, EmailIcon } from "@chakra-ui/icons";

function SignupHome() {
  return (
    <div className="signuphomecontainer">
      <div className="signuphomebox">
        <Heading>Sign up for free</Heading>
        <Text fontSize="md" className="signuptext">
          All plans come with a free, 30-day trial of Toggl Track Premium—no
          credit card required. Upgrade at the end of the trial or continue
          using Track for free. Sign up vi
        </Text>
        <div className="signupbuttons">
          <Button
            className="buttonsIcons"
            size="md"
            width="400px"
            border="2px"
            borderRadius="50px"
            color={"black"}
          >
            <img src={google} alt="" />
            <Text>Sign up via Google</Text>
          </Button>
          <Button
            className="buttonsIcons"
            size="md"
            width="400px"
            border="2px"
            borderRadius="50px"
            color={"black"}
          >
            <img src={apple} alt="" />
            <Text>Sign up via Apple</Text>
          </Button>
        </div>
        <Button
          className="buttonsIcons"
          size="md"
          width="400px"
          border="2px"
          borderRadius="50px"
          color={"black"}
        >
          <EmailIcon />
          <Text>Sign up via Apple</Text>
        </Button>
        <Text fontSize="xs">
          By signing up, you agree to our terms of service, privacy policy and
          to receiving marketing communication from Toggl Track. You can opt out
          anytime.
        </Text>
      </div>

      <div className=" signuphome2">
        <Heading color={"black"}>Prefer a product demo instead?</Heading>
        <Text fontSize="md" className="signuptext">
          Request a 30-minute personalized demo to see how Toggl Track can meet
          your time tracking goals
        </Text>
        <Button className="buttonsIconsleft">
          <Text>Sign up via Apple</Text>
        </Button>
      </div>
    </div>
  );
}

export default SignupHome;
