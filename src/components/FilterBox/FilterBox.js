import React from "react";
import { RadioButton, Tile } from "carbon-components-react";

const FilterBox = props => {
  return (
    <>
      <div id="filterTile">
        <Tile>
          <h2> Filter By</h2>
          <br />
          <RadioButton
            id="radio-1"
            className="some-class"
            name="test"
            value="standard"
            labelText="Relevance"
            checked={false}
            disabled={false}
          />
        </Tile>
      </div>
    </>
  );
};

export default FilterBox;
