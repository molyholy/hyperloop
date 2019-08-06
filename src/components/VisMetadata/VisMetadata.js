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
            <div className="bx--col-lg-4 " id="related-keywords">
              <h4>Related Keywords</h4>

              <a href="#">{props.links[0]}</a>

              <a href="#">{props.links[1]}</a>

              <a href="#">{props.links[2]}</a>
            </div>
            <div className="bx--col-lg-4 ">
              <h4>Related Concepts</h4>
              <a href="/">{props.links[3]}</a>

              <a href="#">{props.links[4]}</a>

              <a href="#">{props.links[5]}</a>
            </div>
            <div className="bx--col-lg-4 r">
              <h4>Related Categories</h4>
              <a href="#">{props.links[6]}</a>

              <a href="#">{props.links[7]}</a>

              <a href="#">{props.links[8]}</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VisMetadata;
