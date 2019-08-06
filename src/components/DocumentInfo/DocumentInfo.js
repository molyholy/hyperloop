import React from "react";
//import Document16 from "@carbon/icons-react/lib/document/16";
import { Button, Tabs, Tab } from "carbon-components-react";

import InformationFilled16 from "@carbon/icons-react/lib/information--filled/16";
import Folder16 from "@carbon/icons-react/lib/folder/16";
import FilterBox from "../FilterBox";
import VisMetadata from "../VisMetadata";
import BarChart from "../BarChart";

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
      <div className="bx--grid bx--grid--full-width bx--no-gutter">
        <div className="bx--row  doc_info">
          <div className="bx--col-lg-8 main-page__doc-title-header">
            <Folder16
              style={{
                display: "inline",
                position: "relative",
                top: "2px",
                marginRight: "4px"
              }}
            />
            <p style={{ display: "inline" }}>Data Asset</p>
            <h1>Big Ideas_Detailed Concepts.pdf</h1>
          </div>
          <div className="bx--col-lg-4 update-profile-info bx--no-gutter">
            <InformationFilled16
              style={{
                position: "relative",
                top: "4px",
                marginRight: "8px"
              }}
            />
            <h6
              style={{
                display: "inline",
                verticalAlign: "middle"
              }}
            >
              Last Profiled Jul 24, 2019 4:22 PM
            </h6>
            <Button className="bx--btn--tertiary">Update Profile</Button>
          </div>
        </div>

        <div className="bx--row nested-tabs">
          <div className="bx--col ">
            <Tabs {...tabProps.tabs}>
              <Tab {...tabProps.tab} label="Categories">
                <div className="bx--grid bx--grid--full-width ">
                  <div className="bx--row categories__tab-content">
                    <div className="bx--col-lg-1 bx--no-gutter tile-column">
                      <FilterBox />
                    </div>
                    <div className="bx--col-lg-7 graph">
                      <BarChart
                        categories={[
                          "technology & computing/software/databases",
                          "data management",
                          "technology & computing/interrnet technology/web search/people search"
                        ]}
                        data={[100, 90, 80]}
                      />
                    </div>
                    <div className="bx--col-lg-4 graph-details">
                      <VisMetadata
                        title="CATEGORY"
                        subtitle="/technology and computing/software/databases"
                        details="Relevance: 83%"
                        isCustom={false}
                        links={[
                          "Unruly Annotation",
                          "Privacy Policy",
                          "Faster Workflow",
                          "Data Governance",
                          "Steward",
                          "WKC",
                          "enterprise",
                          "technology/data",
                          "management"
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab {...tabProps.tab} label="Keywords">
                <div> Keywords </div>
              </Tab>
              <Tab {...tabProps.tab} label="Entities">
                <div className="bx--grid bx--grid--full-width ">
                  <div className="bx--row categories__tab-content">
                    <div className="bx--col-lg-1 bx--no-gutter">
                      <FilterBox />
                    </div>
                    <div className="bx--col-lg-7 graph">
                      <div>fdkfjdkj</div>
                    </div>
                    <div className="bx--col-lg-4 graph-details">
                      <VisMetadata
                        title="ENTITY"
                        subtitle="Governance and Privacy"
                        details={
                          "Type: Job Title \n Count: 7 \n Relevance: 79%"
                        }
                        isCustom={false}
                        links={[
                          "Unruly Annotation",
                          "Privacy Policy",
                          "Faster Workflow",
                          "Data Governance",
                          "Steward",
                          "WKC",
                          "enterprise",
                          "technology/data",
                          "management"
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...tabProps.tab} label="Emotion">
                <div>Emotion</div>
              </Tab>
              <Tab {...tabProps.tab} label="Concepts">
                <div> Concepts </div>
              </Tab>
              <Tab {...tabProps.tab} label="Custom">
                <div> Custom </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      {/* <div className="bx--row main-page__doc-title-header">
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
      </div> */}
    </>
  );
};

export default DocumentInfo;
