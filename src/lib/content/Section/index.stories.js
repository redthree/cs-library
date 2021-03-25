import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Section from "./index";

storiesOf("Section", module)
  .add("with title", () => (
    <Section title="This is the title">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
        itaque.
      </p>
    </Section>
  ))
  .add("with title and description", () => (
    <Section title="This is the title" description="This is the description">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
        itaque.
      </p>
    </Section>
  ))
  .add("with description only", () => (
    <Section description="This is the description">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
        itaque.
      </p>
    </Section>
  ))
  .add("without props", () => (
    <Section>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
        itaque.
      </p>
    </Section>
  ));
