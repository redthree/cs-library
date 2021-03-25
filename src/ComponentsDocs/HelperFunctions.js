import React, { PureComponent, Fragment } from "react";

import { Code } from "../lib";
import { simpleModal, toast } from "../lib/helpers";

class HelperFunctions extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>Helper Functions</h2>
        <p>
          This functions are available from{" "}
          <span className="pre">cornershop-components-library/helpers</span> and
          they can do simple tasks or render simple UI elements.
        </p>

        <h3>simpleModal</h3>
        <p>This function will show a simple modal.</p>

        <Code language="javascript">
          {
            "simpleModal(modalContent, modalType, callback, acceptText, cancelText)"
          }
        </Code>

        <p>
          The arguments <span className="pre">modalContent</span> and{" "}
          <span className="pre">modalType</span> are required, the latter can be{" "}
          <span className="pre">normal</span> or{" "}
          <span className="pre">confirmation</span>, the difference is that{" "}
          <span className="pre">confirmation</span> will render an accept button
          and a cancel button, meanwhile the <span className="pre">normal</span>{" "}
          type just renders an accept button. If you choose{" "}
          <span className="pre">confirmation</span> you'll have to define the{" "}
          <span className="pre">callback</span> argument, which will be trigger
          when the user clicks the accept button.
        </p>

        <p>
          The <span className="pre">modalContent</span>, as you might guess, is
          the content of the modal, the text that will render.
        </p>

        <p>
          About <span className="pre">acceptText</span> and{" "}
          <span className="pre">cancelText</span>, this can be used to define
          the text that each button will have.
        </p>

        <h5>Example</h5>
        <Code language="javascript">
          {'simpleModal("A simpleModal for a simple example", "normal")'}
        </Code>

        <p
          onClick={() =>
            simpleModal("A simpleModal for a simple example", "normal")
          }
        >
          Click me!
        </p>

        <h3>toast</h3>

        <p>
          Well, <span className="pre">toast</span> is just a toaster, that's it.
        </p>

        <h5>Example</h5>

        <Code language="javascript">{'toast("Cheers! 🍻")'}</Code>

        <p onClick={() => toast("Cheers! 🍻")}>Lets toast!</p>
      </Fragment>
    );
  }
}

export default HelperFunctions;
