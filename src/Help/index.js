import React, { PureComponent } from "react";

import { Content, Title, SideMenu, Code } from "../lib";

class Help extends PureComponent {
  render() {
    return (
      <Content>
        <SideMenu />

        <Title mainTitle="Help" subtitle="Need help? Look no further!" />

        <h2>How do I start using this wonderful library?</h2>
        <p>
          First of all, thank you. In order to use the components included in
          the library, you have to install it as a dependency with{" "}
          <span className="pre">yarn add cornershop-components-library</span>,
          this will add the dependency to your project.
        </p>

        <p>
          With the library installed, you can now import a component to your
          module! that's it.
        </p>

        <h5>Example</h5>
        <Code language="javascript" format={false}>
          {`
import React, { PureComponent } from 'react';
import { Title } from 'cornershop-components-library';

class MyComponent extends PureComponent {
  render() {
    return (
      <Title
        mainTitle="This awesome title"
        subtitle="What can I say? it's beatiful 😭"
      />
    )
  }
}
export default MyComponent;
`}
        </Code>

        <p>
          In the example above we imported the component{" "}
          <span className="pre">Title</span> and set its props. To learn more
          about the components and what they do, check the{" "}
          <a href="/components">components</a> section.
        </p>

        <h2>Can I modify a component?</h2>
        <p>
          Of course! but we have to check your changes first{" "}
          <span role="img" aria-label="big smile">
            {" "}
            😬
          </span>
          .
        </p>
        <p>
          If you need a component to behave differently or add a functionality,
          even if you think of an improvement, we encourage you to let us know
          with a pull request please. This way we can mantain this library as
          good as it is.
        </p>

        <h2>Can I override the CSS styles?</h2>
        <p>
          Be our guest, if you think that the styles aren't going in the same
          direction as your application or need a little tweak, go ahead. But
          beware of the consequences... just kidding. Make sure you are
          following our{" "}
          <a
            href="http://design.cornershop.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            design guidelines and rules
          </a>
          , this are very important to us and we conceive them with a lot of
          love for you{" "}
          <span role="img" aria-label="heart">
            {" "}
            ❤️
          </span>
          .
        </p>

        <h2>What if I want to add a component to the library?</h2>
        <p>
          That's great! You already have it? just make a pull request so we can
          take a look{" "}
          <span role="img" aria-label="eyes">
            {" "}
            👀
          </span>
          . Yeah, sorry, we have to take a look at it first to make sure is a
          good addition and it has the quality we aim to.
        </p>

        <p>
          Before start coding your amazing component, ask yourself this
          questions:
        </p>
        <ul>
          <li>What problem do I want to solve?</li>
          <li>Is there a antoher component that does something simmilar?</li>
          <li>If I make this component, does it solves another problems?</li>
        </ul>

        <h2>I found a bug! what do I do?</h2>
        <p>
          Stay calm and report it as a grown developer. Open an issue and tag
          one of the developers of the project, they will be happy to fix it for
          you{" "}
          <span role="img" aria-label="lying face">
            {" "}
            🤥
          </span>
          .
        </p>

        <p>
          Please, include evidence of the bug and as much information about it
          as you think necessary. It's difficult to fix a bug without being able
          to replicate it.
        </p>

        <h2>I need more help!</h2>
        <p>
          I you step on a problem that requires a more depth look you can
          contact any of our developers to help you:{" "}
          <a
            href="https://github.com/daslaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @daslaf
          </a>
          ,{" "}
          <a
            href="https://github.com/fyanezv"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fyanezv
          </a>
          ,{" "}
          <a
            href="https://github.com/francisco-garciam"
            target="_blank"
            rel="noopener noreferrer"
          >
            @francisco-garciam
          </a>
          ,{" "}
          <a
            href="https://github.com/erasmo-marin"
            target="_blank"
            rel="noopener noreferrer"
          >
            @erasmo-marin
          </a>
          ,{" "}
          <a
            href="https://github.com/raerpo"
            target="_blank"
            rel="noopener noreferrer"
          >
            @raerpo
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/redthree"
            target="_blank"
            rel="noopener noreferrer"
          >
            @redthree
          </a>
          .
        </p>
      </Content>
    );
  }
}

export default Help;
