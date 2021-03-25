import React, { PureComponent, Fragment } from "react";

import { ComponentInfo } from "../lib";

class LayoutComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>Layout components</h2>
        <p>
          This components handle the element distribution on the view and set
          the context for the application and it's sections.
        </p>

        <ComponentInfo
          name="MainContainer"
          description="As the name indicates, it's the container for the entire application."
          codeExamples={[{ code: "<MainContainer>...</MainContainer>" }]}
        />

        <ComponentInfo
          name="Content"
          description="This component can be used as a wrapper for your content, it sets the width and margins properly."
          componentProps={[
            {
              propName: "fullWidth",
              propDescription:
                "Sets the width of the content to a 100% of the window.",
              type: "Boolean",
              default: "false"
            }
          ]}
          codeExamples={[{ code: "<Content>...</Content>" }]}
        />
      </Fragment>
    );
  }
}

export default LayoutComponent;
