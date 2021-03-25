import React, { PureComponent } from "react";

import { Content, Title, SideMenu, Section, CornershopIcon } from "../lib";

import {
  black,
  darkGrey,
  grey,
  lightGrey,
  veryLightGrey,
  red,
  green,
  blue,
  lightBlue,
  veryLightBlue,
  orange,
  yellow,
  purple,
  pink
} from "../lib/assets/colors";

import "./styles.scss";

class Basics extends PureComponent {
  render() {
    return (
      <Content>
        <SideMenu />

        <Title
          mainTitle="Basics"
          subtitle="Just some basic information about the library, its components, usage and style."
        />

        <h2>Fonts</h2>
        <p>
          Actually, there are no "fonts", we select fonts that are native for
          the OS. The font family defined is{" "}
          <span className="pre">"Avenir Next", "Helvetica", sans-serif</span>,
          if one of those is present that will be font that the app will have
          across all sections and in all the elements. Although, the prefered
          font is{" "}
          <a
            href="https://www.fonts.com/font/linotype/avenir-next/story"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avenir Next
          </a>{" "}
          because it manages to give the user an easy read while having enough
          personality to help identify us without becoming a visual distraction.
        </p>

        <p>
          The sizes, line heights, weight and style for the basic HTML elements
          are already defined so you don't have to. You can overrided this
          styles if it's necessary, but give this a try before.
        </p>

        <Section title="Basic HTML elements">
          <h1>H1 Lorem ipsum dolor sit amet.</h1>
          <h2>H2 Lorem ipsum dolor sit amet.</h2>
          <h3>H3 Lorem ipsum dolor sit amet.</h3>
          <h4>H4 Lorem ipsum dolor sit amet.</h4>
          <h5>H5 Lorem ipsum dolor sit amet.</h5>
          <h6>H6 Lorem ipsum dolor sit amet.</h6>
          <p>
            This is a paragraph to serve as an example of how a paragraph looks
            like, is not too long but it's something.
          </p>
          <p>
            This paragraph has a <a href="/">link</a> in it
          </p>
          <ul>
            <li>First item of a list</li>
            <li>The second item</li>
            <li>And a third one, just in case</li>
          </ul>
        </Section>

        <h2>Colors</h2>
        <p>
          The defined colors seek to highlight different elements and areas to
          create the contrast that helps users have a good experience.
        </p>

        <p>
          These colors are used through the different Cornershop platforms to
          ensure consistency, no matter where the user is in any flow.
        </p>

        <p>
          There is one color that is not included in this palette, which is the{" "}
          <span className="highlight">Cornershop red</span>. It's not in this
          palette because you are not allowed to use it, freely at least.
        </p>

        <p className="highlight bold-text no-bg">
          Please, do not use other colors unless strictly necessary.
        </p>

        <Section title="Color palette" customClassName="basics-color-palette">
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: black }}
            ></span>
            <span className="font-size-very-small bold-text">black</span>
            <span className="font-size-very-small">{black}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: darkGrey }}
            ></span>
            <span className="font-size-very-small bold-text">darkGrey</span>
            <span className="font-size-very-small">{darkGrey}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: grey }}
            ></span>
            <span className="font-size-very-small bold-text">grey</span>
            <span className="font-size-very-small">{grey}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: lightGrey }}
            ></span>
            <span className="font-size-very-small bold-text">lightGrey</span>
            <span className="font-size-very-small">{lightGrey}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: veryLightGrey }}
            ></span>
            <span className="font-size-very-small bold-text">
              veryLightGrey
            </span>
            <span className="font-size-very-small">{veryLightGrey}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: red }}
            ></span>
            <span className="font-size-very-small bold-text">red</span>
            <span className="font-size-very-small">{red}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: green }}
            ></span>
            <span className="font-size-very-small bold-text">green</span>
            <span className="font-size-very-small">{green}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: blue }}
            ></span>
            <span className="font-size-very-small bold-text">blue</span>
            <span className="font-size-very-small">{blue}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: lightBlue }}
            ></span>
            <span className="font-size-very-small bold-text">lightBlue</span>
            <span className="font-size-very-small">{lightBlue}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: veryLightBlue }}
            ></span>
            <span className="font-size-very-small bold-text">
              veryLightBlue
            </span>
            <span className="font-size-very-small">{veryLightBlue}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: orange }}
            ></span>
            <span className="font-size-very-small bold-text">orange</span>
            <span className="font-size-very-small">{orange}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: yellow }}
            ></span>
            <span className="font-size-very-small bold-text">yellow</span>
            <span className="font-size-very-small">{yellow}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: purple }}
            ></span>
            <span className="font-size-very-small bold-text">purple</span>
            <span className="font-size-very-small">{purple}</span>
          </span>
          <span className="color-example">
            <span
              className="color-preview"
              style={{ backgroundColor: pink }}
            ></span>
            <span className="font-size-very-small bold-text">pink</span>
            <span className="font-size-very-small">{pink}</span>
          </span>
        </Section>

        <h2>Icons</h2>
        <p>We have plenty icons that are used across platforms and apps.</p>

        <p>
          With the <a href="/components#cornershopicon">CornershopIcon</a>{" "}
          component, the name of each icon can be passed as a{" "}
          <span className="pre">type</span> prop.
        </p>

        <Section
          customClassName="basics-icons-preview"
          title="These are the ones we have for the moment"
        >
          <span className="icon-preview">
            <CornershopIcon type="cornershop-pop" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              cornershop-pop
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="blocked" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              blocked
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="coupons" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              coupons
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="delivery" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              delivery
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="discontinued" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              discontinued
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="dubious" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              dubious
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="help" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              help
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="logout" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              logout
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="orders" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              orders
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="payments" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              payments
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="phone" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              phone
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="privacy" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              privacy
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="products" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              products
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="profile" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              profile
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="season-unavailable" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              season-unavailable
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="share" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              share
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="shopper" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              shopper
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="store" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              store
            </span>
          </span>
          <span className="icon-preview">
            <CornershopIcon type="work-with-us" size={50} />
            <span className="icon-name font-size-very-small bold-text">
              work-with-us
            </span>
          </span>
        </Section>

        <h2>Utility CSS classes</h2>
        <p>
          This classes can be applied to any element in order to change its
          rendering.
        </p>

        <span className="pre">.no-bg</span>
        <p>Removes the background color.</p>

        <span className="pre">.bold-text</span>
        <p>Sets the font weight to bold.</p>

        <span className="pre">
          .font-size-extra-large, .font-size-large, .font-size-medium,
          .font-size-small, .font-size-default, .font-size-very-small
        </span>
        <p>This are the different font sizes available.</p>

        <span className="pre">.elevation</span>
        <p>Adds a shadow effect to the element.</p>

        <span className="pre">.highlight</span>
        <p>Sets the background-color to white.</p>

        <span className="pre">.highlight.important</span>
        <p>Highlight style but changes the text color to red.</p>

        <span className="pre">.highlight.warning</span>
        <p>Highlight style but changes the text color to orange.</p>

        <span className="pre">.highlight.ok</span>
        <p>Highlight style but changes the text color to green.</p>

        <span className="pre">.pre</span>
        <p>
          This sets the text background to white and changes the font family to
          monospace.
        </p>
      </Content>
    );
  }
}

export default Basics;
