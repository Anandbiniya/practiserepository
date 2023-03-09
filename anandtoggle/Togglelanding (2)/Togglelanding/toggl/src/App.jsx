import { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Components/Navbar";
import WithSubnavigation from "./Components/Navbar";
import WithAction from "./Components/Navbartop";
import LargeWithLogoCentered from "./Components/Footer";
// import BasicUsage from "./Components/Bodyabove";
import Bodyabove from "./Components/Bodyabove";

import Footertop from "./Components/Footertop";
import Timetracking from "./Components/Timetracking";
import Starttrack from "./Components/Starttrack";
import Threeboxes from "./Components/Threeboxes";
import TogglTrack from "./Components/Toggltrack";
import Webapp from "./Components/Webapp";

function App() {
  return (
    <div className="App">
      <WithAction />
      <WithSubnavigation />
      {/* <Webapp /> */}
      <Bodyabove />

      <Starttrack />
      <Threeboxes />
      {/* <Webapp /> */}
      <TogglTrack />
      <Timetracking />
      <Footertop />

      <LargeWithLogoCentered />
    </div>
  );
}

export default App;
