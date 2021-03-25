import React, { PureComponent, Fragment } from "react";

import { ComponentInfo, Code, Button, Form, Input, Pagination } from "../lib";

class ControlComponents extends PureComponent {
  _handleSubmit(formValues) {
    alert(JSON.stringify(formValues));
  }

  render() {
    return (
      <Fragment>
        <h2>Control components</h2>
        <p>
          This components have a some functionalities built so you can trigger
          events, send data, search something, control the navigation or things
          like that.
        </p>

        <ComponentInfo
          name="NavigationBar"
          description="This component renders the navigation bar, it must be inside the <MainContainer /> otherwise global styles will be broken. "
          componentProps={[
            {
              propName: "links",
              propDescription:
                "Defines which links you want to show, its routes and the component that should render. You'll find a more detailed explanation below.",
              type: "Array"
            },
            {
              propName: "subtitle",
              propDescription:
                "Set the subtitle to be render right next to the Cornershop logo.",
              type: "String"
            }
          ]}
          codeExamples={[
            {
              code:
                '<MainContainer><NavigationBar links={navLinks} subtitle="Components Library"/>...</MainContainer>'
            }
          ]}
        >
          <p>
            As you read before, the <span className="pre">links</span> prop
            needs an array that has the information about the links. This
            example shows how the array has to be structured, each element in
            the array is an object with the following properties:{" "}
            <span className="pre">name</span>,{" "}
            <span className="pre">route</span>,{" "}
            <span className="pre">component</span> and optional properties{" "}
            <span className="pre">exact</span>,{" "}
            <span className="pre">external</span> and{" "}
            <span className="pre">customClassName</span>.
          </p>

          <p>
            <span className="pre">name</span> property defines the text that
            will be shown on the link.
          </p>

          <p>
            <span className="pre">route</span> is, as you might guess, the
            route.
          </p>

          <p>
            <span className="pre">component</span> property defines the
            component that you want to be rendered.
          </p>

          <p>
            <span className="pre">external</span> if you like to add a link to
            an external URL.
          </p>

          <p>
            <span className="pre">customClassName</span> adds a CSS class name
            to the external link,{" "}
            <span className="highlight">it only works for external link</span>.
          </p>

          <p>
            And finally, the property <span className="pre">exact</span>{" "}
            property indicates if the route you set must be matched exactly.
          </p>

          <Code language="javascript">
            {`
/*
  Example of a file called navConfig.js
  containing the links, routes, and components.
*/

// Components
import Home from './Home';
import About from './About';

// Routes
import {
  HOME_ROUTE, // '/'
  ABOUT_ROUTE, // '/about'
} from './routes';

// Links
export const navLinks = [
  {
    name: 'Home',
    route: HOME_ROUTE,
    component: Home,
    exact: true
  },
  {
    name: 'About',
    route: ABOUT_ROUTE,
    component: About
  },
  {
    name: 'Github',
    route: 'https://github.com',
    external: true,
    customClassName: 'github-link'
  }
]`}
          </Code>

          <p>
            Now you can set your <span className="pre">index.js</span> root file
            importing your <span className="pre">navLinks</span> as the
            following:
          </p>

          <Code language="javascript" format={false}>
            {`
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Nav,
  MainContainer
} from 'cornershop-components-library';
import { navLinks } from './navConfig';

const App = () => (
  <Router>
    <MainContainer>
      <Nav links={navLinks} subtitle="Components Library"/>
    </MainContainer>
  </Router>
);

render(<App />, document.getElementById("root"));`}
          </Code>

          <p>
            The <span className="pre">Nav</span> component will take care of
            rendering your <span className="pre">NavLink</span> and{" "}
            <span className="pre">Route</span> components from{" "}
            <span className="pre">react-router-dom</span> 😉.
          </p>

          <p>Oh! and yes, it's responsive.</p>
        </ComponentInfo>

        <ComponentInfo
          name="Button"
          description="This would render a button, but not just any button! It has some nice features."
          componentProps={[
            {
              propName: "type",
              propDescription:
                "Indicates which type of button do you like, leave blank if you want a regular button.",
              type: "String",
              propValues:
                "confirmation, back, save, download, copy, doc, pdf, zip"
            },
            {
              propName: "clickCallback",
              propDescription: "Sets a callback function on click.",
              type: "Function"
            },
            {
              propName: "primary",
              propDescription:
                "This will render it as a red button with white text, a classic. Use it for really important actions.",
              type: "String"
            },
            {
              propName: "disabled",
              propDescription:
                "It disables the button and change the style to make it clear.",
              type: "String"
            },
            {
              propName: "customClassName",
              propDescription:
                "You can add a custom className for the button that will be added to the others.",
              type: "String"
            },
            {
              propName: "modalText",
              propDescription:
                "If you select the type 'modal' or 'modal-question' a simple modal will be displayed. This prop sets the text that will be displayed.",
              type: "String"
            },
            {
              propName: "modalCallback",
              propDescription:
                "For the 'modal-question' type, this prop defines the function that you want to call when the user clicks the accept button.",
              type: "Function"
            },
            {
              propName: "modalAcceptButtonText",
              propDescription:
                "This prop will set the text for the accept button.",
              type: "String",
              default: '"OK"'
            },
            {
              propName: "modalCancelButtonText",
              propDescription:
                "This prop will set the text for the cancel button.",
              type: "String",
              default: '"Cancel"'
            }
          ]}
          codeExamples={[
            {
              code: "<Button>Normal</Button>",
              output: <Button>Normal</Button>,
              formatExample: false
            },
            {
              code: "<Button primary>Primary</Button>",
              output: <Button primary>Primary</Button>,
              formatExample: false
            },
            {
              code: '<Button type="download">Download</Button>',
              output: <Button type="download">Download</Button>,
              formatExample: false
            },
            {
              code: '<Button type="back">Back</Button>',
              output: <Button type="back">Back</Button>,
              formatExample: false
            },
            {
              code: `<Button
  type="confirmation"
  modalText="Do androids dream of electric sheep?"
  modalAcceptButtonText="Of course!"
  modalCancelButtonText="No..."
  modalCallback="YourCallbackGoesHere"
>
  Confirmation
</Button>`,
              output: (
                <Button
                  type="confirmation"
                  modalText="Do androids dream of electric sheep?"
                  modalAcceptButtonText="Of course!"
                  modalCancelButtonText="No..."
                  modalCallback={() => alert("Yes, this is the callback")}
                >
                  Confirmation
                </Button>
              ),
              formatExample: false
            }
          ]}
        ></ComponentInfo>

        <ComponentInfo
          name="Form"
          description="This is a form like component, it comes with a free submit button 🎁. For this component to work properly you should use Input components as children, you can put any other components also, but what is a form without inputs, right?"
          componentProps={[
            {
              propName: "submitCallback",
              propDescription:
                "Handles the form submit, the function you use will receive the fields of the form as a JSON in this format: {label_name: input_value, ...}.",
              type: "Function",
              required: true
            },
            {
              propName: "submitButtonText",
              propDescription:
                "Defines the text of the submit button, by default is set to 'Submit'.",
              type: "String",
              default: '"Submit"'
            },
            {
              propName: "centerFields",
              propDescription: "Centers the fields inside the form.",
              type: "Boolean"
            }
          ]}
          codeExamples={[
            {
              code:
                '<Form submitCallback="YourSubmitCallbackGoesHere">...</Form>'
            }
          ]}
        />

        <ComponentInfo
          name="Input"
          description="This component renders the most common types of inputs that can be used inside a Form component or by themselves and It comes with a nice label too."
          componentProps={[
            {
              propName: "type",
              propDescription:
                "This define what kind of input you want. 'email' type validates if it's a valid email.",
              propValues: "text, email, password, date, select, textarea",
              type: "string",
              required: true
            },
            {
              propName: "label",
              propDescription: "Set the text for the label.",
              type: "String",
              required: true
            },
            {
              propName: "placeholder",
              propDescription: "Defines a placeholder text.",
              type: "String"
            },
            {
              propName: "required",
              propDescription:
                "If the input should be required. This will trigger only onBlur.",
              type: "Boolean"
            },
            {
              propName: "disabled",
              propDescription: "If the input is disabled.",
              type: "Boolean"
            },
            {
              propName: "dateFormat",
              propDescription:
                "If you set the type as 'date', you can use this to define the format of it.",
              type: "string",
              default: "dd/MM/yyyy"
            },
            {
              propName: "minDate",
              propDescription:
                "Defines the minimum date that can be selected. The format of this prop must be MM/dd/yyyy. ",
              type: "string"
            },
            {
              propName: "maxDate",
              propDescription:
                "Defines the maximum date that can be selected. The format of this prop must be MM/dd/yyyy.",
              type: "string"
            }
          ]}
          codeExamples={[
            {
              code: '<Input label="Text and required" type="text" required/>',
              output: <Input label="Text and required" type="text" required />
            },
            {
              code: `<Input label="Select" type="select">
  <option value="">Select an option</option>
  <option value="1">First item</option>
  <option value="2">Second item</option>
  <option value="3">Third item</option>
</Input>`,
              output: (
                <Input label="Select" type="select">
                  {" "}
                  <option value="">Select an option</option>{" "}
                  <option value="1">First item</option>{" "}
                  <option value="2">Second item</option>{" "}
                  <option value="3">Third item</option>{" "}
                </Input>
              ),
              formatExample: false
            },
            {
              code:
                '<Input label="Password and disabled" type="password" disabled/>',
              output: (
                <Input label="Password and disabled" type="password" disabled />
              )
            },
            {
              code:
                '<Input label="Email" type="email" placeholder="Enter your email"/>',
              output: (
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
              )
            },
            {
              code: '<Input label="Textarea" type="textarea"/>',
              output: <Input label="Textarea" type="textarea" />
            },
            {
              code: '<Input label="Date" type="date" />',
              output: <Input label="Date" type="date" minDate="12/12/2019" />
            }
          ]}
        >
          <p>
            You should know that for the type <span className="pre">date</span>{" "}
            it uses a library called{" "}
            <span className="pre">react-datepicker</span>, which uses{" "}
            <span className="pre">date-fns</span>.
          </p>

          <p>
            The following example shows the use if{" "}
            <span className="pre">Input</span> inside a{" "}
            <span className="pre">Form</span>.
          </p>

          <Code format={false} language="javascript">
            {`
_handleSubmit(formValues){
  alert(JSON.stringify(formValues));
}`}
          </Code>

          <Code format={false}>
            {`
<Form
  submitCallback={this._handleSubmit}
  submitButtonText="Save"
  centerFields
>
  <Input label="Name" type="text" required/>
  <p>An element that is not an Input</p>
  <Input label="Textarea" type="textarea"/>
  <Input label="Date" type="date" />
</Form>`}
          </Code>

          <Form
            submitCallback={this._handleSubmit}
            submitButtonText="Save"
            centerFields
          >
            <Input label="Name" type="text" required />
            <p>An element that is not an Input</p>
            <Input label="Textarea" type="textarea" />
            <Input label="Date" type="date" />
          </Form>
        </ComponentInfo>

        <ComponentInfo
          name="Pagination"
          description="A very simple and dumb pagination component. Use this component only if it's not possible to implement lazy loading and infinite scrolling 🚨."
          componentProps={[]}
          codeExamples={[
            {
              code: `<Pagination>
  <Pagination.Prev/>
  <Pagination.Page number={1} visited/>
  <Pagination.Page number={2} active/>
  <Pagination.Page number={3}/>
  <Pagination.Page number={4}/>
  <Pagination.Page number={5}/>
  <Pagination.Next/>
</Pagination>`,
              output: (
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Page number={1} visited key={1} />
                  <Pagination.Page number={2} active key={2} />
                  <Pagination.Page number={3} key={3} />
                  <Pagination.Page number={4} key={4} />
                  <Pagination.Page number={5} key={5} />
                  <Pagination.Next />
                </Pagination>
              ),
              formatExample: false
            }
          ]}
        />
      </Fragment>
    );
  }
}

export default ControlComponents;
