import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Title from "./index";

storiesOf("Title", module)
  .add("with mainTitle", () => <Title mainTitle="This is the title" />)
  .add("with mainTitle and subtitle", () => (
    <Title mainTitle="This is the title" subtitle="This is the subtitle" />
  ));
