import React, { PureComponent, Fragment } from "react";

import {
  ComponentInfo,
  CornershopIcon,
  Title,
  Section,
  Grid,
  Image,
  SkeletonBlock
} from "../lib";

class ContentComponent extends PureComponent {
  _renderDummyContentForGrid() {
    let arrDummy = [];
    for (let i = 0; i < 5; i++) {
      arrDummy.push(
        <div
          key={i}
          className="dummy-item"
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px"
          }}
        >
          <div
            className="image-wrapper"
            style={{
              backgroundImage:
                "url(https://s.cornershopapp.com/product-images/319496.jpg)",
              width: "100px",
              height: "100px",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginBottom: "10px"
            }}
          ></div>
          <p>Product name</p>
        </div>
      );
    }

    return arrDummy;
  }

  render() {
    return (
      <Fragment>
        <h2>Content components</h2>
        <p>Components focused on the content of a view.</p>

        <ComponentInfo
          name="Title"
          description="Titles are meant to indicate the beginning of an important section or at the top of a view, like the one on this view..."
          componentProps={[
            {
              propName: "mainTitle",
              propDescription: "This is the main text for the title.",
              type: "String",
              required: true
            },
            {
              propName: "subtitle",
              propDescription: "You can set a brief text as a subtitle.",
              type: "String"
            }
          ]}
          codeExamples={[
            {
              code:
                '<Title mainTitle="Text of the title" subtitle="Brief text that can be used as a subtitle" />',
              output: (
                <Title
                  mainTitle="Text of the title"
                  subtitle="Brief text that can be used as a subtitle"
                />
              )
            }
          ]}
        />

        <ComponentInfo
          name="Section"
          description="Sections can be used to separate different information inside a view."
          componentProps={[
            {
              propName: "title",
              propDescription:
                "Is used to set the title of the <Section/>. Also, if the title is set, the <Section/> will have the title as id in lowercase replacing spaces with hyphens.",
              type: "String"
            },
            {
              propName: "description",
              propDescription:
                "You can set a brief description of what the section is about.",
              type: "String"
            },
            {
              propName: "collapsable",
              propDescription:
                "When is set to true, the Section can be collapsable by clicking the title. Also an icon will render at the top right corner.",
              type: "Boolean",
              default: false
            },
            {
              propName: "startCollapsed",
              propDescription:
                "You can use this prop to tell the component if you want the Section to render collapsed or not on the first render. By default the Section will be collapsed.",
              type: "Boolean",
              default: true
            },
            {
              propName: "clickCallback",
              propDescription:
                "Callback to use after click when the section is collapsable. It receives a boolean value that is true if the Section is going to be collapsed and false when is 'open'",
              type: "Function",
              default: null
            }
          ]}
          codeExamples={[
            {
              code:
                '<Section title="This is the title" description="And this is the description.">...</Section>',
              output: (
                <Section
                  title="This is the title"
                  description="And this is the description."
                >
                  ...
                </Section>
              )
            },
            {
              code:
                '<Section title="This is collapsable" description="And this is the description." collapsable>...</Section>',
              output: (
                <Section
                  title="This is collapsable"
                  description="And this is the description."
                  collapsable
                >
                  ...
                </Section>
              )
            }
          ]}
        />

        <ComponentInfo
          name="CornershopIcon"
          description="This component allows you to render a icon from the Cornershop collection."
          componentProps={[
            {
              propName: "type",
              propDescription:
                "Indicates the icon you want to render. If no type is set you will see this emoji 🤦‍ , because you deserve it.",
              propValues:
                "cornershop-pop, blocked, coupons, delivery, discontinued, dubious, help, logout, orders, payments, phone, privacy, products, profile, season-unavailable, share, shopper, store, work-with-us",
              type: "String",
              required: true
            },
            {
              propName: "size",
              propDescription:
                "Sets the size of the icon, is always a square, its minimum size is 29px (not overridable) and the default size is 100px.",
              type: "String"
            }
          ]}
          codeExamples={[
            {
              code: `<CornershopIcon type="cornershop-pop" />
<!-- HTML output
<span class="cs-cornershop-icon-container" style="width: 100px; height: 100px;">
...the SVG will render here...
</span>
-->`,
              output: <CornershopIcon type="cornershop-pop" />,
              formatExample: false
            },
            {
              code: `<CornershopIcon type="cornershop-pop" size="50" />
<!-- HTML output
<span class="cs-cornershop-icon-container" style="width: 50px; height: 50px;">
...the SVG will render here...
</span>
-->`,
              output: <CornershopIcon type="cornershop-pop" size={50} />,
              formatExample: false
            }
          ]}
        />

        {/* <ComponentInfo
          name="Grid"
          description="This a simple grid view, all the children will be arranged as grid."
          componentProps={[
            {
              propName: "gridTitle",
              propDescription: "Sets a title for the grid",
              type: "String"
            },
            {
              propName: "columns",
              propDescription:
                "Defines how many columns should have. By default the grid will arrange them automatically. If you set the columns to '1' they will have a width of 100%, '2' will be 50% and so on. The maximum number of columns is 8. Also, to assure the proper display of the elements, from 4 columns and up they will be responsive.",
              type: "String",
              propValues: "auto, 1, 2, 3, 4, 5, 6, 7, 8",
              default: "auto"
            }
          ]}
          codeExamples={[
            {
              code: '<Grid gridTitle="Products" columns="4">...</Grid>',
              output: (
                <Grid gridTitle="Products" columns="4">
                  {this._renderDummyContentForGrid()}
                </Grid>
              )
            }
          ]}
        /> */}

        <ComponentInfo
          name="Image"
          description="A very simple component that loads an image with a placeholder while it's loading"
          componentProps={[
            {
              propName: "src",
              propDescription: "Image source",
              type: "String",
              required: true
            },
            {
              propName: "width",
              propDescription: "The image width",
              type: "String",
              required: false
            },
            {
              propName: "height",
              propDescription: "The image height",
              type: "String",
              required: false
            },
            {
              propName: "color",
              propDescription: "The placeholder background color",
              type: "String",
              default: "#dedede"
            },
            {
              propName: "borderRadius",
              propDescription: "Adds a border radius to the image",
              type: "String",
              default: "5px"
            },
            {
              propName: "border",
              propDescription: "Adds a border",
              type: "String"
            }
          ]}
          codeExamples={[
            {
              code:
                '<Image alt="Canada" src="..." width="300px" height="178px" color="pink"/>',
              output: (
                <Image
                  alt="Canada"
                  src="https://torontostoreys.com/wp-content/uploads/2019/01/tom-gainor-737280-unsplash-770x456.jpg"
                  width="300px"
                  height="178px"
                  color="pink"
                />
              )
            }
          ]}
        />

        <ComponentInfo
          name="SkeletonBlock"
          description="A base skeleton component to build skeleton components"
          componentProps={[
            {
              propName: "width",
              propDescription: "The block width",
              type: "String",
              default: "100%"
            },
            {
              propName: "height",
              propDescription: "The block height",
              type: "String",
              default: "100%"
            },
            {
              propName: "color",
              propDescription: "The placeholder background color",
              type: "String",
              default: "rgba(0,0,0,0.05)"
            },
            {
              propName: "borderRadius",
              propDescription: "Adds a border radius to the image",
              type: "String",
              default: "5px"
            },
            {
              propName: "border",
              propDescription: "Adds a border",
              type: "String",
              default: "none"
            },
            {
              propName: "animationSpeed",
              propDescription: "The animation duration",
              type: "String",
              default: "1.5s"
            }
          ]}
          codeExamples={[
            {
              code: `<div>
  <SkeletonBlock width="120px" height="120px" borderRadius="50%"/>
  <SkeletonBlock width="calc(100% - 150px)" height="12px" borderRadius="6px"/>
</div>`,
              output: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <SkeletonBlock
                    width="120px"
                    height="120px"
                    borderRadius="50%"
                  />
                  <SkeletonBlock
                    width="calc(100% - 150px)"
                    height="12px"
                    borderRadius="6px"
                  />
                </div>
              ),
              formatExample: false
            }
          ]}
        />
      </Fragment>
    );
  }
}

export default ContentComponent;
