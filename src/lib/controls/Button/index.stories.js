import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from "./index";

storiesOf("Button", module)
  .add("normal", () => <Button>Normal</Button>)
  .add("clickCallback OK", () => (
    <Button clickCallback={() => true} clickCallbackText="Yassss">
      clickCallback OK
    </Button>
  ))
  .add("clickCallback no OK", () => (
    <Button clickCallback={() => false}>clickCallback not OK</Button>
  ))
  .add("with icon", () => <Button type="pdf">Icon</Button>)
  .add("triggers simple modal", () => (
    <Button type="modal" modalText="Hey! I'm a simple modal">
      Simple modal
    </Button>
  ))
  .add("triggers simple modal question", () => (
    <Button
      type="modal-question"
      modalText="Hey! I'm a simple modal for a question"
      modalCallback={() => {
        alert("I'm the callback");
      }}
    >
      Simple question modal
    </Button>
  ));
