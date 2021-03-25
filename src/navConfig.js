import React from "react";

// Icons for external links
import GithubIcon from "./lib/assets/icons/GithubIcon";

// Components
import Home from "./Home";
import Basics from "./Basics";
import Components from "./ComponentsDocs";
import Help from "./Help";

import Dev from "./Dev";

// Routes
import {
  HOME_ROUTE,
  BASICS_ROUTE,
  COMPONENTS_ROUTE,
  HELP_ROUTE
} from "./routes";

// Links
export const navLinks = [
  {
    name: "Home",
    route: HOME_ROUTE,
    component: Home,
    exact: true
  },
  {
    name: "Basics",
    route: BASICS_ROUTE,
    component: Basics
  },
  {
    name: "Components",
    route: COMPONENTS_ROUTE,
    component: Components
  },
  {
    name: "Help",
    route: HELP_ROUTE,
    component: Help
  },
  {
    name: "Dev",
    route: "/dev",
    component: Dev,
    hideNavigationBar: true
  },
  {
    name: <GithubIcon />,
    customClassName: "github-link",
    route: "https://github.com/cornershop/cornershop-components-library",
    external: true
  }
];
