import React from "react";
import { Button } from "carbon-components-react";
const VisMetadata = props => {
  return (
    <>
      <div className="bx--grid bx--no-gutter">
        <div className="bx--row bx--no-gutter ">
          <div className="bx--col-lg-5  graph-details">
            <h6>{props.title}</h6>
            <h3>{props.subtitle}</h3>
            <h5>{props.details}</h5>
            <Button className="bx--btn--tertiary">See in JSON Format</Button>
          </div>
        </div>
        {props.isCustom ? null : (
          <div className="bx--row bx--no-gutter">
            <div className="bx--col-lg-4 ">
              <h4>Related Keywords</h4>
              <a href="#">Unruly Annotation</a>

              <a href="#">Privacy Policy</a>

              <a href="#">Faster Workflow</a>
            </div>
            <div className="bx--col-lg-4 ">
              <h4>Related Concepts</h4>
              <a href="/">Data Governance</a>

              <a href="#">Steward</a>

              <a href="#">WKC</a>
            </div>
            <div className="bx--col-lg-4 r">
              <h4>Related Categories</h4>
              <a href="#">enterprise</a>

              <a href="#">technology/data</a>

              <a href="#">management</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VisMetadata;
