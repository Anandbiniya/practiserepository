import "./App.css";
import { JoinUs } from "./components/JoinUs/JoinUs";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { RIAPageOne } from "./components/RegisterIndividualAccount/RIAPageOne";
import { RIAPageTwo } from "./components/RegisterIndividualAccount/RIAPageTwo";
import { RIAPageThree } from "./components/RegisterIndividualAccount/RIAPageThree";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <JoinUs />
            </Layout>
          }
        ></Route>
        <Route
          path="/register-step-1"
          element={
            <Layout>
              <RIAPageOne />
            </Layout>
          }
        ></Route>
        <Route
          path="/register-step-2"
          element={
            <Layout>
             <RIAPageTwo />
            </Layout>
          }
        ></Route>
        <Route
          path="/register-step-3"
          element={
            <Layout>
              <RIAPageThree />
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
