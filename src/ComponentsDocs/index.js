import React, { PureComponent } from "react";

import { Content, Title, SideMenu } from "../lib";

import LayoutComponents from "./LayoutComponents";
import ContentComponents from "./ContentComponents";
import ControlComponents from "./ControlComponents";
import HelperFunctions from "./HelperFunctions";

class Components extends PureComponent {
  render() {
    return (
      <Content>
        <SideMenu />

        <Title
          mainTitle="Components"
          subtitle="Layout, Content and Controls components"
        />

        <LayoutComponents />

        <ContentComponents />

        <ControlComponents />

        <HelperFunctions />
      </Content>
    );
  }
}

export default Components;
