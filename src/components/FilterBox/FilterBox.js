import React from "react";
import { RadioButton } from "carbon-components-react";

const FilterBox = props => {
  return (
    <>
      <div id="filterTile">
        <h3> Filter By</h3>

        <RadioButton
          id="radio-1"
          className="some-class"
          name="test"
          value="standard"
          labelText="Relevance"
          checked={false}
          disabled={false}
        />
      </div>
    </>
  );
};

export default FilterBox;
