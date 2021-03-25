import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Code from "../Code";

import "./styles.scss";

class ComponentInfo extends PureComponent {
  _renderComponentsProps(componentProps) {
    return componentProps.map(componentProp => {
      return (
        <div
          key={"cs-component-prop-info-" + componentProp.propName}
          className="cs-component-prop-info"
        >
          <span className="pre bold-text">{componentProp.propName}</span>
          <span className="pre no-bg bold-text cs-component-prop-type">
            {componentProp.type
              ? "type: " + componentProp.type
              : "this prop needs a type 🤓"}
          </span>
          {componentProp.default ? (
            <span className="pre no-bg cs-component-prop-default">
              default: {componentProp.default}
            </span>
          ) : null}
          {componentProp.required ? (
            <span className="pre bold-text cs-component-prop-required highlight no-bg important">
              required
            </span>
          ) : null}
          {componentProp.propValues ? (
            <span className="pre no-bg cs-component-prop-values">
              values: {componentProp.propValues.split(",").join(" | ")}
            </span>
          ) : null}
          <span className="cs-component-prop-description">
            {componentProp.propDescription}
          </span>
        </div>
      );
    });
  }

  _renderCodeExamples(codeExamples) {
    const { name } = this.props;

    return codeExamples.map((codeExample, index) => {
      return (
        <span
          key={"cs-component-info-code-example-" + name + "-" + index}
          className="cs-component-info-code-example"
        >
          <h5>Example</h5>
          <Code format={codeExample.formatExample}>{codeExample.code}</Code>
          {codeExample.output ? (
            <Fragment>
              <h5>Output</h5>
              {codeExample.output}
            </Fragment>
          ) : null}
        </span>
      );
    });
  }

  render() {
    const {
      children,
      name,
      description,
      componentProps,
      codeExamples
    } = this.props;

    return (
      <div className="cs-component-info-container cs-side-menu-searchable">
        {name && name.length ? (
          <h3>{name}</h3>
        ) : (
          <h3>
            A component without a{" "}
            <span className="highlight important">name</span>, interesting 🤔
          </h3>
        )}
        {description && description.length ? (
          <p>{description}</p>
        ) : (
          <p>
            A brief <span className="highlight important">description</span> of
            what this component does will be nice, don't you think? 🙄
          </p>
        )}

        {componentProps && componentProps.length ? (
          <div className="cs-component-info-props">
            <h4>Props</h4>
            {this._renderComponentsProps(componentProps)}
          </div>
        ) : null}

        {codeExamples && codeExamples.length ? (
          <div className="cs-component-info-code-examples">
            {this._renderCodeExamples(codeExamples)}
          </div>
        ) : (
          <h5>
            No <span className="highlight important">codeExamples</span>?
            Really? 😑
          </h5>
        )}
        {children ? children : null}
      </div>
    );
  }
}

ComponentInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  componentProps: PropTypes.array,
  codeExamples: PropTypes.array.isRequired,
  formatCodeExamples: PropTypes.bool
};

export default ComponentInfo;
