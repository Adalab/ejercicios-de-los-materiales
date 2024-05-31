import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.scss";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
