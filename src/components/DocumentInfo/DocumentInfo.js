import React from "react";
import Document16 from "@carbon/icons-react/lib/document/16";
import { Button, Tabs, Tab } from "carbon-components-react";
import CategoryTab from "../CategoryTab";

const tabProps = {
  tabs: {
    selected: 0,
    triggerHref: "#",
    role: "navigation"
  },
  tab: {
    href: "#",
    role: "presentation",
    tabIndex: 0
  }
};

const DocumentInfo = props => {
  return (
    <>
      <div className="bx--row main-page__doc-title-header">
        <div className="bx--col-lg-7 doc-title">
          <Document16 style={{ float: "left", marginRight: "2px" }} />
          <h6>Data Asset</h6>
          <h1>{props.docName}</h1>
        </div>
        <div className="bx--col-lg-4 update-message">
          <p>Last Profiled: {props.profileDate}</p>
          <Button className="bx--btn--tertiary">Update Profile</Button>
        </div>
      </div>

      <div className="bx--row profile-tabs">
        <Tabs {...tabProps.tabs}>
          <Tab {...tabProps.tab} label="Categories">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row">
                <div className="bx--col-lg-1">
                  <p>4 columns</p>
                </div>
                <div className="bx--col-lg-8">12 columns</div>
              </div>
            </div>
          </Tab>
          <Tab {...tabProps.tab} label="Keywords">
            <div> Keywords </div>
          </Tab>
          <Tab {...tabProps.tab} label="Entities">
            <div> Entities </div>
          </Tab>
          <Tab {...tabProps.tab} label="Emotion">
            <div>Emotion</div>
          </Tab>
          <Tab {...tabProps.tab} label="Concepts">
            <div> Concepts </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default DocumentInfo;
