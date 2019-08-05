import React from "react";
import { Tabs, Tab } from "carbon-components-react";

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

const CategoryTab = props => {
  return (
    <div className="bx--row">
      <div className="bx--col-lg-10">
        <p>4 columns</p>
      </div>
      <div className="bx--col-lg-8">12 columns</div>
    </div>
  );
};

export default CategoryTab;
