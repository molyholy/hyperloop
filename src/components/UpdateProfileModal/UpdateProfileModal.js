import React from "react";
import {
  ModalWrapper,
  Select,
  SelectItem,
  Checkbox,
  Search,
  Button
} from "carbon-components-react";

const UpdateProfileModal = props => {
  return (
    <ModalWrapper
      buttonTriggerText="Update Profile"
      buttonTriggerClassName="bx--btn--tertiary"
      modalHeading="Update Profile"
      modalText="Modal Text"
      shouldCloseAfterSubmit={true}
      handleSubmit={() => {
        return true;
      }}
      primaryButtonText="Apply"
    >
      <Select labelText="Profiling Tool Types">
        <SelectItem value="option-1" text="All" />
        <SelectItem value="option-2" text="Unstructured Data" />
        <SelectItem value="option-3" text="Structured Data" />
      </Select>
      <Button className="bx--btn--tertiary">Add a Profiling Tool</Button>
      <Search placeHolderText="Search" light={true} />
      <form>
        <fieldset>
          <legend />
          <Checkbox id="checkbox-label-1" labelText="NLU Categories" />
          <Checkbox id="checkbox-label-2" labelText="NLU Keywords" />
          <Checkbox id="checkbox-label-3" labelText="NLU Entities" />
          <Checkbox id="checkbox-label-4" labelText="NLU Emotion" />
          <Checkbox id="checkbox-label-5" labelText="NLU Concepts" />
          <Checkbox id="checkbox-label-6" labelText="Image Sentiment" />
          <Checkbox
            id="checkbox-label-7"
            labelText="JB Hunt Incident Recognizer"
          />
          <Checkbox
            id="checkbox-label-8"
            labelText="JB Hunt Driver Recognition"
          />
        </fieldset>
      </form>
    </ModalWrapper>
  );
};

export default UpdateProfileModal;
