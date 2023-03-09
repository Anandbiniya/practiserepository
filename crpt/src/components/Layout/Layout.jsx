
import { Banner } from "../../Banner/Banner";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="left-side"><Banner/></div>
      <div className="right-side">{children}</div>
    </div>
  );
};

export { Layout };
