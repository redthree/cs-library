import React, { PureComponent } from "react";

import { Content, Title } from "../lib";

import "./styles.scss";

class Home extends PureComponent {
  render() {
    return (
      <Content>
        <Title mainTitle="Components Library" />
      </Content>
    );
  }
}

export default Home;
