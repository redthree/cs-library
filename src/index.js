import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { MainContainer, NavigationBar, Footer } from "./lib";

import { navLinks } from "./navConfig";

import "./custom-styles.scss";

const App = () => (
  <Router>
    <MainContainer>
      <NavigationBar
        links={navLinks}
        subtitle="Components Library"
      ></NavigationBar>
      <Footer />
    </MainContainer>
  </Router>
);

render(<App />, document.getElementById("root"));
