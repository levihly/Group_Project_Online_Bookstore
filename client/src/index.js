import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";


// ReactDOM.render(<Home />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
